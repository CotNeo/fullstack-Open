const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')

let books = [
  {
    title: "Clean Code",
    author: "Robert Martin",
    published: 2008,
    genres: ["refactoring"]
  },
  {
    title: "Agile software development",
    author: "Robert Martin",
    published: 2002,
    genres: ["agile", "software"]
  },
  {
    title: "Refactoring, edition 2",
    author: "Martin Fowler",
    published: 2018,
    genres: ["refactoring"]
  }
]

let authors = [
  {
    name: "Robert Martin",
    born: 1952
  },
  {
    name: "Martin Fowler",
    born: 1963
  }
]

const typeDefs = `
  type Book {
    title: String!
    author: String!
    published: Int!
    genres: [String!]!
  }

  type Author {
    name: String!
    born: Int
    bookCount: Int!
  }

  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]!
    allAuthors: [Author!]!
  }

  type Mutation {
    addBook(title: String!, author: String!, published: Int!, genres: [String!]!): Book
  }
`;

const resolvers = {
    Query: {
      bookCount: () => books.length,
      authorCount: () => authors.length,
      allBooks: (root, args) => {
        if (!args.author && !args.genre) return books;
        let filteredBooks = books;
        if (args.author) {
          filteredBooks = filteredBooks.filter(book => book.author === args.author);
        }
        if (args.genre) {
          filteredBooks = filteredBooks.filter(book => book.genres.includes(args.genre));
        }
        return filteredBooks;
      },
      allAuthors: () => {
        return authors.map(author => ({
          name: author.name,
          born: author.born || null,
          bookCount: books.filter(book => book.author === author.name).length
        }));
      }
    },
    Mutation: {  
      addBook: (root, args) => {
        const newBook = { ...args };
        books.push(newBook);
  
        if (!authors.find(a => a.name === args.author)) {
          authors.push({ name: args.author, born: null });
        }
  
        return newBook;
      }
    }
  };
const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})


  