import React from 'react'
import './form.css'

export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    handleUsernameChange(e) {
        const value = e.target.value;
        this.props.username(value)
    }
    handlePasswordChange(e) {
        const value = e.target.value;
        this.props.password(value)
    }
    render() {
        return (
            <div className="form">
                <input onChange={this.handleUsernameChange} placeholder="Username"/>
                <br/>
                <input type="password" onChange={this.handlePasswordChange} placeholder="Password"/>
                <br/>
                <button className="submit" onClick={this.props.submit}>Submit</button>
            </div>
        );
    }
}