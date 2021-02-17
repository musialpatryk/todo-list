import React, { useRef } from "react";
import styled from "styled-components";
import { bottomToTopAnimation } from "animations/animations";

const StyledWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 1px 2px 1px #000000;
  animation-name: ${bottomToTopAnimation};
  animation-duration: 1s;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  background-color: ${({ theme }) => theme.light.backgroundColor};
`;

const StyledButton = styled.button`
  height: 60px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.light.addTodo};
  border: none;
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
