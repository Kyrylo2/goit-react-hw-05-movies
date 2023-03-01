import { getMovieReviews } from 'Services/axios-API-service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviesList from 'components/ReviewsList';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsList, setReviewsList] = useState(null);

  useEffect(() => {
    getMovieReviews(movieId).then(response => {
      console.log(response);
      setReviewsList(response);
    });
  }, [movieId]);

  return reviewsList && <ReviesList reviewsListArr={reviewsList} />;
};

export default Reviews;
