export { Customer } from './Customer';
export { Country } from './Country';
export { Inventory } from './Inventory';
export { Message } from './Message';
export { Product } from './Product';
export { User } from './User';

export const Query = `#graphql
  # TODO3
  scalar JSON
  """
  這裡用來 query
  """
  type Query {
    """
    # 就只會回傳 helloworld
    """
    hello: String

    " ## 就是得到me "
    me: Customer
    
    " find user with id"
    user(id: ID!): User

    " find all users "
    users(departmentId: String): [User]

    " 回傳目前所有的 message "
    messages: [Message]

    # TODO 2
    "所有國家列表"
    country(filter:CountryFilter): [Country]!

    # TODO3
    # inventory(pid: [Int]!, country: String!): [Inventory]
  }
`;

export const Mutation = `#graphql
  """
  這裡用來寫 DB
  """
  type Mutation {
    " create message "
    createMessage(input: String): Message
  }
`;
