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

export default ReviewsListItem;
