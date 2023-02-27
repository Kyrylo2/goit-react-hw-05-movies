import styled from 'styled-components';

export const ReviewItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReviewAvatar = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 50%;
`;

export const ReviewInfo = styled.div`
  flex: 1;
`;

export const ReviewUsername = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

export const ReviewDate = styled.p`
  margin: 0;
  font-size: 14px;
  color: #666;
`;

export const ReviewRating = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ff6f00;
`;

export const ReviewContent = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #333;
`;
