Frontend

1. Add the react-router-dom library and wrap your App component in BrowserRouter **DONE**

2. When the App component mounts, it should fetch Todos from your backend API and populate the App state **DONE**

3. Create an addTodo function in the App component that receives a todo object and adds it to state.todos **DONE**

4. Create a Route component on /todos/:category path for the Todos List view
  a. This Route should render the component TodosList
  b. Use the render prop and pass in this.state.todos as a prop on TodosList **DONE**

5. Create a Route component on /todos/new path for the New Todo view
  a. This Route should render the component AddTodoForm
  b. Use the render prop to pass in the addTodo function as an onSuccess prop 
  **DONE**

6. Create TodosList and TodosItem components with the appropriate markup and utilize them
  a. The TodosList component should filter this.props.todos using the param from this.props.match.params.category 
  **DONE**
7. Create AddTodoForm and make a form to add a todo. 
  a. Submitting the form should send a POST request to your server API
  b. On success, invoke the props.onSuccess function, passing in the new todo from the API response
  c. On success, use props.history.push() to redirect back to the appropriate TodoList view
  
You may use the Context API if you wish, but you do not need to (these instructions describe passing props directly down from the Route component). 
