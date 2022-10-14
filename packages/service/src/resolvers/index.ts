import store from '../lib/store';

interface SetUserMutationInputArgs {
  name: string;
}

const resolvers = {
  Query: {
    greet: () => `Hey ${store.user} 👋`,
    news: () => store.news,
  },
  Mutation: {
    setUser: (parent: any, args: SetUserMutationInputArgs) => {
      store.user = args.name;

      return true;
    },
  },
};

export default resolvers;
