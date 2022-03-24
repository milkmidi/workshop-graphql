/* eslint-disable @typescript-eslint/ban-ts-comment */
import _ from 'lodash';
import axios from 'axios';
import GraphQLJSON from 'graphql-type-json';
import { MOCK_USERS, MOCK_MESSAGES } from './mockData';
import type { Country, Inventory } from './types';

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
    return MOCK_MESSAGES;
  },
  // TODO 2
  async country(root, args): Promise<Country[]> {
    console.log('Query country, args:', args);
    const { data } = await axios('https://logistic-api-staging.positivegrid.com/countryList');

    /*
    if (args.filter === 'SHIPPING_AVAILABLE') {
      const { data: shippingAvailableData } = await axios(
        'https://logistic-api-staging.positivegrid.com/api/static/shippingAvailable',
      );
      return shippingAvailableData.map((c) => {
        return {
          ...c,
          states: c.subdivisions,
        };
      });
    }
    // */

    return data.data.map((c) => {
      return {
        name: c.Country,
        code: c['Alpha-2 code'],
        states: c.states.map((s) => {
          return {
            code: s['Postal Code'],
            name: s['State/District'],
          };
        }),
      };
    });
  },
  /* // TODO3
  async inventory(root, args): Promise<Inventory[]> {
    const { pid, country } = args;

    const { data } = await axios(
      `https://pg-api-staging.positivegrid.com/v2/inventories?pid=${pid.toString()}&country=${country}`,
    );
    console.log(data);
    return data;
  },
  // */

  // TODO Yourself
  // async products() {},
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
  // TODO3
  JSON: GraphQLJSON,
  //
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
