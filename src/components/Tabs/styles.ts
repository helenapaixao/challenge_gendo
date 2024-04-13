import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  margin-top: 50px;
  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export const TabButton = styled.button<{ active: boolean }>`
  padding: 8px 52px !important;
  padding-top: 48px;
  border: none;
  font-size: 16px;
  background-color: #fff;
  color: #574f4d;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  cursor: pointer;
  position: relative;

  &:hover {
    background-color: #fff;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: ${(props) => (props.active ? "#E36209" : "transparent")};
    transition: background-color 0.3s ease;
  }

  @media (max-width: 768px) {
    padding: 8px 50px;
    padding-top: 8px;
  }
`;

export const NumberTabs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 70%;
  background-color: #e3e3e3;
  font-size: 12px;
  margin-left: 5px;
  color: #574f4d;
  font-weight: bold;
`;

export const TabContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;