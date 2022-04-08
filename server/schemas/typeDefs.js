const { gql } = require('apollo-server-express')

const typeDefs = gql`
type User {
    _id: ID!
    username: String
    password: String
    email: String
    reviews: Review
}

type Query {
    me: User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}

type Auth {
    token: ID!
    user: User
 }

type Review {
    reviewText: String
    createdAt: Date
    username: String!
}

`;

module.exports = typeDefs