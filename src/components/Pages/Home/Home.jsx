import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HomeContainer, MovieList, MovieItem } from "./HomeStyle";
import { fetchPopularMovies } from "components/ServicesApi/ServicesApi";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const popularMovies = await fetchPopularMovies();
      setMovies(popularMovies);
    };

    getMovies();
  }, []);

  return (
    <HomeContainer>
      <h1>Popular Movies</h1>
      <MovieList>
        {movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            <MovieItem>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title || movie.name}
              />
              <h2>{movie.title || movie.name}</h2>
            </MovieItem>
          </Link>
        ))}
      </MovieList>
    </HomeContainer>
  );
};

export default Home;