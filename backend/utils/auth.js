const jwt = require('jsonwebtoken')
const User = require('../models/user')

const JWT_SECRET = process.env.JWT_SECRET

const context = async ({ req }) => {
  const auth = req ? req.headers.authorization : null
  
  if (auth && auth.startsWith('Bearer ')) {
    const decodedToken = jwt.verify(auth.substring(7), JWT_SECRET)
    const currentUser = await User.findById(decodedToken.id)
    return { currentUser }
  }
}

module.exports = context 