const Book = require('../models/book')
const Author = require('../models/author')
const { PubSub } = require('graphql-subscriptions')
const pubsub = new PubSub()

const bookResolvers = {
  Query: {
    bookCount: () => Book.collection.countDocuments(),
    allBooks: async (root, args) => {
      const books = await Book.find({}).populate('author')
      
      if (args.author) {
        return books.filter(book => book.author.name === args.author)
      }
      
      if (args.genre) {
        return books.filter(book => book.genres.includes(args.genre))
      }
      
      return books
    }
  },
  Mutation: {
    addBook: async (root, args, context) => {
      if (!context.currentUser) {
        throw new Error('not authenticated')
      }

      let author = await Author.findOne({ name: args.author })
      
      if (!author) {
        author = new Author({ name: args.author })
        await author.save()
      }

      const book = new Book({
        ...args,
        author: author._id
      })

      try {
        await book.save()
        await author.updateOne({ $inc: { bookCount: 1 } })
      } catch (error) {
        throw new Error(error.message)
      }

      pubsub.publish('BOOK_ADDED', { bookAdded: book })
      return book
    }
  },
  Subscription: {
    bookAdded: {
      subscribe: () => pubsub.asyncIterator(['BOOK_ADDED'])
    }
  }
}

module.exports = bookResolvers 