import React, { useEffect, useState } from "react";
import { getFilmReviewsByID } from "components/ServicesApi/ServicesApi";
import {
  ReviewsContainer,
  ReviewItem,
  ReviewAuthor,
  ReviewContent,
} from "./ReviewsStyle";
import Loader from "components/Loader/loader";
import PropTypes from "prop-types";


const Reviews = ({ filmId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = await getFilmReviewsByID(filmId);
        if (reviewsData && reviewsData.results) {
          setReviews(reviewsData.results);
        }
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
      setLoading(false);
    };

    fetchReviews();
  }, [filmId]);

  if (loading) {
    return <Loader />;
  }

  if (reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <ReviewsContainer>
      <h2>Reviews</h2>
      <div>
        {reviews.map((review) => (
          <ReviewItem key={review.id}>
            <ReviewAuthor>{review.author}</ReviewAuthor>
            <ReviewContent>{review.content}</ReviewContent>
          </ReviewItem>
        ))}
      </div>
    </ReviewsContainer>
  );
};
Reviews.propTypes = {
  filmId: PropTypes.string.isRequired,
};
export default Reviews;