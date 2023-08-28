import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFilmByID } from "components/ServicesApi/ServicesApi";
import Cast from "components/Cast/Cast";
import Reviews from "components/Reviews/Reviews";
import {
  FilmContainer,
  FilmTitle,
  ButtonLink,
  FilmInfo,
  FilmImage,
  FilmDetails,
  ButtonRow,
  BackButton,
} from "./MoviesPageStyle";
import Loader from "components/Loader/loader";

const MoviesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  useEffect(() => {
    const getFilm = async () => {
      try {
        const filmData = await getFilmByID(id);
        if (filmData) {
          setFilm(filmData);
        } else {
          setError("Error");
        }
      } catch (error) {
        setError(error);
      }
    };

    getFilm();
  }, [id]);

  if (error) {
    return <p>Oops, something went wrong...</p>;
  }

  if (!film) {
    return <Loader />;
  }

  return (
    
    <FilmContainer>
<BackButton onClick={() => navigate(-1)}>Back</BackButton>
      <FilmTitle>{film.title}</FilmTitle>
      <FilmInfo>
        <FilmImage
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title}
        />
        <FilmDetails>
          <p>
            <strong>Release Date:</strong> {film.release_date}
          </p>
          <p>
            <strong>Vote Average:</strong> {film.vote_average}
          </p>
          <p>
            <strong>Genres:</strong>{" "}
            {film.genres.map((genre) => genre.name).join(", ")}
          </p>
          <p>
            <strong>Overview:</strong> {film.overview}
          </p>
        </FilmDetails>
      </FilmInfo>
      <ButtonRow>
        <ButtonLink
          onClick={() => {
            setShowCast(true);
            setShowReviews(false);
            navigate(`/movies/${id}/cast`);
          }}
        >
          Cast
        </ButtonLink>
        <ButtonLink
          onClick={() => {
            setShowReviews(true);
            setShowCast(false); 
            navigate(`/movies/${id}/reviews`);
          }}
        >
          Reviews
        </ButtonLink>
      </ButtonRow>
      
      {showCast && <Cast filmId={id} />}
      {showReviews && <Reviews filmId={id} />}
    </FilmContainer>
  );
};

export default MoviesPage;