import React, { Component } from 'react';
import cuid from 'cuid';
import TodoContext from '../../TodoContext';
import { Link } from 'react-router-dom';
import ValidationError from '../../ValidationError';

export class AddTodo extends Component {
  static contextType = TodoContext;

  constructor(props) {
    super(props);
    this.state = {
      todoName: {
        value: '',
        touched: false
      },
      categoryId: {
        value: '',
        touched: false
      }
    }
  }

  handleChange(category) {
    this.setState({
      categoryId: {
        value: category,
        touched: true
      }
    })
  }

  updateTodoName(name) {
    this.setState({
      todoName: {
        value: name,
        touched: true
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const { todoName, categoryId } = this.state;
    const todo = {
      id: cuid(),
      category: categoryId.value,
      name: todoName.value,
    }
    this.context.addTodo(todo)
      .then(() => {
        this.context.updateTodos(todo)
        this.props.history.push('/todos')
      })
  }

  validateTodoName() {
    const todoName = this.state.todoName.value.trim();
    if(todoName.length === 0) {
      return 'Todo name is required';
    } else if(todoName.length < 3) {
      return 'Todo name must be at least 3 characters long'
    }
  }

  render() {
    const todoNameError = this.validateTodoName();

    return (
      <form className="addTodo" onSubmit={e => this.handleSubmit(e)}>
        <h2>Add Todo</h2>
        <div>
          <label htmlFor="todoName">Todo Name *</label>
          <input 
            type="text"
            name="todoName"
            id="todoName"
            onChange={e => this.updateTodoName(e.target.value)}
          />
          {this.state.todoName.touched && (
            <ValidationError message={todoNameError} />
          )}
        </div>
        <div>
          <label htmlFor="categoryId">Category Association</label>
          <select 
            name="categoryId"
            id="categoryId"
            value={this.state.value}
            onChange={e => this.handleChange(e.target.value)}
            >
              {this.context.categories.map(category => 
                <option value={category.id} key={category.id}>{category.name}</option>
              )}
            </select>
        </div>
        
        <div>
          <Link to='/todos'>
            <button type="reset">
              Cancel
            </button>
          </Link>
          <button
            type="submit"
            disabled= {
              this.validateTodoName() 
            }
          >
            Submit
          </button>
        </div>

      </form>
    )
  }
}

export default AddTodo;
