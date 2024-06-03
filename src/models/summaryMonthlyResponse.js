class AttendanceDetail {
  constructor(detailData) {
    this.jam_datang = detailData.jam_datang || '-'
    this.jam_pulang = detailData.jam_pulang || '-'
    this.lokasi_datang = detailData.lokasi_datang || '-'
    this.lokasi_pulang = detailData.lokasi_pulang || '-'
    this.catatan_datang = detailData.catatan_datang || '-'
    this.catatan_pulang = detailData.catatan_pulang || '-'
  }
}

class AttendanceRecord {
  constructor(recordData) {
    this.hari = recordData.hari || '-'
    this.status = recordData.status || '-'
    this.detail = new AttendanceDetail(recordData.detail || {})
  }
}

class SummaryMonthly {
  constructor(data) {
    this.is_correct = data.is_correct ?? false
    this.message = data.message || ''
    this.hadir = `${data.hadir} Hari` || '0 Hari'
    this.ijin = `${data.ijin} Hari` || '0 Hari'
    this.sakit = `${data.sakit} Hari` || '0 Hari'
    this.lain = `${data.lain} Hari` || '0 hari'
    this.terlambat = `${data.terlambat} Hari` || '0 Hari'
    this.percentase = data.percentase || '0 Hari'
    this.percentase_hari = data.percentase_hari || '0/0 Hari'
    this.hadir_tahun_ini = data.hadir_tahun_ini || '0 Hari'
    this.rekap = Array.isArray(data.rekap)
      ? data.rekap.map((record) => new AttendanceRecord(record))
      : []
  }
}

export default SummaryMonthly
