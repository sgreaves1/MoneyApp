import React, { Component } from 'react';
import { Header } from "./App/Components/Header";
import { Home } from "./App/Components/Home";
import './App.css';

class App extends Component {
    render() {
    return (
      <div className="App">
          <Header/>
          <Home/>
      </div>
    );
  }
}

export default App;
