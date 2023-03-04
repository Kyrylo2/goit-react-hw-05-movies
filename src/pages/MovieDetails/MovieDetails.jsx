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

  const location = useLocation();
  const [backLinkHref, setBackLinkHref] = useState(null);

  useEffect(() => {
    if (backLinkHref) {
      return;
    }
    const state = location.state?.from ?? '/goit-react-hw-05-movies';
    setBackLinkHref(state);
  }, [backLinkHref, location.state]);

  // useEffect(() => {
  //   console.log(backLinkHref);
  // }, [backLinkHref]);

  // console.log(location.state.from);
  // console.log(location?.state?.from?.pathname.includes('movies'));

  // const currentPath3 = useRef(
  //   location?.state?.from?.pathname?.includes('movies')
  //     ? `/movies/${location?.state.from.search}`
  //     : '/'
  // );

  // console.log(currentPath3);

  useEffect(() => {
    getMovieDetails(movieId).then(response => {
      console.log(response);
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
          {/* <BackLink to={currentPath3.current}>go back</BackLink> */}
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
