import { useEffect, useState } from 'react';

const useQuery = () => {
  const [query, setQuery] = useState(localStorage.getItem('query') || null);

  useEffect(() => {
    if (query) {
      localStorage.setItem('query', query);
    } else {
      localStorage.removeItem('query');
    }
  }, [query]);

  return [query, setQuery];
};

export default useQuery;
