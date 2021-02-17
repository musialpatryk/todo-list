import styled from "styled-components";
import Todos from "components/todos/Todos";
import { useState } from "react";
import AddTodo from "components/add-todo/AddTodo";

const startTodos = [
  {
    id: 0,
    value: "Cleaning.",
    done: false,
  },
  {
    id: 1,
    value: "Create todo app.",
    done: false,
  },
  {
    id: 2,
    value: "Do 100 push-ups",
    done: false,
  },
  {
    id: 3,
    value: "Cleaning.",
    done: true,
  },
  {
    id: 4,
    value: "Create todo app.",
    done: true,
  },
  {
    id: 5,
    value: "Do 100 push-ups",
    done: true,
  },
];

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
  const [todos, setTodos] = useState(startTodos);

  const changeTodoStatus = (todoId) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo = (todoValue) => {
    const lastId = todos[todos.length - 1].id;
    const newTodos = [...todos];
    newTodos.push({
      id: lastId + 1,
      value: todoValue,
      done: false,
    });
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
