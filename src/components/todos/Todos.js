import React from "react";
import TodoList from "components/todo-list/TodoList";

const Todos = ({ todos, changeTodo }) => {
  return (
    <>
      <TodoList
        todos={todos.filter(({ done }) => !done)}
        message="To do"
        handleTodoChange={changeTodo}
      />
      <TodoList
        todos={todos.filter(({ done }) => done)}
        message="Done"
        handleTodoChange={changeTodo}
      />
    </>
  );
};

export default Todos;
