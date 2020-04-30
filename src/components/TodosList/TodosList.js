import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoContext from '../../TodoContext';

import Todo from '../TodosItem/TodosItem';

export class TodosList extends Component {
  static contextType = TodoContext;
  render() {
    let context = this.context;
    let filteredTodos;

    if (this.props.match.params.categoryId) {
      filteredTodos = context.todos.filter(todo => todo.categoryId === this.props.match.params.categoryId)
    } else {
      filteredTodos = context.todos;
    }

    const allTodos = filteredTodos.map(todo => {
      return(
        <Todo
          key={todo.id}
          id={todo.id}
          name={todo.name}
          categoryId={todo.categoryId}
          history={this.props.history}
        />
      )
    })

    return (
      <main className="todos">
        <div className="todoCardContainer">
          { allTodos }
          <Link to='/addTodo'>
            <button className="addTodoBtn">
              Add Todo
            </button>
          </Link>
        </div>
      </main>
    )
  }
}

export default TodosList;