import React, { Component } from "react";

export class Foo extends Component {

  handleClick() {
    console.log("button clicked");
  }

  // do not use the parenthesis in this.handleClick event handler method .
  render() {
    return (
      <div> 
        <button onClick={this.handleClick}>click</button> 
      </div>
    );
  }
}

export default Foo;

/**
 * Notes:-
 * 
 * 1. 
 */
