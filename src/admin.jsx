import React from 'react'
import { Home } from './home'

export class Admin extends React.Component {
    onComponentMount() {
        setInterval(function(){fetch('https://hackathon2.royalgnail.repl.co/admin/', {
            method: 'GET',
        })
        .then((response) =>  response.json())
        .then((data) => {
            this.setState({data})
        })}, 120000).bind(this)  
    }
    render() {
    return(
        <Home />
    );
    }
}