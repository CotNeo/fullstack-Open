import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { LOGIN } from '../graphql/mutations'

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [login] = useMutation(LOGIN)

  const submit = async (event) => {
    event.preventDefault()

    try {
      const result = await login({ variables: { username, password } })
      const token = result.data.login.value
      setToken(token)
      localStorage.setItem('library-user-token', token)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={submit}>
        <div>
          username
          <input
            value={username}
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default Login 