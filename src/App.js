import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, gql } from 'apollo-boost'; 
import logo from './logo.svg';
import './App.css';

const App = () => {
  
  const cache = new InMemoryCache();
  const link = new HttpLink({
    uri: 'http://localhost:4000/graphql',
  });
  
  const client = new ApolloClient({
    link,
    cache
  })
  
  
  client.query({
    query: gql`
    {
  getAllUsers {
    nombre
  }
}
    `
  }).then(result=> console.log(result))
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
