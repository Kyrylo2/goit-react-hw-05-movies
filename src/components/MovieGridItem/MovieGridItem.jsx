import {
  Title,
  Card,
  Overlay,
  Poster,
  RatingCircle,
  Year,
} from './MovieGridItem.styled';
import { useLocation } from 'react-router-dom';

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
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
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
export default MoviesGridItem;
