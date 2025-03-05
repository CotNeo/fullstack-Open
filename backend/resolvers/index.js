const bookResolvers = require('./bookResolvers')
const authorResolvers = require('./authorResolvers')
const userResolvers = require('./userResolvers')

module.exports = {
  Query: {
    ...bookResolvers.Query,
    ...authorResolvers.Query,
    ...userResolvers.Query
  },
  Mutation: {
    ...bookResolvers.Mutation,
    ...authorResolvers.Mutation,
    ...userResolvers.Mutation
  },
  Subscription: {
    ...bookResolvers.Subscription
  }
} 