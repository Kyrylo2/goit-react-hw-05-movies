import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Card = styled(NavLink)`
  position: relative;
  width: 300px;
  height: 450px;
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Poster = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const RatingCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ rating }) => {
    if (rating >= 7) return 'green';
    if (rating >= 4) return 'orange';
    return 'red';
  }};
  color: white;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  /* padding: 1rem; */
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  transform: translateY(100%);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${Card}:hover & {
    transform: translateY(0);
  }
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0;
  text-align: center;
`;

// export const Rating = styled.span`
//   position: absolute;
//   top: -10px;
//   right: -10px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 40px;
//   height: 40px;
//   font-size: 1.2rem;
//   font-weight: bold;
//   border-radius: 50%;
//   background-color: ${({ rating }) => {
//     if (rating >= 7) return '#3f9d2f';
//     if (rating >= 5) return '#f3c719';
//     return '#db0a00';
//   }};
//   color: #fff;
// `;

export const Year = styled.p`
  font-size: 1rem;
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
`;
