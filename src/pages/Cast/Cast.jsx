import { getMovieCredits } from 'Services/axios-API-service';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CastList from 'components/CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [castList, setCastList] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(response => {
      const { cast } = response;
      console.log(cast);
      setCastList(cast);
    });
  }, [movieId]);

  return castList && <CastList castListArr={castList} />;
};

export default Cast;
