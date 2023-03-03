import Searchbar from 'components/Searchbar';
import { getFilmsByQuery } from 'Services/axios-API-service';

import { useEffect, useState } from 'react';
// import useQuery from 'hooks/useQuery';

import MovieGrid from 'components/MoviesGrid/MoviesGrid';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  // const [query, setQuery] = useQuery();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useSearchParams();
  const currentQuery = query.get('query') ?? '';

  const onSubmit = query => {
    setQuery(query ? { query: query } : {});
    setPage(1);
    setMovies([]);
  };

  useEffect(() => {
    const fetchData = async (data, page) => {
      try {
        const response = await getFilmsByQuery(data, page);

        setMovies(response);
      } catch (err) {}
    };

    if (!query.get('query')) return;

    fetchData(currentQuery, page);
  }, [currentQuery, page, query]);

  return (
    <>
      <Searchbar value={currentQuery} onSubmitProp={onSubmit} />
      {movies?.length > 0 && (
        <>
          <h1>Here's what I found for the query "{query.get('query')}"</h1>
          <MovieGrid moviesArr={movies} />
        </>
      )}
    </>
  );
};

export default Movies;
