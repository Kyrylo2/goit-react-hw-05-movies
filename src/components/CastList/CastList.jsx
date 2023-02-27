import React from 'react';
import styled from 'styled-components';
import defaultImage from '../../images/no-poster1.webp';

const ActorsGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 20px;
  justify-items: center;
  margin: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const ActorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  max-width: 300px;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
    background-color: #f2f2f2;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;

const ActorImage = styled.img`
  max-width: 100%;
  min-width: 100%;
  height: auto;
  object-fit: cover;
`;

const ActorInfo = styled.div`
  text-align: center;
  padding: 10px;
`;

const ActorName = styled.h3`
  margin: 0;
  font-size: 1.2em;
`;

const ActorCharacter = styled.p`
  margin: 0;
  font-size: 1em;
`;

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
