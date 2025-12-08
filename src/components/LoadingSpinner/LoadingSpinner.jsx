import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = ({ totalTodos = 3 }) => {
  const skeletonCount = totalTodos > 0 ? totalTodos : 3;
  const skeletons = Array.from({ length: skeletonCount });

  return (
    <div className="loading-container">
      <div className="spinner" />
      <ul className="todo-skeleton-list">
        {skeletons.map((_, index) => (
          <li key={index} className="todo-skeleton" />
        ))}
      </ul>
    </div>
  );
};

export default LoadingSpinner;