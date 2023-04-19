import React, { useState, useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState(() => readTodosFromLocalStorage());

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated) =>
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  const handleDelete = (deleted) => setTodos(todos.filter((todo) => todo.id !== deleted.id));

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filterd = getFilteredItems(todos, filter);
  return (
    <>
      <section className={styles.container}>
        <ul className={styles.list}>
          {filterd.map((item) => (
            <Todo key={item.id} todo={item} onUpdate={handleUpdate} onDelete={handleDelete} />
          ))}
        </ul>
        <AddTodo onAdd={handleAdd} />
      </section>
    </>
  );
};

export default TodoList;

// 함수를 컴포넌트 내부에 작성하게 되면 컴포넌트가 re-render될 때마다 계속 불필요하게 재할당됨. 굳이 컴포넌트 내부에 있을 필요가 없는(내부의 다른 상태와 밀접하게 연관있는 함수가 아닌경우) 함수이기때문에 밖에서 선언함
const getFilteredItems = (todos, filter) => {
  if (filter === 'all') {
    return todos;
  }
  return todos.filter((todo) => todo.status === filter);
};

const readTodosFromLocalStorage = () => {
  console.log(readTodosFromLocalStorage);
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};
