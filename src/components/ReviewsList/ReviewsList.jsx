import React from 'react';
import ReviewsListItem from './ReviesListItem/ReviesListItem';

function ReviewsList({ reviewsListArr }) {
  console.log(reviewsListArr);
  console.log(reviewsListArr.length);
  return (
    <div>
      {reviewsListArr.map(review => (
        <ReviewsListItem reviewsListItem={review} key={review.id} />
      ))}
    </div>
  );
}

export default ReviewsList;
