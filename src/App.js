import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ListDetail from './ListDetail/index';
import Clienten from './data.json';

class App extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      clienten: [] 
    }
  }

  componentDidMount() {    
    this.setState( { "clienten" : Clienten });
  }  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListDetail clienten={this.state.clienten} />
      </div>
    );
  }
}

export default App;
