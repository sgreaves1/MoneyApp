import React from "react"

export class AddAccount extends React.Component{
    constructor() {
        super();
        this.state = {
            showAddAccount: false,
            showCreditLimit: false
        };
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClick() {
        this.setState({ showAddAccount: true });
    }

    onChange(event) {
        if (event.target.value === "Credit")
            this.setState({ showCreditLimit: true});
        else
            this.setState({ showCreditLimit: false});
    }

    render() {
        return(
            <div>
                {!this.state.showAddAccount ?
                    <input type="submit" value="Add Account" onClick={this.onClick}/>
                    :
                    <div>
                        <h1>Add new account</h1>
                        <form name="accounts" action="/accounts" method="POST">
                            <div className="textbox">
                                <label>account name:</label>
                                <input type="text" name="account-name"/>
                            </div>

                            <div className="textbox">
                                <label>account amount:</label>
                                <input type="number" name="account-amount"/>
                            </div>

                            {this.state.showCreditLimit ?
                                <div className="textbox">
                                    <label>credit limit:</label>
                                    <input type="number" name="account-limit"/>
                                </div>
                                : <div/>
                            }


                            <div className="textbox">
                                <label>account type:</label>
                                <select name="account-type" onChange={this.onChange}>
                                    <option value="Debit">Debit</option>
                                    <option value="Credit">Credit</option>
                                </select>
                            </div>

                            <div className="textbox">
                                <input type="submit" value="submit"/>
                            </div>
                        </form>
                    </div>
                }
            </div>
        )
    }
}