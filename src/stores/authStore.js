import { defineStore } from 'pinia'
import { useStateStore } from '@/stores/stateStore.js'
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

export const useAuthStore = defineStore('auth', {
  state: () => ({
    data: null
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
    }
  }
})
