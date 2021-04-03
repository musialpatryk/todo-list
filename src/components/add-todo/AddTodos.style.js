import styled from "styled-components";
import { BottomToTopAnimation } from "animations/BottomToTop";

export const StyledForm = styled.form`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  animation-name: ${BottomToTopAnimation};
  animation-duration: 1s;
  box-shadow: 0px -6px 6px 0px rgb(224 178 178 / 0.68);

  @media ${({ theme }) => theme.media.large} {
    align-items: center;
    padding: 30px 0;
    height: 160px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  background-color: ${({ theme }) => theme.light.backgroundColor};

  @media ${({ theme }) => theme.media.large} {
    width: 350px;
    margin-bottom: 10px;
    border-bottom: 1px solid;
  }
`;

export const StyledSubmit = styled.input`
  height: 60px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.light.addTodo};
  border: none;
  cursor: pointer;

  @media ${({ theme }) => theme.media.large} {
    width: 350px;
  }
`;
