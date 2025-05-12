import CardFilm from "./CardFilm";

const Carrossel = ({ genero, movies }) => {
  return (
    <>
      <div className="d-flex flex-column mt-5 ms-5">
        <h2>{genero}</h2>
        <div className="d-flex gap-4 overflow-x-scroll scroller overflow-y-hidden mt-2 align-items-center">
          {movies.map((movie) => (
            <CardFilm
              key={movie.id}
              id={movie.id} // Passa o ID do filme
              title={movie.title}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              overview={movie.overview}
              backgroundImage={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              releaseDate={movie.release_date}
              genres={movie.genre_ids}
              cast={movie.cast}
              voteAverage={movie.vote_average} // Nota do filme
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carrossel;
