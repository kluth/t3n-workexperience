const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    greet: String!
  }

  type Mutation {
    setUser(name: String!): Boolean!
  }
`;

export default typeDefs;
