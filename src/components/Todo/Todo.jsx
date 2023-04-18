import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const hadleDelete = () => onDelete(todo);

  return (
    <>
      <li key={todo.id}>
        <input
          type='checkbox'
          id='checkbox'
          checked={status === 'completed'}
          onChange={handleChange}
        />
        <label htmlFor='checkbox'>{text}</label>
        <button onClick={hadleDelete}>
          <FaTrash />
        </button>
      </li>
    </>
  );
};

export default Todo;
