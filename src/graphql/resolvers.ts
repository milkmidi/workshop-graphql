/* eslint-disable @typescript-eslint/ban-ts-comment */
import _ from 'lodash';
import { MOCK_USERS, MOCK_PRODUCTS, MOCK_MESSAGES } from './mockData';

const Query = {
  async hello(root, args, context) {
    // console.log(root);
    // console.log(args);
    // console.log(context);
    return 'Hello world!';
  },
  async me(root, args, context) {
    return context.user;
  },
  async user(root, args, context) {
    const { id } = args;
    console.log(context);
    return _.find(MOCK_USERS, { id });
  },
  async users(root, args, context) {
    const { departmentId } = args;
    if (departmentId) {
      return _.filter(MOCK_USERS, { departmentId });
    }
    return MOCK_USERS;
  },
  async messages() {
    console.log('messages');
    return MOCK_PRODUCTS;
  },
  async products() {
    return MOCK_PRODUCTS;
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
      // console.log('parent.id', parent.id);
      return _.filter(MOCK_MESSAGES, { owner: parent.id });
    },
  },
};
export default resolvers;
