const { gql } = require('apollo-server');

const typeDefs = gql`
  type Article {
    identifier: String!
    date: String!
    title: String!
    teaser: String!
    url: String!
    imageUrl: String!
    authorName: String!
  }

  type Query {
    greet: String!
    news: [Article]
  }

  type Mutation {
    setUser(name: String!): Boolean!
  }
`;

export type Article = {
  identifier: string;
  date: string;
  title: string;
  teaser: string;
  url: string;
  imageUrl: string;
  authorName: string;
};

export default typeDefs;
