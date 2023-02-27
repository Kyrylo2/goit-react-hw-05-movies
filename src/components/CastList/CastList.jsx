import React from 'react';
import {
  ActorsGridContainer,
  ActorCard,
  ActorImage,
  ActorInfo,
  ActorName,
  ActorCharacter,
} from './CastList.styled';
import defaultImage from '../../images/no-poster1.webp';

function CastList({ castListArr }) {
  return (
    <ActorsGridContainer>
      {castListArr.map(actor => {
        const posterImage = actor.profile_path
          ? `https://image.tmdb.org/t/p/original${actor.profile_path}`
          : defaultImage;

        return (
          <ActorCard key={actor.name}>
            <ActorImage src={posterImage} alt={actor.name} />
            <ActorInfo>
              <ActorName>{actor.name}</ActorName>
              <ActorCharacter>{actor.character}</ActorCharacter>
            </ActorInfo>
          </ActorCard>
        );
      })}
    </ActorsGridContainer>
  );
}

export default CastList;
