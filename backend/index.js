require('dotenv').config();
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const cors = require('cors');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const http = require('http');
const connectDB = require('./utils/db');
const context = require('./utils/auth');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./resolvers');

const app = express();
const httpServer = http.createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });

// ✅ WebSocket Server Setup
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});

// ✅ Bind WebSocket Server to GraphQL Schema
const serverCleanup = useServer({ schema, context }, wsServer);

// ✅ Apollo Server Initialization
const server = new ApolloServer({
  schema,
  context,
  plugins: [
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
});

// ✅ Middleware and Express Setup
app.use(cors());
app.use(express.json());

// ✅ WebSocket Connection Handling
wsServer.on('connection', (ws) => {
  console.log('🔗 New WebSocket connection established');

  ws.on('close', () => {
    console.log('❌ WebSocket connection closed');
  });
});

// ✅ Start Server Function
const startServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 4000;

  httpServer.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
    console.log(`🚀 Subscriptions ready at ws://localhost:${PORT}/graphql`);
  });
};

// ✅ Connect to Database and Start Server
connectDB();
startServer();
