import type { User, Message, Product } from './types';

export const MOCK_USERS: User[] = [
  {
    id: '0',
    name: 'milkmidi',
    departmentId: '01',
  },
  {
    id: '1',
    name: '奶綠茶',
    departmentId: '01',
  },
  {
    id: '2',
    name: '測試員一號',
    departmentId: '02',
  },
  {
    id: '3',
    name: '測試員二號',
    departmentId: '02',
  },
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'message01',
    name: 'fakeMessage',
    owner: '0',
  },
  {
    id: 'message02',
    name: 'fakeMessage1',
    owner: '0',
  },
  {
    id: 'message03',
    name: 'fakeMessage2',
    owner: '1',
  },
];

// TODO Yourself
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'productId1',
    sku: 'fakeSKU1',
    price: 299,
  },
  {
    id: 'productId2',
    sku: 'fakeSKU2',
    price: 399,
  },
  {
    id: 'productId3',
    sku: 'fakeSKU3',
    price: 499,
  },
];
