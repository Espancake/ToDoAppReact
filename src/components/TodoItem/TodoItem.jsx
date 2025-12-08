import React from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import "./TodoItem.css"

const TodoItem = ({text, completed, onComplete, onDelete}) => {
  return (
            <li className='TodoItem'>
                <span 
                className={`Icon Icon-check ${completed && "Icon-check--active" }`}
                onClick={onComplete}
                ><FaCheck/></span>
                <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
                <span 
                className='Icon Icon-delete'
                onClick={onDelete}
                ><MdDeleteForever/></span>
            </li>
  )
}

export default TodoItem