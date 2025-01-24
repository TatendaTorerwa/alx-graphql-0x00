import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.example.com/graphql', // Replace with your GraphQL endpoint
    fetchOptions: {
      timeout: 10000, // Set timeout to 10 seconds
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
