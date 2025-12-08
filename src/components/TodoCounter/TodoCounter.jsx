import React from 'react'
import "./TodoCounter.css"

const TodoCounter = ({ TotalTodos, Completed, allTodosCompleted }) => {

  const total = Number(TotalTodos) || 0;
  const completed = Number(Completed) || 0;

  const showCongrats = allTodosCompleted && total > 0;

  return (
    <div>
      {showCongrats ? (
        <h1>🎉 ¡Felicidades! Todos los todos están completados 🎉</h1>
      ) : (
        <h1>Has completado {completed} de {total} Todos</h1>
      )}
    </div>
  );
}

export default TodoCounter;