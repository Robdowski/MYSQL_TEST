import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import GetData from "./components/GetData";
import './App.css';

const client = new ApolloClient({ 
  uri: "http://localhost:4000/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1> Testing GraphQL </h1>
        <GetData />
       
      </div>
    </ApolloProvider>
  );
}

export default App;
