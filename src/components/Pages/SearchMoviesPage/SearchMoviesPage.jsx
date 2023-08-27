import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SearchContainer, SearchForm, MovieList, MovieItem } from "./SearchMoviesPageStyle";
import { searchMovies } from "components/ServicesApi/ServicesApi";

const SearchMoviesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
const PlaceholderImage = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930" 
    alt="No Poster Available"
  />
);
  const handleSearch = async (e) => {
    e.preventDefault();

    if (searchTerm.trim() === "") {
      setSearchResults([]);
      return;
    }

    const results = await searchMovies(searchTerm);
    setSearchResults(results);
  };

  return (
    <SearchContainer>
      <h1>Search Movies</h1>
      <SearchForm onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter movie title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </SearchForm>
      {searchResults.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <MovieList>
          {searchResults.map(movie => (
<Link key={movie.id} to={`/movies/${movie.id}`}>
  <MovieItem>
    {movie.poster_path ? (
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    ) : (
      <PlaceholderImage />
    )}
    <h2>{movie.title}</h2>
  </MovieItem>
</Link>
          ))}
        </MovieList>
      )}
    </SearchContainer>
  );
};

export default SearchMoviesPage;