import React, { useRef, useState } from "react";
import styled from "styled-components";
import { bottomToTopAnimation } from "animations/animations";

const StyledForm = styled.form`
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

const StyledSubmit = styled.input`
  height: 60px;
  font-size: ${({ theme }) => theme.fontSize.m};
  background-color: ${({ theme }) => theme.light.addTodo};
  border: none;
  cursor: pointer;

  @media ${({ theme }) => theme.media.large} {
    width: 350px;
  }
`;

const AddTodo = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        placeholder="What u have to do?"
      />
      <StyledSubmit type="submit" value="Add todo" />
    </StyledForm>
  );
};

export default AddTodo;
