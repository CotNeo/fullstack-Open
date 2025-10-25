/**
 * Express Server
 * Exercise 9.4: Basic Express server with TypeScript
 */

import express from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
