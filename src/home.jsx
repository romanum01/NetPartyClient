import React from 'react'
import { Link } from 'react-router-dom'
import './home.css'

export class Home extends React.Component {
    render() {
        return (
            <Link to={'/home'}>Home</Link>
        )
    }
}