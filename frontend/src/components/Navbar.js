import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const padding = {
    paddingRight: 5
  }

  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '1rem' }}>
      <Link style={padding} to="/">books</Link>
      <Link style={padding} to="/authors">authors</Link>
      <Link style={padding} to="/add">add book</Link>
      <Link style={padding} to="/login">login</Link>
    </div>
  )
}

export default Navbar 