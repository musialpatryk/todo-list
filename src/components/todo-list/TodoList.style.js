import styled from "styled-components";
import { fadeInAnimation } from "animations/animations";

export const StyledWrapper = styled.div`
  margin: 20px 0 40px 0;

  @media ${({ theme }) => theme.media.large} {
    max-width: 30%;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  margin-bottom: 10px;
  animation-name: ${fadeInAnimation};
  animation-duration: 1s;
`;

export const StyledLabel = styled.label`
  overflow-wrap: break-word;
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  cursor: pointer;
`;
