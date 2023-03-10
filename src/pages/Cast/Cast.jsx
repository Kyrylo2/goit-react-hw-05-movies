import { getMovieCredits } from 'Services/axios-API-service';
import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    getMovieCredits(movieId).then(response => {
      const { cast } = response;
      setCastList(cast);
    });
  }, [movieId]);

  return castList && <CastList castListArr={castList} />;
};

export default Cast;
