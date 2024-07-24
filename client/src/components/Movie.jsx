function Movie({ movie }) {
  return (
    <div key={movie.movieId}>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.rating}</p>
    </div>
  );
}

export default Movie;
