import React, { useContext } from 'react'
import "./ButtonStyles.css"
import { TodoContext } from '../../TodoContext/TodoContext'

const CreateTodoButton = () => {
  const {setOpenModal,openModal} = useContext(TodoContext);
  
  return (
    <div className='ButtonContainer'>
        <button 
        onClick={()=> setOpenModal(!openModal)}
        className='CreateButton'>+</button>
    </div>
  )
}

export default CreateTodoButton