/* eslint-disable @typescript-eslint/ban-ts-comment */
import _ from 'lodash';
import { users, products } from './mockData';

const Query = {
  hello: (root, args, context) => {
    // console.log(root);
    // console.log(args);
    // console.log(context);
    return 'Hello world!';
  },
  user(root, args, context) {
    const { id } = args;
    console.log(context);
    return _.find(users, { id });
  },
  users(root, args, context) {
    const { departmentId } = args;
    if (departmentId) {
      return _.filter(users, { departmentId });
    }
    return users;
  },
  messages() {
    console.log('messages');
    return products;
  },
  products() {
    return products;
  },
};

const Mutation = {
  createMessage(root, args, context) {
    console.log(args.input);
    const message = {
      id: `${+new Date()}`,
      name: args.input,
      owner: context.user.Id,
    };
    return message;
  },
};

const resolvers = {
  Query,
  Mutation,
  // root
  User: {
    messages(parent) {
      return _.filter(products, { owner: parent.id });
    },
  },
};
export default resolvers;
