import React from "react";
import TodoList from "components/todo-list/TodoList";
import styled from "styled-components";

const StyledWrapper = styled.div`
  overflow: auto;
  padding: 0 30px;
`;

const Todos = ({ todos, changeTodo }) => {
  return (
    <StyledWrapper>
      <TodoList
        todos={todos.filter(({ done }) => !done)}
        message="To do:"
        handleTodoChange={changeTodo}
      />
      <TodoList
        todos={todos.filter(({ done }) => done)}
        message="Done:"
        handleTodoChange={changeTodo}
      />
    </StyledWrapper>
  );
};

export default Todos;
