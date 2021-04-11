import React, { useState } from "react";
import { StyledForm, StyledInput, StyledSubmit } from "./AddTodos.style";

const AddTodo = ({ handleAddTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === "") {
      setInputPlaceholder(false);
      return;
    }
    handleAddTodo(inputValue);
    setInputPlaceholder(true);
    setInputValue("");
  };

  const handleChangeValue = (e) => {
    setInputValue(e.target.value);
    setInputPlaceholder(true);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInput
        type="text"
        onChange={handleChangeValue}
        value={inputValue}
        placeholder={
          inputPlaceholder
            ? "What u have to do?"
            : "First, type what you have to do!"
        }
      />
      <StyledSubmit type="submit" value="Add todo" />
    </StyledForm>
  );
};

export default AddTodo;
