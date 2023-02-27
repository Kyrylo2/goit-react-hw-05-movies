import React from 'react';
import ReviewsListItem from './ReviesListItem/ReviesListItem';

function ReviewsList({ reviewsListArr }) {
  console.log(reviewsListArr);
  return (
    <div>
      {reviewsListArr.map(review => (
        <ReviewsListItem reviewsListItem={review} />
      ))}
    </div>
  );
}

export default ReviewsList;
