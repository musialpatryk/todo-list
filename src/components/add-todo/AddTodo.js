import React, { useState } from "react";
import { StyledForm, StyledInput, StyledSubmit } from "./AddTodos.style";

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
