import { defineStore } from 'pinia'
import { useStateStore } from '@/stores/stateStore.js';
import { useRouter } from 'vue-router'
import mainRepositories from '@/services/mainRepositories.js'
// checkUtils
// import checkUtils from '@/utils/checkInputUtils.js'
// setformdata
import setFormDataUtils from '@/utils/setFormDataUtils.js'
// models
import LoginResponse from '@/models/loginResponse.js'
import DataUserResponse from '@/models/dataUserResponse.js'
// mainLocalStorage
import mainLocalStorage from '@/services/mainLocalStorage.js'
import { useAlertStore } from './alertStore'
import { useSessionStorage } from '@vueuse/core/index.cjs';



const stateStore = useStateStore();
const alertStore = useAlertStore();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    data: null,
    forgotPasswordData: useSessionStorage('forgotPassword', {
      is_correct: false,
      kode_sekolah: '',
      nis: '',
      secret: '',
      message: ''
    }),
  }),
  actions: {
    async login({ router, kode_sekolah, nip, password }) {
      localStorage.clear()
      const stateStore = useStateStore()
      try {
        stateStore.Loading()
        const dataLogin = setFormDataUtils.setFormData({
          kode_sekolah: kode_sekolah,
          nip: nip,
          password: password
        })
        const response = await mainRepositories.login(dataLogin)
        const loginResponse = new LoginResponse(response.data)
        if (loginResponse.is_correct) {
          const dataUser = await this.dataUser(loginResponse)
          if (dataUser.is_correct == true) {
            mainLocalStorage.setDataLogin({
              kode_sekolah: kode_sekolah,
              nip: nip,
              password: password
            })
            mainLocalStorage.setLoginResponse(loginResponse)
            mainLocalStorage.setDataUser(dataUser)
            stateStore.Success()
            router.push({ name: 'home' })
          } else {
            stateStore.Error('something wrong')
          }
        } else {
          stateStore.Error(response.data.message)
        }
      } catch (error) {
        stateStore.Error(error.message)
      }
    },

    async dataUser(data) {
      const dataUser = setFormDataUtils.setFormData({
        kode_sekolah: data.kode_sekolah,
        id_pegawai: data.id_pegawai
      })
      const response = await mainRepositories.dataUser(dataUser)
      return new DataUserResponse(response.data)
    },

    logout({ globalStore }) {
      this.loggedIn = false
      globalStore.clearMessages()
    },

    async getOtp({
      kode_sekolah,
      nip
    }) {
      stateStore.Loading()
      try {
        const data = setFormDataUtils.setFormData({
          kode_sekolah: kode_sekolah,
          nip: nip
        })
        const response = await mainRepositories.getOtp(data)
        stateStore.Success()
        if (response.data.is_correct) {
          alertStore.showAlert('success', response.data.message);
          this.forgotPasswordData = {
            ...response.data,
          }
        }
      } catch (error) {
        stateStore.Error(error.message);
        console.log('error', error);
        return error
      }
    },

    async submitOtp({
      router,
      kode_sekolah,
      nip,
      codeOtp
    }) {
      console.log('submitOtp', kode_sekolah, nip, codeOtp);
      stateStore.Loading()
      try {
        const data = setFormDataUtils.setFormData({
          kode_sekolah: kode_sekolah,
          nip: nip,
          code: codeOtp
        })
        const response = await mainRepositories.submitOtp(data);

        if(response.data.is_correct == true){
          stateStore.Success();
          router.push({ name: 'resetPassword' })
        }else{
          stateStore.Error(response.data.message);
          if(response.data.message != 'Kode OTP yang Anda Masukkan Salah'){
            router.push({ name: 'forgotPassword' })
          }
        }
      } catch (error) {
        stateStore.Error(error.message)
        console.log('error', error);
        return error
      }
    },

    async resetPassword({
      router,
      kode_sekolah,
      nip,
      password
    }) {
      console.log('resetPassword', kode_sekolah, nip, password);
      stateStore.Loading()
      try {
        const data = setFormDataUtils.setFormData({
          kode_sekolah: kode_sekolah,
          nip: nip,
          reset: password
        })
        const response = await mainRepositories.resetPassword(data);
        if(response.data.is_correct == true){
          stateStore.Success();
          alertStore.showAlert('success', response.data.message);
          this.clear();
          router.push({ name: 'login' })
        }else{
          stateStore.Error(response.data.message);
        }
      } catch (error) {
        stateStore.Error(error.message)
        console.log('error', error);
        return error
      }
    },

    clear(){
      this.forgotPasswordData = {
        is_correct: false,
        kode_sekolah: '',
        nip: '',
        secret: '',
        message: ''
      }
    }
  }
})
