export const Customer = `#graphql
  type Customer {
    id: ID!
    name: String!
    email: String!
    permission:Int!
  }
`;

export const User = `#graphql
  type User {
    """
    就是 id
    """
    id: ID!
    """
    使用者姓名
    """
    name: String!
    """
    部門Id
    """
    departmentId: String!
    "發表過的訊息"
    messages: [Message]
  }
`;

export const Message = `#graphql
  type Message {
    """
    就是 id
    """
    id: ID!
    """
    訊息名稱
    """
    name: String!
    """
    發表訊息的使用者 Id
    """
    owner: String!
    "createAt"
    createAt: Int
  }
`;

// https://logistic-api-staging.positivegrid.com/countryList
// TODO 2
export const Country = `#graphql
  enum CountryFilter {
    SHIPPING_AVAILABLE
  }
  type CountryState {
    code: String!
    name: String!
  }
  type Country {
    # 就是 countryCode
    code: String!
    # complete Country name
    name: String!
    # states
    states: [CountryState]!
  }
`;

export const Query = `#graphql
  """
  這裡用來 query
  """
  type Query {
    """
    # 就只會回傳 helloworld
    """
    hello: String

    me: Customer
    
    " find user with id"
    user(id: ID!): User

    " find all users "
    users(departmentId: String): [User]

    " 回傳目前所有的 message "
    messages: [Message]

    # // TODO 2
    "所有國家列表"
    country(filter:CountryFilter): [Country]
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
