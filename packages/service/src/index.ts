import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

import resolvers from './resolvers';
import typeDefs from './typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = async () => {
  const { url } = await server.listen();

  console.log(`🚀  Server ready at ${url}`);
};

startServer();
