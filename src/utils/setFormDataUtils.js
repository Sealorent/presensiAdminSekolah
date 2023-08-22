class SetFormDataUtils {
  static setFormData = (data) => {
    let formData = new FormData()
    for (let key in data) {
      formData.append(key, data[key])
    }
    return formData
  }
}
export default SetFormDataUtils
