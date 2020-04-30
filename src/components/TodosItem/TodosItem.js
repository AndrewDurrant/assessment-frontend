import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TodosContext from '../../TodoContext';

export class Todo extends Component {
  static contextType = TodosContext;

  render() {
    let context = this.context;
    const { name, id } = this.props;

    return (
      <div className="todoCard">
        <h2 className="todoCardTitle">{name}</h2>
        <Link to='/'>
          <button
            className="deleteTodoBtn"
            onClick={() => context.deleteItem(id)}>
            Delete
          </button>
        </Link>
      </div>
    )
  }
}

export default Todo;