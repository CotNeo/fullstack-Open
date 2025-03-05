const User = require('../models/user')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

const userResolvers = {
  Query: {
    me: (root, args, context) => {
      return context.currentUser
    }
  },
  Mutation: {
    createUser: async (root, args) => {
      const user = new User({
        username: args.username,
        favoriteGenre: args.favoriteGenre
      })

      try {
        await user.save()
      } catch (error) {
        throw new Error(error.message)
      }

      return user
    },
    login: async (root, args) => {
      const user = await User.findOne({ username: args.username })

      if (!user || !(await user.comparePassword(args.password))) {
        throw new Error('wrong credentials')
      }

      const userForToken = {
        username: user.username,
        id: user._id
      }

      return { value: jwt.sign(userForToken, JWT_SECRET) }
    }
  }
}

module.exports = userResolvers 