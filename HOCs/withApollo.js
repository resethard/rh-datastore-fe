import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'isomorphic-fetch';

const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjajtbhy21ici01610h7cbuel' });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default Component => class extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Component {...this.props}/>
      </ApolloProvider>
    );
  }
};