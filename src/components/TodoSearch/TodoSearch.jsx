import React, { useState } from 'react'
import { TodoContext } from '../../TodoContext/TodoContext';
import "./TodoSearch.css"

const TodoSearch = () => {
   const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input 
    type="text"
    placeholder='Buscar Todo'
    className='TodoSearch'
    value={searchValue}
    onChange={(e)=> setSearchValue(e.target.value)}
    />
  )
}

export default TodoSearch