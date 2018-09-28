import React, { Component } from 'react';
import { Header } from "./App/Components/Header";
import { Home } from "./App/Components/Home";
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
          <Header/>

            Accounts
            <div class="grid-container">
                    {this.state.response.map(el => (
                        <div class="grid-item">
                            <a href="#" className="fill-div">
                            Name: {el['account-name']}
                            <br/>{el['account-amount']}
                            </a>
                        </div>
                    ))}

                    <div class="grid-item">
                        <a href="#" class="fill-div">
                        +
                        </a>
                    </div>

            </div>
      </div>
    );
  }
}

export default App;
