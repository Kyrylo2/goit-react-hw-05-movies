import React from 'react';

import defaultImage from '../../images/no-poster1.webp';

import {
  MovieContainer,
  MovieImage,
  MovieDetailsContainer,
  MovieTitle,
  MovieYear,
  MovieGenre,
  MovieDescription,
  MovieRating,
} from './MovieInfo.styled';

const MovieInfo = ({
  movieInfo: { poster_path, overview, release_date, title, vote_average },
  genres,
}) => {
  const year = release_date && release_date.substring(0, 4);
  console.log(poster_path);
  const posterImage = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : defaultImage;

  return (
    <MovieContainer>
      <MovieImage src={posterImage} alt={title} />
      <MovieDetailsContainer>
        <MovieTitle>{title}</MovieTitle>
        <MovieYear>{year}</MovieYear>
        <MovieGenre>{genres}</MovieGenre>
        <MovieRating>{vote_average}</MovieRating>
        <MovieDescription>{overview}</MovieDescription>
      </MovieDetailsContainer>
    </MovieContainer>
  );
};

export default MovieInfo;
