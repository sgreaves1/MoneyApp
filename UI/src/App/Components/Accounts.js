import React from "react";
import './Accounts.css';

import logo from './logo.svg';

export class Accounts extends React.Component{
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
        return(
            <div>
                Accounts
                <div class="grid-container">
                    {this.state.response.map(el => (
                        <div class="grid-item">
                            <a href="#" className="fill-div">
                                Name: {el['account-name']}
                                <br/>{el['account-amount']}
                            </a>
                            <a href='/accountdelete/'>
                                <img src={logo} width="30"/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}