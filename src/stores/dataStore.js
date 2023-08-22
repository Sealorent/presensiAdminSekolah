import { defineStore } from 'pinia'
import { useStateStore } from '@/stores/stateStore.js'
import mainRepositories from '@/services/mainRepositories.js'
// import setFormDataUtils from '@/utils/setFormDataUtils.js'
import mainLocalStorage from '@/services/mainLocalStorage.js'
// import ConvertDate from '@/utils/convertDate.js'

export const useDataStore = defineStore('data', {
  state: () => ({
    data: null
  }),
  actions: {
    async major() {
      const stateStore = useStateStore()
      stateStore.Loading()
      try {
        const kode_sekolah = mainLocalStorage.getLoginResponse().kode_sekolah
        const response = await mainRepositories.major(kode_sekolah)
        if (response.data.is_correct == true) {
          this.data = response.data.unit
          stateStore.Success()
        } else {
          stateStore.Error(response.data.message)
        }
      } catch (error) {
        stateStore.Error(error.message)
      }
    },
    async class({ id_unit }) {
      const stateStore = useStateStore()
      stateStore.Loading()
      const sendData = {
        kode_sekolah: mainLocalStorage.getLoginResponse().kode_sekolah,
        id_unit: id_unit
      }
      try {
        const response = await mainRepositories.class(sendData)
        if (response.data.is_correct) {
          this.data = response.data.kelas
          stateStore.Success()
        } else {
          stateStore.Error(response.data.message)
        }
      } catch (error) {
        stateStore.Error(error.message)
      }
    },
    async month() {
      const stateStore = useStateStore()
      stateStore.Loading()
      const kode_sekolah = mainLocalStorage.getLoginResponse().kode_sekolah
      try {
        console.log(kode_sekolah)
        const response = await mainRepositories.month(kode_sekolah)
        if (response.data.is_correct) {
          this.data = response.data.data
          stateStore.Success()
        } else {
          stateStore.Error(response.data.message)
        }
      } catch (error) {
        stateStore.Error(error.message)
      }
    }
  }
})
