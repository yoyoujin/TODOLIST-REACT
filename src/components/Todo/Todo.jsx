import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({ todo, onUpdate, onDelete }) => {
  const { id, text, status } = todo;
  const handleChange = (e) => {
    const status = e.target.checked ? 'completed' : 'active';
    onUpdate({ ...todo, status });
  };
  const hadleDelete = () => onDelete(todo);

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={status === 'completed'}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {text}
      </label>
      <span className={styles.icon}>
        <button className={styles.button} onClick={hadleDelete}>
          <FaTrash />
        </button>
      </span>
    </li>
  );
};

export default Todo;
