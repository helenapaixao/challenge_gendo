import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const RepoName = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #44a1de;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const RepoDescription = styled.p`
  font-size: 12px;
  margin: 0;
  color: #574f4d;
`;

export const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  span {
    font-size: 12px;
    color: #6a737d;
  }
`;

export const Divider = styled.div`
  height: 1px;
  background-color: #e1e4e8;
  margin: 12px 0;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  svg {
    margin-right: 5px;
    margin-left: 5px;
  }
`;
