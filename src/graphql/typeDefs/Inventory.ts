// TODO 3
// https://pg-api-staging.positivegrid.com/v2/inventories?pid=324,367&country=US
export const Inventory = `#graphql
  """
  就是 Inventory
  """
  type Inventory {
    day_range: String!
    shipping_prefix: String!
    pid: String!
    # 開大絕，直接用 JSON type
    sku: JSON!
  }
`;
