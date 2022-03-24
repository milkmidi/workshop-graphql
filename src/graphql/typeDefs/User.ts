export const User = `#graphql
  type User {
    "就是 id"
    id: ID!
    "使用者姓名"
    name: String!
    "部門Id"
    departmentId: String!
    "發表過的訊息"
    messages: [Message]
  }
`;
