const { gql } = require('apollo-server-express')

const typeDefs = gql`
scalar Date

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
    Login(email: String!, password: String!): Auth
    Register(UserName: String!, UserEmail: String!, UserPassword: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(ReviewText: String!): Review
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