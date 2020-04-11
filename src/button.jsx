import React, { Component } from 'react'

export class Button extends Component {
  
    constructor(props) {
      super(props);
      this.sayHello = this.sayHello.bind(this);
    }
  
    sayHello() {
      alert('Hello!');
    }
    render() {
    return (
      <button onClick={this.sayHello}>
        Click me!
      </button>
    );
    }
  }