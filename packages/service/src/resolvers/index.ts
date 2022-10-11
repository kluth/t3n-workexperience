import store from '../lib/store';

interface SetUserMutationInputArgs {
  name: string;
}

const resolvers = {
  Query: {
    greet: () => `Hello ${store.user} 👋`,
  },
  Mutation: {
    setUser: (parent: any, args: SetUserMutationInputArgs) => {
      store.user = args.name;

      return true;
    },
  },
};

export default resolvers;
