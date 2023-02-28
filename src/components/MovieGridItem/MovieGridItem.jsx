import {
  Title,
  Card,
  Overlay,
  Poster,
  RatingCircle,
  Year,
} from './MovieGridItem.styled';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultImage from 'images/no-poster1.webp';

const MoviesGridItem = ({ movie }) => {
  const location = useLocation();

  return (
    <>
      <Card
        key={movie.id}
        to={`/movies/${movie.id}`}
        state={{ from: location }}
      >
        <Poster
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
              : defaultImage
          }
          alt={movie.title}
        />
        <RatingCircle rating={movie.vote_average}>
          {movie.vote_average}
        </RatingCircle>
        <Overlay>
          <Title>{movie.title}</Title>
          <Year>{movie.release_date}</Year>
        </Overlay>
      </Card>
    </>
  );
};

MoviesGridItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};

export default MoviesGridItem;
