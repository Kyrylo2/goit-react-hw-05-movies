import PropTypes from 'prop-types';
import { MovieGrid } from './MoviesGrid.styled';
import MoviesGridItem from 'components/MovieGridItem/MovieGridItem';

const MoviesGrid = ({ moviesArr }) => {
  return (
    <MovieGrid>
      {moviesArr.map(movie => (
        <MoviesGridItem movie={movie} key={movie.id} />
      ))}
    </MovieGrid>
  );
};

MoviesGrid.propTypes = {
  moviesArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      vote_average: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default MoviesGrid;
