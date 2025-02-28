import { createSlice } from '@reduxjs/toolkit'
import { getAnecdotes, createAnecdote, voteAnecdote } from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    updateAnecdote(state, action) {
      console.log(`✅ Updating anecdote in Redux store:`, action.payload) // ✅ Redux güncellemesini kontrol et
      return state.map(anecdote =>
        anecdote.id === action.payload.id ? action.payload : anecdote
      )
    }
  }
})

export const { setAnecdotes, appendAnecdote, updateAnecdote } = anecdoteSlice.actions

// ✅ Backend’den anekdotları çekme işlemi
export const initializeAnecdotes = () => {
  return async (dispatch) => {
    console.log("Fetching anecdotes from API...") // ✅ Konsola yazdıralım
    try {
      const anecdotes = await getAnecdotes()
      console.log("Fetched anecdotes:", anecdotes) // ✅ API'den gelen veriyi kontrol edelim
      dispatch(setAnecdotes(anecdotes))
    } catch (error) {
      console.error("Error fetching anecdotes:", error)
    }
  }
}

// ✅ Yeni anekdot oluşturma işlemi
export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await createAnecdote(content) // Backend'e yeni anekdot ekle
    dispatch(appendAnecdote(newAnecdote)) // Redux store’a ekle
  }
}

// ✅ Oy verme işlemi (Backend ile bağlantılı)
export const voteForAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdote = getState().anecdotes.find(a => a.id === id)
    if (!anecdote) {
      console.error(`❌ Anecdote with ID ${id} not found in state`)
      return
    }

    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }

    console.log(`🔄 Sending vote request for: ${id}, new votes: ${updatedAnecdote.votes}`) // ✅ Konsola yazdıralım

    try {
      const savedAnecdote = await voteAnecdote(id, updatedAnecdote) // ✅ Backend'e güncelleme isteği gönder
      console.log(`✅ Vote successful for ${id}`, savedAnecdote) // ✅ Backend'den dönen yanıt
      dispatch(updateAnecdote(savedAnecdote)) // ✅ Redux store'u güncelle
    } catch (error) {
      console.error(`❌ Error while voting:`, error) // ❌ Hata varsa göster
    }
  }
}


export default anecdoteSlice.reducer
