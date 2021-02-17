import styled from "styled-components";

export const StyledWrapper = styled.div`
  overflow: auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media.large} {
    flex-direction: row;
    justify-content: space-around;
`;

export const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
`;
