import React from 'react'
import { Form } from './form'
import { FormTitle } from './formtitle'

export class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"username":"","password":""}
        this.password = this.password.bind(this)
        this.username = this.username.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    password(value) {
        this.setState({
            "username": this.state.username,
            "password": value
        })
    }
    username(value) {
        this.setState({
            "username": value,
            "password": this.state.password
        })
    }
    onSubmit() {
        if (this.state.username === "" || this.state.password === "") { console.log("Fields Empty"); return null }
        this.props.history.push('/party');
    }
    render() {
        return (
            <>
            <FormTitle />
            <Form password={this.password} username={this.username} submit={this.onSubmit} />
            </>
        );
    }
}