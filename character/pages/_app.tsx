// pages/_app.tsx
import { AppProps } from 'next/app';  // Import the AppProps type
import { ApolloProvider } from '@apollo/client';
import client from '../src/apolloClient';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
