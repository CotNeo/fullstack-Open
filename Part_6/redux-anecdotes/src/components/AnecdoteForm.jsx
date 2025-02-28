import { useDispatch } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer' // ✅ Doğru import edilmeli

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const createAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(createNewAnecdote(content)) // ✅ Redux ile backend’e anekdot ekle
    dispatch(setNotificationWithTimeout(`Added "${content}"`, 5)) // ✅ Kullanıcıya bildirim göster
  }

  return (
    <form onSubmit={createAnecdote}>
      <input name="anecdote" />
      <button type="submit">Add Anecdote</button>
    </form>
  )
}

export default AnecdoteForm
