import { defineStore } from 'pinia'
import { useStateStore } from '@/stores/stateStore.js'
import mainRepositories from '@/services/mainRepositories.js'
import setFormDataUtils from '@/utils/setFormDataUtils.js'
import mainLocalStorage from '@/services/mainLocalStorage.js'
import ConvertDate from '@/utils/convertDate.js'

export const usePermissionStore = defineStore('data', {
  state: () => ({
    data: null
  }),
  actions: {
    async permit({ router, file, range, jenis, keterangan }) {
      const stateStore = useStateStore()
      stateStore.Loading()
      try {
        const dataPresent = setFormDataUtils.setFormData({
          kode_sekolah: mainLocalStorage.getLoginResponse().kode_sekolah,
          id_pegawai: mainLocalStorage.getLoginResponse().id_pegawai,
          jenis: jenis,
          tgl_awal: ConvertDate.dateMonthYear(range.start),
          tgl_akhir: ConvertDate.dateMonthYear(range.end),
          keterangan: keterangan,
          file: file
        })
        const response = await mainRepositories.permit(dataPresent)
        if (response.data.is_correct == true) {
          stateStore.Success()
          router.push({ name: 'home' })
        } else {
          stateStore.Error(response.data.message)
          router.push({ name: 'home' })
        }
      } catch (error) {
        stateStore.Error(error.message)
        router.push({ name: 'home' })
      }
    }
  }
})
