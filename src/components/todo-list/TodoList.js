import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  margin: 20px 0;
`;

const StyledList = styled.ul`
  list-style-type: none;
  cursor: pointer;
`;

const StyledHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.l};
`;

const TodoList = ({ todos, message, handleTodoChange }) => {
  return (
    <StyledWrapper>
      {todos.length > 0 ? <StyledHeader>{message}</StyledHeader> : null}
      <StyledList>
        {todos.map(({ id, value, done }) => (
          <li key={id} onClick={() => handleTodoChange(id)}>
            <input type="checkbox" checked={done} />
            {value}
          </li>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default TodoList;
