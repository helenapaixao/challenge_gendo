import styled from "styled-components";

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 250px;
  margin-top: 40px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    margin-top: 10px;
  }
`;

export const Username = styled.span`
  font-size: 18px;
  margin-top: 5px;
  color: #000;
  font-weight: bold;
`;

export const Bio = styled.p`
  font-size: 16px;
  margin-top: 5px;
  color: #574f4d;
`;

export const ContentAvatar = styled.div`
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
