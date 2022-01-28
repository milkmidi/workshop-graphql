/* eslint-disable @typescript-eslint/ban-ts-comment */
import _ from 'lodash';
import { MOCK_USERS, MOCK_MESSAGES } from './mockData';

const Query = {
  async hello(root, args, context) {
    /* console.log(root);
    console.log(args);
    console.log(context); */
    return 'Hello world!';
  },
  async me(root, args, context) {
    return context.user;
  },
  async user(root, args, context) {
    const { id } = args;
    console.log('user args.id', id);
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
    return MOCK_MESSAGES;
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
    messages(root) {
      console.log('User messages root.id', root.id);
      return _.filter(MOCK_MESSAGES, { owner: root.id });
    },
  },
};
export default resolvers;
