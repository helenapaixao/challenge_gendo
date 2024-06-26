import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["black-two"]};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 60px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  margin-right: 10px ;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
`;
