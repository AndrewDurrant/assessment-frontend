import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders')
      .then(response => response.json())
      .then(data => {
        this.setState({
          "folders": data
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })

    fetch('http://localhost:9090/notes')
      .then(response => response.json())
      .then(data => {
        this.setState({
          "notes": data
        })
      })
      .catch(err => {
        this.setState({
          error: err
        })
      })
  }



  render() {
    const contextValue = {

    }



    return (
      <main className="App">
        
      </main>
    );
  }


}

export default App;
