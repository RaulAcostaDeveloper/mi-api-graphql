// 
const persons = [
    {
        id: 123,
        titulo: '0',
    },
    {
        id: 1223,
        titulo: 'vvvv0',
    },
    {
        id: 1253,
        titulo: '230',
    },
];

import { ApolloServer, gql } from 'apollo-server';
const typeDefs = gql`
  type Person {
    id: ID!
    titulo: String!
  }
  type Query { 
    personCount: Int!
    allPersons: [Person]!  
  }
`
const resolvers = {
    Query: {
        personCount: () => persons.length, allPersons: () => persons
    }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(
    ({ url }) => { console.log(`Server ready at ${url}`); }
);
