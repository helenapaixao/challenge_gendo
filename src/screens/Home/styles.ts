import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 23px;
    margin-top: 20px;
    transition: flex-direction 0.3s ease-in-out, margin-left 0.3s ease-in-out,
      margin-top 0.3s ease-in-out;
  }
`;

export const UserInfoContainer = styled.div`
  flex: 1;
  transition: flex 0.3s ease-in-out;
`;

export const TabsContainer = styled.div`
  flex: 2;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
