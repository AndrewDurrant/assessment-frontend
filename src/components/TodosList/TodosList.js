import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodoContext from '../../TodoContext';

import Todo from '../TodosItem/TodosItem';

export class TodosList extends Component {
  static contextType = TodoContext;
  render() {
    let context = this.context;
    let filteredTodos;
    console.log(this.props.match.params);
    
    if (this.props.match.params.category) {
      filteredTodos = context.todos.filter(todo => todo.category === this.props.match.params.category)
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
          <Link to='/todos/new'>
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