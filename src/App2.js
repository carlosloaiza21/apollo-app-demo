import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache, ApolloProvider, gql } from 'apollo-boost'; 
import { useQuery, useMutation } from '@apollo/react-hooks';
import logo from './logo.svg';
import './App.css';

const App2 = () => {
  
  const QUERY = gql`
    mutation nuevo($id: ID!,$n: String, $e: Int, $t: String){
      addUser(id: $id, nombre: $n, edad:$e, telefono:$t){
      nombre
  }
}
  `
  const id=3030
  const nombre="AZ"
  const edad=30
  const telefono="1919191"
  const [test, {data}] = useMutation(QUERY, {variables:{
    id,
    nombre,
    edad,
    telefono
  }}); 
  
  
    
    //const { loading, error, data } = useMutation(QUERY,{variables: {id,name,products}});
    console.log(data);
  
  
  
  
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
        <button onClick={test}>test</button>
      </header>
    </div>
  );
}

export default App2;
