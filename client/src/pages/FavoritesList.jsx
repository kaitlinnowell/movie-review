import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { UN_RATE_MOVIE } from "../utils/mutations";
import { UN_FAVORITE_MOVIE } from "../utils/mutations";
import Auth from "../utils/auth";
import Movie from '../components/Movie.jsx';

const FavoritesList = () => {
  const [unrateMovie] = useMutation(UN_RATE_MOVIE);
  const [unfavoriteMovie] = useMutation(UN_FAVORITE_MOVIE);
  const { loading, data } = useQuery(QUERY_ME);
  const userData = data?.me || {};

  const handleUnrateMovie = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      console.error("No token found");
      return false;
    }

    try {
      const { data } = await unrateMovie({
        variables: { movieId },
      });

      const updatedUser = data?.removeMovie || {};
      console.log(updatedUser);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnfavoriteMovie = async (movieId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      console.error("No token found");
      return false;
    }

    try {
      const { data } = await unfavoriteMovie({
        variables: { movieId },
      });

      const updatedUser = data?.unfavoriteMovie || {};
      console.log(updatedUser);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <h1 className="flex justify-center text-4xl">FAVORITES</h1>
      <div className="flex justify-center min-h-screen p-4">
        {userData.movies?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
            {userData.favoriteMovies.map((movie) => (
              <div key={movie.movieId}>
                <Movie
                  src={movie.image}
                  alt={movie.title}
                  overlayText={movie.rating}
                />
                <div className="mt-1 mb-1 flex space-x-2">
                  <button
                    onClick={() => handleUnfavoriteMovie(movie.movieId)}
                    type="button"
                    className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900"
                  >
                    Favorite
                  </button>
                  <button
                    onClick={() => handleUnrateMovie(movie.movieId)}
                    type="button"
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    Unrate
                  </button>
                </div>
              </div>
            ))}
            <div className="w-full h-120 flex items-center justify-center">
            <a
              href="/"
              className="pb-6"
            >
              <img
                src="../src/assets/plus.png"
                alt="Plus"
                className="w-12 h-12"
              />
            </a>
          </div>
          </div>
        ) : (
          <div className="flex justify-center min-h-screen p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl">
        <div className="flex flex-col items-center">
          <Movie
            src="../src/assets/poster.jpg"
            alt="The cover for movie"
            overlayText="No Saved Movies"
          />
          <div className="mt-1 mb-1 flex space-x-2">
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900"
            >
              Unfavorite
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Unrate
            </button>
          </div>
        </div>
        <div className="w-full h-120 flex items-center justify-center">
        <a
              href="/"
              className="pb-6"
            >
              <img
                src="../src/assets/plus.png"
                alt="Plus"
                className="w-12 h-12"
              />
            </a>
          </div>
      </div>
    </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesList;
