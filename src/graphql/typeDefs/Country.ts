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
