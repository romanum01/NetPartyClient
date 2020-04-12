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
        const data = {"usr": this.state.username, "pwd": this.state.password}
        console.log(data)
        const payload = JSON.stringify(data)
        fetch('https://hackathon2.roylatgnail.repl.co/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: payload
        })
        .then((response) => response.text())
        .then((data) => {
            console.log(data)
            if (data === 'created account') {
                alert('success')
            }
            if (data === 'username exists') {
                alert('username already created')
            }
            else {
                alert('Error, Try Again Later')
            }
        })
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