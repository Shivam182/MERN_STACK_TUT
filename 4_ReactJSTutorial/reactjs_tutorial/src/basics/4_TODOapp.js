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
 *
 *
 * 1. What is binding & Why we need to bind methods to use them  ?
 * Ans : MUST READ : https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/  ,
 * According to official docs ---> Handeling Events section , it is said that we need to bind and pass this to it because
 * in order to make `this` work inside the event handler .
 * As we have seen in prevoius module that , we did not bind the tick method
 * still it was available on this.tick , means it was binded itself , the thing is
 * in order to use a class method inside render() method we need to bind it .
 *
 * 2. WHy not used items.forEach instead of items.map ?
 * Ans : Because with forEach we do not return anything , even if we return inside callback then also it does not let
 * it come outside of method forEach , but map method returns for every item , something .
 *
 * 3. Where came event argument & what is it ?
 * Ans : event in React are any occurance, like here changing text was event , and it is the only event which can be
 * related to a textbox , so whenever text is changed , an event object is fired .
 *
 * 4. What does event.target.value does in input react-element ?
 * Ans : If you log event.target , you will see the complete element as it is in the log , where event was registered
 * in this case it will show complete input element as its written . And e.target.value is simply the value of
 * event , that led to fire the event . In this case it is the text written by user .
 *
 * 5. What is e.preventDefault method ? Why without this method page automatically refreshes on pressing Add button ?
 * Ans : preventDefault() method prevents the default behaivour of the Submit button , which is--> make a HTTP POST request
 * automatically with all the form data provided .
 *
 * 6. What does button type signifies ? if we hover over type we see : 'submit' | 'reset' | 'button' ?
 * Ans : 'submit' :- It has a default action fo making HTTP POST request.
 * 'reset' :- It resets all the form data automatically ? Can't we use this reset button and also apply handleClick , no need to set input state again back to empty ????
 * 'button' :- It provides a simple button functionality , with onClick , & no default behaivoir like the above two .
 *
 */
