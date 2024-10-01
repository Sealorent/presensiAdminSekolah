import axios from 'axios'

class Static {
  static url(endpoint) {
    return import.meta.env.VITE_BASE_URL_API + '/' + endpoint // Replace 'api.github.com' with your actual API URL
  }
}

class MainRepositories {
  login(data) {
    var config = {
      method: 'post',
      url: Static.url('login.php'),
      data: data
    }
    return axios(config)
  }

  getOtp(data) {
    var config = {
      method: 'post',
      url: Static.url('get_otp.php'),
      data: data
    }
    return axios(config)
  }

  submitOtp(data) {
    var config = {
      method: 'post',
      url: Static.url('verify_otp.php'),
      data: data
    }
    return axios(config)
  }

  resetPassword(data) {
    var config = {
      method: 'post',
      url: Static.url('reset_password.php'),
      data: data
    }
    return axios(config)
  }

  dataUser(data) {
    var config = {
      method: 'post',
      url: Static.url('data_user.php'),
      data: data
    }
    return axios(config)
  }

  present(data) {
    var config = {
      method: 'post',
      url: Static.url('absen_datangpulang.php'),
      data: data
    }
    return axios(config)
  }

  permit(data) {
    var config = {
      method: 'post',
      url: Static.url('ijin_datangpulang.php'),
      data: data
    }
    return axios(config)
  }

  major(kode_sekolah) {
    var config = {
      method: 'get',
      url: Static.url(`get_majors.php?kode_sekolah=${kode_sekolah}`)
    }

    return axios(config)
  }

  class(data) {
    var config = {
      method: 'get',
      url: Static.url(`get_class.php?kode_sekolah=${data.kode_sekolah}&id_unit=${data.id_unit}`)
    }

    return axios(config)
  }

  month(kode_sekolah) {
    return axios.get(Static.url('get_month.php'), {
      params: {
        kode_sekolah: kode_sekolah
      }
    })
  }

  summaryMonthly(params) {
    return axios.get(Static.url('laporan_datangpulang.php'), { params: params })
  }

  summaryYearly(params) {
    return axios.get(Static.url('laporantahun_datangpulang.php'), { params: params })
  }

  reportJournal(params) {
    return axios.get(Static.url('jurnal_mengajar_laporan.php'), { params: params })
  }


}

export default new MainRepositories()
