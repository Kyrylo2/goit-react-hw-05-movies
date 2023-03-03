import { useParams, useLocation, Outlet } from 'react-router-dom';

import { useState, useEffect, Suspense, useRef } from 'react';
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

  const location = useLocation();

  const currentPath3 = useRef(
    !location.pathname.includes('cast')
      ? location?.state?.from?.pathname === '/movies'
        ? `/movies/${location?.state.from.search}`
        : '/'
      : ''
  );

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      setMovie(response);
      const genresString =
        response.genres.length > 1
          ? response.genres.map(ganre => ganre.name).join(', ')
          : response.ganres.name;
      setGenres(genresString);
    });
  }, [movieId]);

  // console.log(location);

  // const currentPath = location?.state?.from?.pathname || null;
  // const currentPath1 = location?.state || null;
  // console.log(currentPath);
  // console.log(currentPath1);

  // const currentPath2 =
  //   location?.state?.from?.search !== '' && location?.state?.from?.search;
  // console.log(currentPath2);

  // let backLinkHref =
  //   currentPath === '/' ? '/' : `/movies${location?.state?.from?.search}`;

  return (
    <>
      {movie && (
        <>
          <BackLink to={currentPath3.current}>go back</BackLink>
          {/* <BackLink to={backLinkHref}>go back</BackLink> */}
          <MovieBlockContainer>
            <MovieInfo movieInfo={movie} genres={genres} />
            <MovieButtonContainer>
              <MovieInfoButton
                to={`/movies/${movieId}/cast`}
                state={{ from: currentPath3 }}
              >
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
