import React from 'react'
import TodoItem from "../components/TodoItem/TodoItem"
import TodoCounter from "../components/TodoCounter/TodoCounter"
import TodoSearch from "../components/TodoSearch/TodoSearch"
import TodoList from "../components/TodoList/TodoList"
import CreateTodoButton from "../components/CreateTodoButton/CreateTodoButton"
import "./App.css"

const AppUi = ({
    loading,
    error,
    completedTodos,
    totalTodos,
    allTodosCompleted,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) => {
  return (
    <div className="App">
      <TodoCounter 
      TotalTodos={totalTodos} 
      Completed={completedTodos}
      allTodosCompleted={allTodosCompleted}
      />
      <TodoSearch searchValue={searchValue}  setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <p>Estamos cargando...</p>}
        {error && <p>Hubo un error!!</p>}
        {(!loading && searchedTodos.length == 0) && <p>Crea tu Primer Todo!!</p>}
        {searchedTodos.map((todo)=>(
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          onComplete={()=> completeTodo(todo.text)}
          onDelete={()=> deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

     <CreateTodoButton/>


    </div>
  )
}

export default AppUi











