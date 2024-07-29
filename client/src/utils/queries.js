import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query QueryMe {
    me {
      _id
      username
      email
      password
      ratedMovieCount
      ratedMovies {
        movieId
        title
        image
        rating
      }
      favoriteMovieCount
      favoriteMovies {
        movieId
        title
        image
        rating
      }
    }
  }
`;
