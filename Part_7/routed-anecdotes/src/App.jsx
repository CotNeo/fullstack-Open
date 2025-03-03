import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import CreateNew from './components/CreateNew'
import Menu from './components/Menu'
import Footer from './components/Footer'
import Notification from './components/Notification'
import './App.css'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    { content: 'React Router is great!', author: 'Dan Abramov', info: 'https://reactrouter.com/', votes: 10, id: 1 }
  ])
  const [notification, setNotification] = useState('')

  const addAnecdote = (anecdote) => {
    setAnecdotes(anecdotes.concat(anecdote))
    setNotification(`Anecdote '${anecdote.content}' added successfully!`)
    setTimeout(() => setNotification(''), 5000)
  }

  return (
    <Router>
      <div>
        <h1>Anecdote App</h1>
        <Menu />
        <Notification message={notification} />
        <Routes>
          <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
          <Route path="/create" element={<CreateNew addAnecdote={addAnecdote} />} />
          <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
