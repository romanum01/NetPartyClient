import React from 'react'
import './main.css'
import { Link } from 'react-router-dom'

export class NetParty extends React.Component {
    render() {
        return (
            <div className="maindiv">
            <h1 className="main">NetParty</h1>
            <div className="links">
            <Link to={'/signup'}>Sign Up</Link>
            <Link to={'/login'}>Login</Link>
            </div>
            </div>
        )
    }
}