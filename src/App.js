import styled from "styled-components";
import Todos from "components/todos/Todos";
import { useState } from "react";

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
  background-color: ${({ theme }) => theme.backgroundColor.light};
  font-size: ${({ theme }) => theme.fontSize.m};
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

  return (
    <AppWrapper>
      <Todos todos={todos} changeTodo={changeTodoStatus} />
    </AppWrapper>
  );
}

export default App;
