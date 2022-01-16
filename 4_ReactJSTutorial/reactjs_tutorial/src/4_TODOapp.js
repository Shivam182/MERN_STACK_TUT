import React, { Component } from "react";

export class TODO extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      items: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (this.state.input.length === 0) {
      return;
    }

    this.setState({
      items: this.state.items.concat(this.state.input),
      input: "",
    });
  }

  render() {
    return (
      <div>
        <h1>TODO : </h1>
        {this.state.items.map((item) => {
          return <h4>{item}</h4>;
        })}
        <form>
          <input
            placeholder="Write a TODO"
            value={this.state.input}
            onChange={(event) => {
              this.setState({ input: event.target.value });
            }}
          />
          <button type="submit" onClick={this.handleClick}>
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default TODO;

/**
 * 1. What is binding & Why we need to bind methods to use them  ? 
 * Ans : MUST READ : https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/  ,
 * As we have seen in prevoius module that , we did not bind the tick method 
 * still it was available on this.tick , means it was binded itself , the thing is 
 * in order to use a class method inside render() method we need to bind it . 
 * 
 */