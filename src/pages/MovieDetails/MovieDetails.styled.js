import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const MovieBlockContainer = styled.div`
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 10px 40px 40px 40px;
`;

export const MovieInfoButton = styled(NavLink)`
  font-size: 16px;
  padding: 10px;
  background-color: #0074d9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: fit-content;
  text-decoration: none;

  &:hover {
    background-color: #0d8bf2;
  }
`;

export const MovieButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin: 40px;
`;
