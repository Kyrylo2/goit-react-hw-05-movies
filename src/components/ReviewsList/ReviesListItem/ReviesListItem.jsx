import React from 'react';
import {
  ReviewItem,
  ReviewHeader,
  ReviewAvatar,
  ReviewInfo,
  ReviewUsername,
  ReviewDate,
  ReviewRating,
  ReviewContent,
} from './ReviesListItem.styled';
import defaultImage from 'images/no-poster1.webp';
import PropTypes from 'prop-types';

function ReviewsListItem({ reviewsListItem }) {
  const {
    author_details: { avatar_path, rating, username },
    content,
    created_at,
  } = reviewsListItem;

  const date = new Date(created_at);

  return (
    <ReviewItem>
      <ReviewHeader>
        <ReviewAvatar
          src={
            avatar_path
              ? `https://image.tmdb.org/t/p/w500${avatar_path}`
              : defaultImage
          }
          alt="User avatar"
        />
        <ReviewInfo>
          <ReviewUsername>{username}</ReviewUsername>
          <ReviewDate>{date.toLocaleDateString()}</ReviewDate>{' '}
        </ReviewInfo>
        <ReviewRating>{rating}</ReviewRating>
      </ReviewHeader>
      <ReviewContent>{content}</ReviewContent>
    </ReviewItem>
  );
}

ReviewsListItem.propTypes = {
  reviewsListItem: PropTypes.shape({
    author_details: PropTypes.shape({
      avatar_path: PropTypes.string,
      rating: PropTypes.number,
      username: PropTypes.string.isRequired,
    }).isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default ReviewsListItem;
