import DataUserResponse from '@/models/dataUserResponse.js'
import LoginResponse from '@/models/loginResponse.js'
class MainLocalStorage {
  static setSessionLogin(bool) {
    localStorage.setItem('sessionLogin', bool)
  }

  static getSessionLogin() {
    return localStorage.getItem('sessionLogin') ?? false
  }

  static setDataUser(data) {
    localStorage.setItem('dataUser', JSON.stringify(data))
  }

  static setDataLogin(data) {
    localStorage.setItem('login', JSON.stringify(data))
  }

  static getDataLogin() {
    return JSON.parse(localStorage.getItem('login'))
  }

  static getDataUser() {
    const result = JSON.parse(localStorage.getItem('dataUser'))
    return new DataUserResponse(result)
  }

  static setLoginResponse(data) {
    localStorage.setItem('loginResponse', JSON.stringify(data))
  }

  static getLoginResponse() {
    const result = JSON.parse(localStorage.getItem('loginResponse'))
    if (result == null) return null
    if (result != null) return new LoginResponse(result)
  }

  static setSelectedLocation(data) {
    localStorage.setItem('location', JSON.stringify(data))
  }

  static setTimeArrival(data) {
    localStorage.setItem('timeArrival', JSON.stringify(data))
  }
  static getTimeArrival() {
    return JSON.parse(localStorage.getItem('timeArrival'))
  }

  static setTimeBack(data) {
    localStorage.setItem('timeBack', JSON.stringify(data))
  }

  static getTimeBack() {
    return JSON.parse(localStorage.getItem('timeBack'))
  }
  static getSelectedLocation() {
    return JSON.parse(localStorage.getItem('location'))
  }

  static logOut() {
    var keysToPreserve = ['login']
    for (var i = 0; i < sessionStorage.length; i++) {
      var key = sessionStorage.key(i)

      // Check if the current key should be preserved
      if (!keysToPreserve.includes(key)) {
        // Remove the item from Session Storage
        sessionStorage.removeItem(key)
      }
    }
  }

  static clear() {
    localStorage.clear()
  }
}

export default MainLocalStorage
