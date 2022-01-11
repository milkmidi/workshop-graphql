import express from 'express';
import path from 'path';
import graphql from './graphql';
import { routers } from './routers';

const app: express.Application = express();

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Primary app routes.
 */
app.use('/graphql', graphql);

routers.forEach((route) => {
  app.use(route.getRouter());
});

app.get('/', (req, res) => {
  res.send('hi, 9527');
});

export default app;
