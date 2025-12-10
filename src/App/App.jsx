import AppUi from "./AppUi"
import useLocalStorage from "../hooks/useLocalStorage"
import "./app.css"
import { useState } from "react"
import { TodoProvider } from "../TodoContext/TodoContext"


function App() {
  const {
    item: todos,
    saveItems: saveTodos,
    error,
    loading
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter(todo=> !!todo.completed).length;
  const totalTodos = todos.length;


  const searchedTodos = todos.filter(
    (todo)=>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  )



  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  const allTodosCompleted = !loading && todos.length > 0 && todos.every(todo => todo.completed);

  return(
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  )
}

export default App
