import { useState, useEffect } from 'react';
import { getTrandingMovies } from 'Services/axios-API-service';

import MovieGrid from '../../components/MoviesGrid/MoviesGrid';

const Home = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getTrandingMovies();
        setResults(result);
      } catch (e) {}
    }
    fetchData();
  }, []);

  return (
    <>
      <h1>Tranding movies</h1>
      {results && <MovieGrid moviesArr={results} />}
    </>
  );
};

export default Home;
