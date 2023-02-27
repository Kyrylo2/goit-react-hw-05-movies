import Searchbar from 'components/Searchbar';
import { getFilmsByQuery } from 'Services/axios-API-service';

import { useEffect, useState } from 'react';
import MovieGrid from 'components/MoviesGrid/MoviesGrid';

const Movies = () => {
  const [query, setQuery] = useState(null);
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);

  const onSubmit = query => {
    // console.log(query);
    setQuery(query);
    setPage(1);
  };

  useEffect(() => {
    console.log('useEffect called on movies component');
    const fetchData = async (data, page) => {
      try {
        const response = await getFilmsByQuery(data, page);

        setMovies(prevState => [...prevState, ...response]);
      } catch (err) {
        console.log(err);
      }
    };

    if (!query) return;

    fetchData(query, page);
  }, [query, page]);

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies]);

  return (
    <>
      <Searchbar onSubmitProp={onSubmit} />

      {movies.length > 0 && (
        <>
          <h1>Here's what I found for the query "{query}"</h1>
          <MovieGrid moviesArr={movies} />
        </>
      )}
    </>
  );
};

export default Movies;
