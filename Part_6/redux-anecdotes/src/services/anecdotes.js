import axios from 'axios'

// ✅ JSON Server'ın portu burada tanımlı olmalı!
const baseUrl = 'http://localhost:3001/anecdotes'  // Eğer JSON Server 3001'de çalışıyorsa

export const getAnecdotes = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const createAnecdote = async (content) => {
  const newAnecdote = { content, votes: 0 }
  const response = await axios.post(baseUrl, newAnecdote) // Yeni anekdot ekleme
  return response.data
}

export const voteAnecdote = async (id, anecdote) => {
    console.log(`📡 Sending PUT request to backend: ${baseUrl}/${id}`, anecdote) // ✅ Konsola yazdıralım
  
    try {
      const response = await axios.put(`${baseUrl}/${id}`, anecdote)
      console.log(`✅ PUT request successful:`, response.data) // ✅ Başarılı yanıt
      return response.data
    } catch (error) {
      console.error(`❌ PUT request failed:`, error) // ❌ Hata varsa göster
    }
  }