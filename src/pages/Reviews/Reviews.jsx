import { getMovieReviews } from 'Services/axios-API-service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviesList from 'components/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(response => {
      setReviewsList(response);
    });
  }, [movieId]);

  useEffect(() => {
    console.log(reviewsList);
  }, [reviewsList]);

  return reviewsList && <ReviesList reviewsListArr={reviewsList} />;
};

export default Reviews;
