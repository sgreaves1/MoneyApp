import React from "react";
import { Accounts } from "./Accounts";
import { AddAccount } from "./AddAccount";

export class Home extends React.Component {
    render() {
        return (
            <div>
                <Accounts/>
                <AddAccount/>
            </div>
        );
    }
}