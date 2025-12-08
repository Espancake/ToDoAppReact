import React from 'react'
import "./ButtonStyles.css"

const CreateTodoButton = () => {
  return (
    <div className='ButtonContainer'>
        <button 
        onClick={()=>console.log("diste click en crear Todo")}
        className='CreateButton'>+</button>
    </div>
  )
}

export default CreateTodoButton