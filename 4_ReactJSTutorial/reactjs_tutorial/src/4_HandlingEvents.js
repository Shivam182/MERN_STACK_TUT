import React, { Component } from "react";

export class Foo extends Component {

  handleClick(e) {
    console.log(e.target);
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
 * 1. What is event.taget.value ? Why is it used in state changing buttons , and often used as values provided to new value of any state ?
 * Ans : Events are fired when something changes , in button its fired on onClick , so we provide it a event listener OR a function but
 * , also we change state on any button click , Or we change state on any text change in any search box . 
 * So if you console log e.target --> you will see that it shows exact jsx of that element which called that method 
 * examples here in this case it shows { <button>click</button> } as its log in console . 
 * if you console log e.target.value ---> it will show the current value that has been informed to the element on which 
 * this event handler has been attached . As a result in order to change states in textBox elements , we use e.target.value 
 * which simply gives us the new value in that element . and thus we change our state . 
 */
