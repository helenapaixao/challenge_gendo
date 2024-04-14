import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors["white"]};
  border-radius: 5px;
  padding: 5px 10px;
  border-color: ${({ theme }) => theme.colors["pale-grey"]};
  border-width: 1px;
  margin-bottom: 20px;
  border-style: solid;
  margin-top: 40px;
  width: 350px;
`;

export const IconContainer = styled.span`
  margin-right: 10px;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 12px;
  ::placeholder {
    color: ${({ theme }) => theme.colors["pale-grey"]};
  }
`;
