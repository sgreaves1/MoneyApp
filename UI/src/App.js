import React, { Component } from 'react';
import React from 'react';
import Link from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Accounts</h1>
        </header>
        <p className="App-intro">
            <Link to="/accounts">Accounts</Link>
        </p>
      </div>
    );
  }
}

export default App;
