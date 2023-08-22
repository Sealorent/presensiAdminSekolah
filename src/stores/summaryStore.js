import { defineStore } from 'pinia'
import { useStateStore } from '@/stores/stateStore.js'
import mainRepositories from '@/services/mainRepositories.js'
// import setFormDataUtils from '@/utils/setFormDataUtils.js'
import mainLocalStorage from '@/services/mainLocalStorage.js'
// import ConvertDate from '@/utils/convertDate.js'

export const useSummaryStore = defineStore('summaryStore', {
  state: () => ({
    data: null
  }),
  actions: {
    async getMonthly({ month, year }) {
      const stateStore = useStateStore()
      stateStore.Loading()
      const sendData = {
        kode_sekolah: mainLocalStorage.getLoginResponse().kode_sekolah,
        id_pegawai: mainLocalStorage.getLoginResponse().id_pegawai,
        type: 'BULANAN',
        tahun: year,
        bulan: month
      }
      try {
        const response = await mainRepositories.summaryMonthly(sendData)
        if (response.data.is_correct == true) {
          this.data = response.data
          stateStore.Success()
        } else {
          stateStore.Error(response.data.message)
        }
      } catch (error) {
        stateStore.Error(error.message)
      }
    },
    async getYearly({ year }) {
      const stateStore = useStateStore()
      stateStore.Loading()
      const sendData = {
        kode_sekolah: mainLocalStorage.getLoginResponse().kode_sekolah,
        id_pegawai: mainLocalStorage.getLoginResponse().id_pegawai,
        type: 'TAHUNAN',
        tahun: year
      }
      console.log(sendData)
      try {
        const response = await mainRepositories.summaryYearly(sendData)
        console.log(response)
        // if (response.data.is_correct === true) {
        this.data = response.data
        stateStore.Success()
        // } else {
        //   stateStore.Error(response.data.message)
        // }
      } catch (error) {
        console.log('err')
        stateStore.Error(error.message)
      }
    }
  }
})
