import axios from 'axios'

const baseUrl = "https://phonebook-backend-77kw.onrender.com/api/persons"
//for development
//const baseUrl = "http://localhost:3001/api/persons"

// 📌 Tüm kişileri getir
const getAll = async () => {
  try {
    const response = await axios.get(baseUrl)
    return response.data
  } catch (error) {
    console.error("❌ Kişileri çekerken hata oluştu:", error.message)
    throw new Error("Veriler alınamadı, lütfen tekrar deneyin.")
  }
}

// 📌 Yeni kişi ekle
const create = async (newPerson) => {
  try {
    const response = await axios.post(baseUrl, newPerson)
    return response.data
  } catch (error) {
    console.error("❌ Kişi eklenirken hata oluştu:", error.response?.data || error.message)
    throw new Error(error.response?.data?.error || "Kişi eklenirken hata oluştu.")
  }
}

// 📌 Kişi bilgilerini güncelle
const update = async (id, updatedPerson) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedPerson)
    return response.data
  } catch (error) {
    console.error("❌ Güncelleme hatası:", error.response?.data || error.message)
    throw new Error(error.response?.data?.error || "Güncelleme başarısız.")
  }
}

// 📌 Kişiyi sil
const remove = async (id) => {
  try {
    const response = await axios.delete(`${baseUrl}/${id}`)
    return response.data
  } catch (error) {
    console.error("❌ Kişi silinirken hata oluştu:", error.response?.data || error.message)
    throw new Error("Silme işlemi başarısız, kişi bulunamadı.")
  }
}

export default { getAll, create, update, remove }

//first version

/*const baseUrl = 'http://localhost:3001/api/persons' 

const baseUrl = "https://phonebook-backend-77kw.onrender.com/api/persons"; 


const getAll = () => {
  return axios.get(baseUrl).then(response => response.data)
}

const create = (newPerson) => {
  return axios.post(baseUrl, newPerson).then(response => response.data)
}

const update = (id, updatedPerson) => {
  return axios.put(`${baseUrl}/${id}`, updatedPerson).then(response => response.data)
}

const remove = (id) => {
  return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

export default { getAll, create, update, remove }*/
