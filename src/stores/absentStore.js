import { defineStore } from 'pinia'
import { useStateStore } from '@/stores/stateStore.js'
import mainRepositories from '@/services/mainRepositories.js'
// checkUtils
// import checkUtils from '@/utils/checkInputUtils.js'
// setformdata
import setFormDataUtils from '@/utils/setFormDataUtils.js'
// mainLocalStorage
import mainLocalStorage from '@/services/mainLocalStorage.js'
// import { set } from 'date-fns'

export const useAbsentStore = defineStore('absent', {
  state: () => ({
    data: null
  }),
  actions: {
    async present({ router, image, lokasi, keterangan }) {
      const stateStore = useStateStore()
      try {
        stateStore.Loading()
        const dataPresent = setFormDataUtils.setFormData({
          kode_sekolah: mainLocalStorage.getLoginResponse().kode_sekolah,
          id_pegawai: mainLocalStorage.getLoginResponse().id_pegawai,
          type: 'DATANG',
          lokasi: lokasi.lokasi,
          lati: lokasi.latitude,
          longi: lokasi.longitude,
          keterangan: keterangan,
          image: image
        })
        const response = await mainRepositories.present(dataPresent)
        if (response.data.is_correct == true) {
          stateStore.Success()
          this.setTimeArrivalNow()
          router.push({ name: 'home' })
        } else {
          stateStore.Error('something wrong')
        }
      } catch (error) {
        stateStore.Error(error.message)
      } finally {
        stateStore.Finish()
      }
    },
    async backHome({ router, image, lokasi, keterangan }) {
      const stateStore = useStateStore()
      try {
        stateStore.Loading()
        const dataPresent = setFormDataUtils.setFormData({
          kode_sekolah: mainLocalStorage.getLoginResponse().kode_sekolah,
          id_pegawai: mainLocalStorage.getLoginResponse().id_pegawai,
          type: 'PULANG',
          lokasi: lokasi.lokasi,
          lati: lokasi.latitude,
          longi: lokasi.longitude,
          keterangan: keterangan,
          image: image
        })
        console.log(dataPresent)
        const response = await mainRepositories.present(dataPresent)
        console.log('back home')
        console.log(response.data)
        if (response.data.is_correct == true) {
          router.push({ name: 'home' })
          this.setTimeBackHomeNow()
          stateStore.Success()
        } else {
          router.push({ name: 'home' })
        }
      } catch (error) {
        router.push({ name: 'home' })
        stateStore.Error(error.message)
      } finally {
        stateStore.Finish()
      }
    },
    setTimeArrivalNow() {
      const timeNow = this.setTimeNow()
      mainLocalStorage.setTimeArrival(timeNow)
    },
    setTimeBackHomeNow() {
      const timeNow = this.setTimeNow()
      console.log('setTimeBackHomeNow')
      console.log(timeNow)
      mainLocalStorage.setTimeBack(timeNow)
    },
    setTimeNow() {
      const now = new Date()
      const hours = String(now.getHours()).padStart(2, '0')
      const minutes = String(now.getMinutes()).padStart(2, '0')
      return `${hours}:${minutes}`
    }
  }
})
