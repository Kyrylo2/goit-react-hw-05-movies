import { useParams, useLocation, Outlet } from 'react-router-dom';

import { useState, useEffect, Suspense } from 'react';
import { getMovieDetails } from 'Services/axios-API-service';
import BackLink from 'components/GoBack';
import MovieInfo from 'components/MovieInfo';
import Spinner from 'Services/Spinner/Spinner';

import {
  MovieInfoButton,
  MovieButtonContainer,
  MovieBlockContainer,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState(null);
  const [genres, setGenres] = useState('');

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      setMovie(response);
      const genresString =
        response.genres.length > 1
          ? response.genres.map(ganre => ganre.name).join(', ')
          : response.ganres.name;
      console.log(genresString);
      setGenres(genresString);
    });
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  return (
    <>
      {movie && (
        <>
          <BackLink to={backLinkHref}>go back</BackLink>
          <MovieBlockContainer>
            <MovieInfo movieInfo={movie} genres={genres} />
            <MovieButtonContainer>
              <MovieInfoButton to={`/movies/${movieId}/cast`}>
                Cast
              </MovieInfoButton>
              <MovieInfoButton to={`/movies/${movieId}/reviews`}>
                Reviews
              </MovieInfoButton>
            </MovieButtonContainer>
            <Suspense fallback={<Spinner />}>
              <Outlet />
            </Suspense>
          </MovieBlockContainer>
        </>
      )}
    </>
  );
};
export default MovieDetails;
