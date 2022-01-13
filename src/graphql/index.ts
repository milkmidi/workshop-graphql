import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import * as typeDefs from './typeDefs';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({
  typeDefs: Object.values(typeDefs),
  resolvers,
});

// https://graphql.org/graphql-js/graphql/#graphql
export default graphqlHTTP((req: Express.Request) => {
  // console.log(req);
  // 這裡可以加 middleware, 拿到任何的資料，到 context 裡
  return {
    schema,
    // rootValue: resolvers,
    graphiql: true,
    context: {
      user: {
        id: '0',
        name: '這裡可以傳任何的東西進去',
        permission: 9527,
      },
    },
  };
});
