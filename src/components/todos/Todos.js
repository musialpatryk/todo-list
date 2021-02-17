import React from "react";
import TodoList from "components/todo-list/TodoList";
import { StyledHeader, StyledWrapper } from "./Todos.style";

const Todos = ({ todos, changeTodo }) => {
  const getDoneTodos = (todoList) => {
    return todoList.filter(({ done }) => !done);
  };

  const getTodos = (todoList) => {
    return todoList.filter(({ done }) => done);
  };

  return (
    <StyledWrapper>
      {todos.length === 0 ? (
        <StyledHeader>Type your first todo.</StyledHeader>
      ) : null}
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
