import React from 'react'

export class ButtonClick extends React.Component {
    render() {
    return (
      <div>
      <button onClick={this.props.submit}>Submit</button>
      </div>
    );
    }
  }