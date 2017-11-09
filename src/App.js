import React, { Component } from 'react';
import vormen from './images/vormen.jpg';
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
          <img className="EcareLogo" src="https://jira.ecare.nl/s/y1oiat/74005/bcf70227c0f52b77608ee677299f3306/_/jira-logo-scaled.png"/>
        </header>
        <ListDetail clienten={this.state.clienten.clienten} datum={this.state.clienten.datum} />
        <div className="footerVormen">
          <img className="Vormen" src={vormen} />
        </div>
      </div>
    );
  }
}

export default App;
