import React from 'react';

const TodoContext = React.createContext({
  categories: [],
  todos: [],
  error: null,
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodos: () => {}
});

export default TodoContext;