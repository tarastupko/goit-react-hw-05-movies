import React, { useEffect, useState } from "react";
import { getFilmCastByID } from "components/ServicesApi/ServicesApi";
import { CastContainer, CastItem, CastImage, CastName,CastList } from "./CastStyle";
import Loader from "components/Loader/loader";
import PropTypes from "prop-types";


const Cast = ({ filmId }) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getFilmCastByID(filmId);
        if (castData && castData.cast) {
          setCast(castData.cast);
        }
      } catch (error) {
        console.error("Error fetching cast:", error);
      }
      setLoading(false);
    };

    fetchCast();
  }, [filmId]);

  if (loading) {
    return <Loader />;
  }

  if (cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <CastContainer>
      <h2>Cast</h2>
      <CastList>
        {cast.map((actor) => (
          <CastItem key={actor.id}>
            <CastImage
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
              }
              alt={actor.name}
            />
            <CastName>{actor.name}</CastName>
          </CastItem>
        ))}
      </CastList>
    </CastContainer>
  );
};
Cast.propTypes = {
  filmId: PropTypes.string.isRequired,
};
export default Cast;