import React, { useEffect } from "react";
import TodoList from "components/todo-list/TodoList";
import { StyledHeader, StyledWrapper } from "./Todos.style";
import { useTodos } from "providers/todos-context";

const Todos = () => {
  const { todos, dispatch } = useTodos();

  useEffect(() => {
    dispatch({ type: "initTodos" });
  }, []);

  const getDoneTodos = () => {
    return todos.filter(({ done }) => !done);
  };

  const getTodos = () => {
    return todos.filter(({ done }) => done);
  };

  const changeTodo = (todoId) => {
    dispatch({ type: "changeTodoStatus", todoId });
  };

  return (
    <StyledWrapper>
      {todos.length === 0 ? (
        <StyledHeader>Type your first todo.</StyledHeader>
      ) : null}
      {getDoneTodos().length > 0 ? (
        <TodoList
          todos={getDoneTodos()}
          message="Things to do:"
          handleTodoChange={changeTodo}
        />
      ) : null}

      {getTodos().length > 0 ? (
        <TodoList
          todos={getTodos()}
          message="Done things:"
          handleTodoChange={changeTodo}
        />
      ) : null}
    </StyledWrapper>
  );
};

export default Todos;
