import React from "react";
import TodoList from "components/todo-list/TodoList";
import styled from "styled-components";

const StyledWrapper = styled.div`
  overflow: auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;

  @media ${({ theme }) => theme.media.large} {
    flex-direction: row;
    justify-content: space-around;
`;

const Todos = ({ todos, changeTodo }) => {
  const getDoneTodos = (todoList) => {
    return todoList.filter(({ done }) => !done);
  };

  const getTodos = (todoList) => {
    return todoList.filter(({ done }) => done);
  };

  return (
    <StyledWrapper>
      {getDoneTodos(todos).length > 0 ? (
        <TodoList
          todos={getDoneTodos(todos)}
          message="Todo:"
          handleTodoChange={changeTodo}
        />
      ) : null}

      {getTodos(todos).length > 0 ? (
        <TodoList
          todos={getTodos(todos)}
          message="Done:"
          handleTodoChange={changeTodo}
        />
      ) : null}
    </StyledWrapper>
  );
};

export default Todos;
