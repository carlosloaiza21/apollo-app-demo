const express = require('express');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');
const { graphql, buildSchema } = require('graphql');



let data = [
  {
    id: 01,
    nombre: 'Carlos',
    edad: 33,
    telefono: "123456"
  }
]

const schema = buildSchema(`
  type User{
    id: ID!
    nombre: String
    edad: Int
    telefono: String
  }
  
  type Query{
    getAllUsers: [User]
    
  }
  
  type Mutation{
    addUser(id:ID!, nombre: String, edad: Int, telefono: String): User
  } 
`)

const root = {
  getAllUsers: () => {
    return data
  },
  addUser: (user) => {
    data.push(user)
    return {
      success:true
    }
  }
}

const app = express();
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema:schema,
  rootValue:root,
  graphiql:'true'
}))

app.listen(4000);

console.log('Running a GraphQL API server at http://localhost:4000/graphql');

