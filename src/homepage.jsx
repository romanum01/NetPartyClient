import React from 'react'
import { ButtonClick } from './button'
import { NetParty } from './main'

export class Homepage extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this)
    }
    onSubmit() {
        console.log("hi")
    }
    render() {
        return (
            <div>
                <NetParty />
                <ButtonClick submit={this.onSubmit}/>
            </div>
        )
    }
}