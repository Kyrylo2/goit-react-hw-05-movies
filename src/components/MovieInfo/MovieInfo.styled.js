import styled from 'styled-components';

const MovieContainer = styled.div`
  display: flex;
`;

const MovieImage = styled.img`
  width: 300px;
  border-radius: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const MovieTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const MovieYear = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const MovieGenre = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const MovieRating = styled.p`
  font-size: 18px;
  margin: 10px 0;
`;

const MovieDescription = styled.p`
  font-size: 16px;
  margin: 10px 0;
`;

const MovieButton = styled.button`
  font-size: 16px;
  padding: 10px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: fit-content;

  &:hover {
    background-color: #0d8bf2;
  }
`;

export {
  MovieContainer,
  MovieImage,
  MovieDetailsContainer,
  MovieTitle,
  MovieYear,
  MovieGenre,
  MovieDescription,
  MovieButton,
  MovieRating,
};
