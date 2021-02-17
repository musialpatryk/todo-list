import React, { useRef } from "react";
import styled from "styled-components";
import { bottomToTopAnimation } from "animations/animations";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  animation-name: ${bottomToTopAnimation};
  animation-duration: 1s;
  box-shadow: 0px -6px 6px 0px rgb(224 178 178 / 0.68);

  @media ${({ theme }) => theme.media.large} {
    align-items: center;
    padding: 30px 0;
    height: 160px;
  }
`;

const StyledInput = styled.input`
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

const StyledButton = styled.button`
  height: 60px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.light.addTodo};
  border: none;

  @media ${({ theme }) => theme.media.large} {
    width: 350px;
  }
`;

const AddTodo = ({ handleAddTodo }) => {
  const inputValue = useRef("");

  const handleInputChange = (value) => {
    inputValue.current = value;
  };

  return (
    <StyledWrapper>
      <StyledInput
        type="text"
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="What u have to do?"
      />
      <StyledButton onClick={() => handleAddTodo(inputValue.current)}>
        Add todo
      </StyledButton>
    </StyledWrapper>
  );
};

export default AddTodo;
