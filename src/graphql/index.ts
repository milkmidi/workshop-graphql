import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import * as typeDefs from './typeDefs';
import resolvers from './resolvers';

export const schema = makeExecutableSchema({
  typeDefs: Object.values(typeDefs),
  resolvers,
});

const findMockUser = async () => {
  return {
    id: '3Q9527Id',
    name: 'milkmidi',
    email: 'milkmidi@gmail.com',
    permission: 9999999,
  };
};

// https://graphql.org/graphql-js/graphql/#graphql
export default graphqlHTTP(async (req: Express.Request) => {
  // console.log(req);
  // 這裡可以加 middleware, 拿到任何的資料，到 context 裡
  const user = await findMockUser();
  return {
    schema,
    graphiql: true,
    context: {
      user,
    },
  };
});
