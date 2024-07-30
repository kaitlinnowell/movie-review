const Movie = ({ src, alt, overlayText }) => {
  return (
    <div className="relative flex flex-col space-y-4 max-w-sm p-2 md:m-2">
      <img
        src={src}
        alt={alt}
        className="movie-img-top rounded-lg w-full h-auto"
      />
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white pb-6 w-full text-center">
        {overlayText}
      </div>
    </div>
  );
};

export default Movie;
