import MainLocalStorage from '@/services/mainLocalStorage.js'

class LoginResponse {
  constructor(data) {
    this.is_correct = data.is_correct || ''
    this.message = data.message || ''
    this.kode_sekolah = data.kode_sekolah || ''
    this.nip = data.nip || ''
    this.id_pegawai = data.id_pegawai || ''
    this.mode_absen = data.mode_absen || ''
    this.waktu_indonesia = data.waktu_indonesia || ''
  }

  getIdPegawai() {
    MainLocalStorage.getLoginResponse().id_pegawai || null
  }
}
export default LoginResponse
