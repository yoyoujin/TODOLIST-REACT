import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

const TodoList = ({ filter }) => {
  const [todos, setTodos] = useState([
    { id: '123', text: '장보기', status: 'active' },
    { id: '124', text: '공부하기', status: 'active' },
  ]);

  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) =>
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));
  const handleDelete = (deleted) => setTodos(todos.filter((todo) => todo.id !== deleted.id));

  const filterd = getFilteredItems(todos, filter);
  return (
    <>
      <section>
        <ul>
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
