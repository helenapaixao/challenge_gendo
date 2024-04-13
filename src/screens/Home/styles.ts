import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 23px;
    margin-top: 20px;
  }
`;

export const UserInfoContainer = styled.div`
  flex: 1;
`;

export const TabsContainer = styled.div`
  flex: 2;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
