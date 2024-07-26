import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { REMOVE_MOVIE } from "../utils/mutations";
import Auth from "../utils/auth";

const Lists = () => {
  const [removeMovie] = useMutation(REMOVE_MOVIE);
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  const handleDeleteMovie = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeMovie({
        variables: { movieId },
      });

      const updatedUser = data?.removeMovie || {};
      console.log(updatedUser);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div>
        <div>
          <h1>Viewing saved movies!</h1>
        </div>
      </div>
      <div>
        <h2>
          {userData.savedMovies.length
            ? `Viewing ${userData.savedMovies.length} saved ${
                userData.savedMovies.length === 1 ? "movie" : "movies"
              }:`
            : "You have no saved movies!"}
        </h2>
        <div>
          {userData.savedMovies.map((movie) => (
            <div key={movie.movieId}>
              {movie.image && (
                <img src={movie.image} alt={`The cover for ${movie.title}`} />
              )}
              <div>
                <h3>{movie.title}</h3>
                <p>Directed by: {movie.directors}</p>
                <p>{movie.review}</p>
                <button onClick={() => handleDeleteMovie(movie.movieId)}>
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Lists;
