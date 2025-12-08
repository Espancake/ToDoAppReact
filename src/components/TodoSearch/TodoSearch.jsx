import React, { useState } from 'react'
import "./TodoSearch.css"

const TodoSearch = ({ searchValue, setSearchValue }) => {

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