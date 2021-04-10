import React from "react";
import {
  StyledHeader,
  StyledLabel,
  StyledList,
  StyledWrapper,
} from "./TodoList.style";

const TodoList = ({ todos = [], message = "", handleTodoChange }) => {
  return (
    <StyledWrapper>
      <StyledHeader>{message}</StyledHeader>
      <StyledList data-testid="todo-list">
        {todos.length > 0
          ? todos.map(({ id, value, done }) => (
              <li key={id} onClick={() => handleTodoChange(id)}>
                <StyledLabel>
                  <input type="checkbox" defaultChecked={done} /> {value}
                </StyledLabel>
              </li>
            ))
          : null}
      </StyledList>
    </StyledWrapper>
  );
};

export default TodoList;
