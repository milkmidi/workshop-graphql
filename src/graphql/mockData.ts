import type { User, Message, Product } from './types';

export const users: User[] = [
  {
    id: 'fakeId0',
    name: 'milkmidi',
    departmentId: '01',
  },
  {
    id: 'fakeId1',
    name: '奶綠茶',
    departmentId: '01',
  },
  {
    id: 'fakeId2',
    name: '測試員一號',
    departmentId: '02',
  },
  {
    id: 'fakeId3',
    name: '測試員二號',
    departmentId: '02',
  },
];

export const messages: Message[] = [
  {
    id: 'message01',
    name: 'fakeMessage',
    owner: 'fakeId0',
  },
  {
    id: 'message02',
    name: 'fakeMessage1',
    owner: 'fakeId0',
  },
  {
    id: 'message03',
    name: 'fakeMessage2',
    owner: 'fakeId1',
  },
];

export const products: Product[] = [
  {
    id: 'id0',
    sku: 'HW0109',
    price: 229,
  },
  {
    id: 'id1',
    sku: 'HW0110',
    price: 300,
  },
  {
    id: 'id2',
    sku: 'L2012',
    price: 400,
  },
];
