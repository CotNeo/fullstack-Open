import { useField } from './hooks/index.js'
import { useNavigate } from 'react-router-dom'

const CreateNew = ({ addAnecdote }) => {
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault()
    addAnecdote({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
      id: Math.floor(Math.random() * 10000)
    })
    navigate('/')
  }

  const handleReset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>Create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Content <input {...content.inputProps} />
        </div>
        <div>
          Author <input {...author.inputProps} />
        </div>
        <div>
          URL <input {...info.inputProps} />
        </div>
        <button type="submit">Create</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>
    </div>
  )
}

export default CreateNew
