import React from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { split, HttpLink } from '@apollo/client'
import { getMainDefinition } from '@apollo/client/utilities'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'

import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import Login from './components/Login'
import Navbar from './components/Navbar'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('library-user-token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  }
})

const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_URI })
const wsLink = new GraphQLWsLink(createClient({
  url: process.env.REACT_APP_GRAPHQL_URI.replace('http', 'ws'),
}))

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  authLink.concat(httpLink)
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/add" element={<NewBook />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  )
}

export default App 