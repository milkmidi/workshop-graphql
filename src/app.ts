import express from 'express';
import path from 'path';
import graphql from './graphql';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Primary app routes.
 */
app.use('/graphql', graphql);
app.get('/', (req, res) => {
  res.send('hi, graphql');
});

export default app;
