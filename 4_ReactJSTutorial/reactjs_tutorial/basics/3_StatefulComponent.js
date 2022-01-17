import React from "react";

// This is not treated as a Component .
class H {
  render() {
    return <h1>shivam</h1>;
  }
}

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState((state) => ({
      seconds: state.seconds + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
        {/* <H /> */}
      </div>
    );
  }
}

export default Timer;

/**
 * Notes : ------------------------------------------------------------------------------
 *
 * 1. Why we use super() ? and why passing props to it ?
 *
 * Ans : As we know the classes won't become Components until we extend them to , When we extend them
 * then we must always first call their constructor to initialize whatever functionality that parent class
 * can serve us , For this reason we use super();
 * Passing props to super(props) , Basically its the parent class that makes it possible to behave our class like a React component
 * by providing its methods like { render() , other non-compulsary lifecycle methods} , so in order for render method
 * to read props we must pass it to the location where that method belongs , which is parent class , and that
 * w do by super(props).
 * https://overreacted.io/why-do-we-write-super-props/
 *
 * 2. What is a name space in React ?
 * Ans : They are like those patterns which have children components , You may use all children & may use some of them
 * But it is necessary to call all those children components inside the main name-space component , So basically namespace
 * acts like a High-order component . I don't Know they are same as nameSpace ?
 *
 * 3. What is this.state actually in a Component ?
 * Ans : Basically its a javaScript Object which becomes sub-property of any React.Component Object , 
 * which is predefined , with its methods like setState where you modify any
 * subproperty inside state property . You can also make something like it , but as its not inbuilt 
 * it's change will not cause any lifecycle method or re-rendering on change . So you need to explicitly 
 * change a state when any change to your custom made state . 
 * 
 * 4. Why we don't bind tick method ?
 * 
 * 
 */
