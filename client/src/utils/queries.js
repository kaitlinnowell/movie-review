import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      password
      savedMovieCount
      savedMovies {
        movieId
        title
        image
        directors
        review
        rating
        favorite
      }
    }
  }
`;
