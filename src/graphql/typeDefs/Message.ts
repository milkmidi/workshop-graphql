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
