import dummyProfile from '@/assets/images/dummyProfile.png'
// import imageNotFound from '@/assets/images/imageNotFound.png'
class Area {
  constructor(data) {
    this.lokasi = data.lokasi || ''
    this.longitude = parseFloat(data.longitude) || ''
    this.latitude = parseFloat(data.latitude) || ''
  }
}

class Data {
  constructor(data) {
    this.photo = ''
    this.logo = data.logo || ''
    this.initializePhoto(data.photo)
    this.nama_sekolah = data.nama_sekolah || ''
    this.nama = data.nama || ''
    this.jabatan = data.jabatan || ''
    this.max_datang = data.max_datang || ''
    this.max_pulang = data.max_pulang || ''
    this.validasi = data.validasi || ''
    this.jarak_radius = data.jarak_radius || ''
    this.area = (data.area || []).map((area) => new Area(area))
    this.email = data.email || ''
    this.phone = data.phone || ''
  }
  async initializePhoto(photoUrl) {
    if (typeof photoUrl === 'string' && photoUrl.trim() !== '') {
      try {
        const res = await fetch(photoUrl, { method: 'HEAD' })
        if (res.status == 200) {
          this.photo = photoUrl // Set the provided URL if it's valid
        } else {
          this.photo = dummyProfile // Set default image URL when not accessible
        }
      } catch (error) {
        this.photo = dummyProfile // Set default image URL when not accessible
      }
    } else {
      this.photo = dummyProfile // Set default image URL if no URL is provided
    }
  }
}

class DataUser {
  constructor(data) {
    this.is_correct = data.is_correct || false
    this.message = data.message || ''
    this.data = new Data(data.data || {})
  }
}

export default DataUser
