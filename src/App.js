import styled from "styled-components";
import Todos from "components/todos/Todos";
import { useState } from "react";
import AddTodo from "components/add-todo/AddTodo";

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.light.backgroundColor};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: "B612", sans-serif;
  overflow: hidden;
}
`;

function App() {
  const getLocalStorageTodos = () => {
    const localTodos = localStorage.getItem("todosList");
    if (localTodos === null) return [];
    return JSON.parse(localTodos);
  };

  const saveLocalStorageTodos = (todosToSave) => {
    localStorage.setItem("todosList", JSON.stringify(todosToSave));
  };

  const [todos, setTodos] = useState(() => {
    const initialTodos = getLocalStorageTodos();
    return initialTodos;
  });

  const changeTodoStatus = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
      return todo;
    });
    saveLocalStorageTodos(newTodos);
    setTodos(newTodos);
  };

  const addTodo = (todoValue) => {
    let lastId;
    if (todos.length === 0) lastId = -1;
    else lastId = todos[todos.length - 1].id;
    const newTodos = [...todos];
    newTodos.push({
      id: lastId + 1,
      value: todoValue,
      done: false,
    });
    saveLocalStorageTodos(newTodos);
    setTodos(newTodos);
  };

  return (
    <AppWrapper>
      <Todos todos={todos} changeTodo={changeTodoStatus} />
      <AddTodo handleAddTodo={addTodo} />
    </AppWrapper>
  );
}

export default App;
