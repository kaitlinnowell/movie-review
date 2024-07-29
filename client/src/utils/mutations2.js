// import { gql } from "@apollo/client";

// export const LOGIN_USER = gql`
//   mutation Mutation($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;

// export const ADD_USER = gql`
//   mutation AddUser($username: String!, $email: String!, $password: String!) {
//     addUser(username: $username, email: $email, password: $password) {
//       token
//       user {
//         _id
//       }
//     }
//   }
// `;

// export const RATE_MOVIE = gql`
//   mutation RateMovie($movieInput: MovieInput) {
//     rateMovie(movieInput: $movieInput) {
//       _id
//       email
//       password
//       savedMovieCount
//       savedMovies {
//         image
//         movieId
//         rating
//         title
//       }
//     }
//   }
// `;

// export const REMOVE_MOVIE = gql`
//   mutation RemoveMovie($movieId: String!) {
//     removeMovie(movieId: $movieId) {
//       _id
//       email
//       password
//       savedMovieCount
//       savedMovies {
//         image
//         movieId
//         rating
//         title
//       }
//       username
//     }
//   }
// `;

// export const ADD_MOVIE_TO_FAVORITE = gql`
//   mutation addMovieToFavorite($movieInput: MovieInput) {
//     addMovieToFavorite(movieInput: $movieInput) {
//       _id
//       email
//       password
//       savedMovieCount
//       savedMovies {
//         image
//         movieId
//         rating
//         title
//       }
//     }
//   }
// `;
