import React from 'react'
import { Button } from './button'
import { NetParty } from './main'

export class Homepage extends React.Component {
    useLessFunction() {
        alert("success")
    }
    render() {
        return (
            <div>
                <NetParty />
                <Button page={this.useLessFunction}/>
            </div>
        )
    }
}