import React, { useContext, useState } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import "./TodoForm.css";

const TodoForm = () => {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState("");
  const [ showMessage, setShowMessage] = useState(false);

  const onCancel = () =>{
    setOpenModal(false)
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    if(newTodoValue !== ""){
      addTodo(newTodoValue);
      setOpenModal(false);
      setShowMessage(false);

    } else {
      setShowMessage(true);
    }
  }

  const onChange = (e) =>{
    setNewTodoValue(e.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Crea un nuevo Todo</label>
      <textarea
        placeholder="Crea tu nuevo todo aqui"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="Message">
        {showMessage ? <p>El campo no puede quedar vacio</p>: null}
      </div>
      <div className="TodoForm-buttonContainer">
        <button 
        onClick={onCancel}
        className="TodoForm-button TodoForm-button--cancel">
          Cancelar
        </button>
        <button 
        type="submit"
        className="TodoForm-button TodoForm-button--add">
            Crear
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
