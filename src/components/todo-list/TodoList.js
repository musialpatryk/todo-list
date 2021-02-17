import React from "react";
import styled from "styled-components";
import { fadeInAnimation } from "animations/animations";

const StyledWrapper = styled.div`
  margin: 20px 0 40px 0;
`;

const StyledList = styled.ul`
  list-style-type: none;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 500;
  margin-bottom: 10px;
  animation-name: ${fadeInAnimation};
  animation-duration: 1s;
`;

const StyledLabel = styled.label`
  overflow-wrap: break-word;
  animation-name: ${fadeInAnimation};
  animation-duration: 0.5s;
  cursor: pointer;
`;

const TodoList = ({ todos, message, handleTodoChange }) => {
  return (
    <StyledWrapper>
      {todos.length > 0 ? <StyledHeader>{message}</StyledHeader> : null}
      <StyledList>
        {todos.map(({ id, value, done }) => (
          <li key={id} onClick={() => handleTodoChange(id)}>
            <StyledLabel>
              <input type="checkbox" defaultChecked={done} /> {value}
            </StyledLabel>
          </li>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default TodoList;
