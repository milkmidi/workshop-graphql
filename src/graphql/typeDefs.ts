const typeDefs = `#graphql
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

    createAt: Int
  }
  type Product {
    id: ID!
    sku: String!
    price: Int!
  }

  """
  這裡用來 query
  """
  type Query {
    """
    # 就只會回傳 helloworld
    """
    hello: String
    
    " find user with id"
    user(id: ID!): User
    "find all users"
    users(departmentId: String): [User]
    " 回傳目前所有的 message "
    messages: [Message]
    products: [Product]
  }

  """
  這裡用來寫 DB
  """
  type Mutation {
    createMessage(input: String): Message
  }
`;

export default typeDefs;
