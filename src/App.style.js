import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.light.backgroundColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: "B612", sans-serif;
  overflow: hidden;
`;
