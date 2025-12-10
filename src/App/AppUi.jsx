import React from 'react'
import TodoItem from "../components/TodoItem/TodoItem"
import TodoCounter from "../components/TodoCounter/TodoCounter"
import TodoSearch from "../components/TodoSearch/TodoSearch"
import TodoList from "../components/TodoList/TodoList"
import CreateTodoButton from "../components/CreateTodoButton/CreateTodoButton"
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner'
import Modal from '../components/Modal/Modal'
import { TodoContext } from '../TodoContext/TodoContext'
import TodoForm from '../components/TodoForm/TodoForm'
import "./App.css"

const AppUi = ({
 /*    loading,
    error,
    completedTodos,
    totalTodos,
    allTodosCompleted,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo */
}) => {

    const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
  } = React.useContext(TodoContext);
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>

      <TodoList>
        {loading && <LoadingSpinner totalTodos={totalTodos}/>}
        {error && <TodosError/>}
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

      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

    </div>
  )
}

export default AppUi











