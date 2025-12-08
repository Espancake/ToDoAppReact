import React from 'react';
import "./TodoCounter.css";

const TodoCounter = ({ TotalTodos, Completed, allTodosCompleted, loading }) => {

  const total = Number(TotalTodos) || 0;
  const completed = Number(Completed) || 0;

  const showCongrats = allTodosCompleted && total > 0;

  return (
    <div>
      {loading ? (
        <h1>Todos aún no han cargado...</h1>
      ) : showCongrats ? (
        <h1>🎉 ¡Felicidades! Todos los todos están completados 🎉</h1>
      ) : (
        <h1>Has completado {completed} de {total} Todos</h1>
      )}
    </div>
  );
};

export default TodoCounter;