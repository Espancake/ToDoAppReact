import AppUi from "./AppUi"
import useLocalStorage from "../hooks/useLocalStorage"
import "./app.css"
import { useEffect, useState } from "react"


/* const defaultTodos = [
  {text: "cortar cebolla", completed: true},
  {text: "lloras hoy", completed: false},
  {text: "conseguir un trabajo", completed: false},
  {text: "ser fullstack", completed: false},
  {text: "crear portfolio", completed: false},
];
 */

/* localStorage.setItem('TODOS_V1', defaultTodos); */

/* localStorage.removeItem("TODOS_V1"); */

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
    <AppUi
/*       error={error}
      loading={loading}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      allTodosCompleted={allTodosCompleted}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo} */
    />
  )
}

export default App
