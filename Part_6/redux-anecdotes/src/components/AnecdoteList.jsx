import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useMemo } from 'react'
import { initializeAnecdotes, voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationWithTimeout } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes()) // ✅ Verileri çekme işlemi
  }, [dispatch])

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  // ✅ Filtreleme ve sıralama işlemini optimize etmek için useMemo kullanıldı
  const filteredAnecdotes = useMemo(() => {
    return anecdotes
      .filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => b.votes - a.votes)
  }, [anecdotes, filter])

  const vote = (id, content) => {
    console.log(`➡️ Voting for: ${id} - ${content}`) // ✅ Konsola yazdıralım
    dispatch(voteForAnecdote(id)) // ✅ Redux store’a aksiyonu gönder
    dispatch(setNotificationWithTimeout(`You voted for "${content}"`, 5)) // ✅ Bildirim ekleyelim
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {filteredAnecdotes.map(anecdote => (
        <div key={anecdote.id} style={{ marginBottom: 10 }}>
          <p>{anecdote.content}</p>
          <p>has {anecdote.votes} votes</p>
          <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
        </div>
      ))}
    </div>
  )
}

export default AnecdoteList
