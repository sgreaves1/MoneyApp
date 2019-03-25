import React from "react";
import logo from './logo.svg';
import './Header.css';

export class Header extends React.Component{
    render() {
        return(
            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Accounts</h1>
                </header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <ul className="nav navbar-nav">
                            <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}