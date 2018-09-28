import React, { Component } from 'react';
import logo from './App/Components/logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            response: []
        };
    }

    componentDidMount(){

        fetch('account/5ba4c5dabf9d9a91d482cbc4')
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
                <p className="App-intro">
                    Accounts
                    <div>
                        <ul>
                            {this.state.response.map(el => (
                                <li>
                                    Name: {el['account-name']}
                                </li>
                            ))}
                        </ul>
                    </div>
                </p>
            </div>
        );
    }
}

export default App;
