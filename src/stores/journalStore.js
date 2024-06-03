import { defineStore } from 'pinia'
import { useStateStore } from '@/stores/stateStore.js'
import mainRepositories from '@/services/mainRepositories.js'
// import setFormDataUtils from '@/utils/setFormDataUtils.js'
import mainLocalStorage from '@/services/mainLocalStorage.js'
// import ConvertDate from '@/utils/convertDate.js'

export const useJournalStore = defineStore('journalStore', {
  state: () => ({
    data: null
  }),
  actions: {
    async getReportJournal({ month, class_id }) {
      const stateStore = useStateStore()
      stateStore.Loading()
      const sendData = {
        kode_sekolah: mainLocalStorage.getLoginResponse().kode_sekolah,
        id_pegawai: mainLocalStorage.getLoginResponse().id_pegawai,
        id_bulan: month,
        id_kelas: class_id
      }
      try {
        const response = await mainRepositories.reportJournal(sendData)
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
    async journal() {
      const stateStore = useStateStore()
      stateStore.Loading()
      const kd = mainLocalStorage.getLoginResponse().kode_sekolah
      const ip = mainLocalStorage.getLoginResponse().id_pegawai
      this.data =
        import.meta.env.VITE_BASE_URL_API + '/presensi_pelajaran_webview.php?ks=' + kd + '&ip=' + ip
      stateStore.Success()
    }
  }
})
