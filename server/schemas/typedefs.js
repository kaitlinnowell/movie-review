const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        savedMovieCount: Int
        savedMovies: [Movie]
    }

    type Movie {
        movieId: String!
        title: String!
        image: String!
        rating: Float!
        favorite: Boolean
    }

    type Auth {
        token: ID!
        user: User
    }
    
    type Query {
        me: User
    }
    
    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        addMovie(movieId: String!, title: String!, image: String!, rating: Float!, favorite: Boolean): User
        removeMovie(movieId: String!): User
    }
`;

module.exports = typeDefs;
