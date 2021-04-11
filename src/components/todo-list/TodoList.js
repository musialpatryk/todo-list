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
      {todos.length > 0 ? (
        <StyledList data-testid="todo-list">
          {todos.map(({ id, value, done }) => {
            return (
              <li key={id} onClick={() => handleTodoChange(id)}>
                <StyledLabel>
                  <input type="checkbox" defaultChecked={done} /> {value}
                </StyledLabel>
              </li>
            );
          })}
        </StyledList>
      ) : null}
    </StyledWrapper>
  );
};

export default TodoList;
