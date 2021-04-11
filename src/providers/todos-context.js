import React, { createContext, useContext, useReducer } from "react";

const TodosContext = createContext();

const saveLocalStorageTodos = (todosToSave) => {
  localStorage.setItem("todosList", JSON.stringify(todosToSave));
};

const todosReducer = ({ todos }, action) => {
  switch (action.type) {
    case "initTodos": {
      const localTodos = localStorage.getItem("todosList");
      if (localTodos === null) {
        return { todos: [] };
      }
      return { todos: JSON.parse(localTodos) };
    }
    case "changeTodoStatus": {
      const newTodos = todos.map((todo) => {
        if (todo.id === action.todoId) {
          todo.done = !todo.done;
        }
        return todo;
      });
      saveLocalStorageTodos(newTodos);
      return { todos: newTodos };
    }
    case "addTodo": {
      let lastId;
      if (todos.length === 0) lastId = -1;
      else lastId = todos[todos.length - 1].id;
      const newTodos = [...todos];
      newTodos.push({
        id: lastId + 1,
        value: action.value,
        done: false,
      });
      saveLocalStorageTodos(newTodos);
      return { todos: newTodos };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const TodosProvider = ({ children }) => {
  const [{ todos }, dispatch] = useReducer(todosReducer, {
    todos: [],
  });
  const contextValue = { todos, dispatch };
  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined)
    throw new Error("You cannot use todos without provider.");
  return context;
};

export { TodosProvider, useTodos };
