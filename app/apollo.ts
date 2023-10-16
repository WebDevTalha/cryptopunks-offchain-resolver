// apollo.js

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://gateway.thegraph.com/api/5e72663097a0e3d59ee23d6c3f0eb884/subgraphs/id/6LQQFdRiDHZTnVGJcjMXdUmcWgc3J3J44QMPd5uuQwKB",
  }),
  cache: new InMemoryCache(),
});

export default client;
