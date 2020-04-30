import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import cuid from 'cuid';

import TodoContext from './TodoContext';
import TodosList from './components/TodosList/TodosList';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        {
          id: cuid(),
          name: 'personal'
        },
        {
          id: cuid(), 
          name: 'work'
        }
      ],
      todos: [], 
      error: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({
          "todos": data
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })
  }

  handleAddTodo = (todo) => {
    return fetch('http://localhost:8000/api/todos', 
      {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      }
    )
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch(err => {
      this.setState({
        error: err
      })
    })
  }

  updateTodos = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleDelete = (todoId) => {
    fetch(`http://localhost:8000/todos/${todoId}`, {
      method: 'DELETE', 
      headers: {
        'content-type': 'application/json'
      }
    })
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    })
  }

  render() {
    const contextValue = {
      categories: this.state.categories,
      todos: this.state.todos,
      error: null,
      addTodo: this.handleAddTodo,
      deleteTodo: this.handleDelete,
      updateTodos: this.updateTodos
    }

    return (
      <TodoContext.Provider value={contextValue}>
        <>
          <header>
            <h1 className="appName">What Todo...</h1>
          </header>
          <main className="main-container">
            <Route
              exact
              path="/todos"
              render={props => (
                <>
                  <TodosList {...props} /> 
                </>
              )}
            />
            <Route
              exact
              path="/todos/:category"
              render={props => (
                <>
                  <TodosList {...props} /> 
                </>
              )}
            />
            <Route
              exact
              path="/todos/new"
              render={props => (
                <AddTodoForm {...props} />
              )}
            />
          </main>
        </>
      </TodoContext.Provider>
    );
  }


}

export default App;
