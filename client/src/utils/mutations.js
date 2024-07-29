import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_MOVIE = gql`
  mutation AddMovie(
    $movieId: String!
    $title: String!
    $image: String!
    $review: String!
    $rating: Float!
    $directors: [String]
    $favorite: Boolean
  ) {
    addMovie(
      movieId: $movieId
      title: $title
      image: $image
      review: $review
      rating: $rating
      directors: $directors
      favorite: $favorite
    ) {
      _id
      email
      password
      savedMovieCount
      savedMovies {
        directors
        favorite
        image
        movieId
        rating
        review
        title
      }
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation RemoveMovie($movieId: String!) {
    removeMovie(movieId: $movieId) {
      _id
      email
      password
      savedMovieCount
      savedMovies {
        directors
        favorite
        image
        movieId
        rating
        review
        title
      }
      username
    }
  }
`;

//Add save/remove movie mutations here
