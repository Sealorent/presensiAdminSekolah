class summaryYearly {
  constructor(data) {
    this.isCorrect = data.is_correct || false
    this.message = data.message || 'unknown'
    this.hadir = `${data.hadir} Hari` || '0 Hari'
    this.ijin = `${data.ijin} Hari` || '0 Hari'
    this.sakit = `${data.sakit} Hari` || '0 Hari'
    this.lain = `${data.lain} Hari` || '0 Hari'
    this.terlambat = `${data.terlambat} Hari` || '0 Hari'
    this.percentase = parseFloat(data.percentase) || '0.00'
    this.percentaseHari = data.percentase_hari || '0/264 Hari'
  }
}

export default summaryYearly
