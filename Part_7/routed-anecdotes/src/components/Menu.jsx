import { Link } from 'react-router-dom'

const Menu = () => (
  <nav>
    <Link to="/">Anecdotes</Link> | 
    <Link to="/create">Create New</Link>
    <Link to="/about">About</Link>
  </nav>
)

export default Menu
