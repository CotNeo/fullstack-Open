const Author = require('../models/author')

const authorResolvers = {
  Query: {
    authorCount: () => Author.collection.countDocuments(),
    allAuthors: () => Author.find({})
  },
  Mutation: {
    editAuthor: async (root, args, context) => {
      if (!context.currentUser) {
        throw new Error('not authenticated')
      }

      const author = await Author.findOne({ name: args.name })
      if (!author) {
        return null
      }

      author.born = args.setBornTo
      try {
        await author.save()
      } catch (error) {
        throw new Error(error.message)
      }

      return author
    }
  }
}

module.exports = authorResolvers 