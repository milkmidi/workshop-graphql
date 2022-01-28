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
