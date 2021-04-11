import Todos from "components/todos/Todos";
import { AppWrapper } from "App.style";
import AddTodo from "components/add-todo/AddTodo";
import { TodosProvider, useTodos } from "providers/todos-context";

function App() {
  return (
    <AppWrapper>
      <TodosProvider>
        <Todos />
        <AddTodo />
      </TodosProvider>
    </AppWrapper>
  );
}

export default App;
