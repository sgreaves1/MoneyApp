import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
    this.state = {
        response: []
    };
}

  componentDidMount(){

      fetch('accounts')
          .then(res => res.json())
          .then(json => {this.setState({response: json}); console.log(json)});

  }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Accounts</h1>
        </header>
            Accounts
            <div class="grid-container">
                    {this.state.response.map(el => (
                        <div class="grid-item">
                            <p>
                            Name: {el['account-name']}
                            <br/>{el['account-amount']}
                            </p>
                        </div>
                    ))}

            </div>
      </div>
    );
  }
}

export default App;
