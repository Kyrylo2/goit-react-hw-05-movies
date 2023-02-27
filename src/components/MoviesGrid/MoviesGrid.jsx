import { MovieGrid } from './MoviesGrid.styled';
import MoviesGridItem from 'components/MovieGridItem/MovieGridItem';

const MoviesGrid = ({ moviesArr }) => {
  console.log(moviesArr);
  return (
    <MovieGrid>
      {moviesArr.map(movie => (
        <MoviesGridItem movie={movie} key={movie.id} />
      ))}
    </MovieGrid>
  );
};
export default MoviesGrid;
