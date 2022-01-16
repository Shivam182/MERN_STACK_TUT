import React from "react";

// -------------WITHOUT JSX -----------------------
// class HelloMessage extends React.Component {
//   render() {
//     return React.createElement("div", null, "Hello ", this.props.name);
//   }
// }

// ReactDOM.render(
//   React.createElement(HelloMessage, { name: "Taylor" }),
//   document.getElementById("hello-example")
// );

// ----------------WITH JSX---------------------------
// class HelloMessage extends React.Component {
//   render() {
//     return <div>Hello {this.props.name}</div>;
//   }
// }

// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById("hello-example")
// );

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World !!</h1>
      </div>
    );
  }
}

export default HelloWorld;

/**
 * Notes :-
 * 1. What is React Element ?
 * Ans : They are the smallest building blocks of any Component, they are typically created via JSX. For example
 * <div/> , <AnyComponent/> are React elements , they are
 * converted into HTML equivalent somehow by the render method possibly
 * which renders DOM elements .
 *
 * 2. What is render method in class-based Components vs render method of ReactDOM.render() ??
 * Ans : Component => render() method of a Component reads this.props & this.state and returns React elements , the render() method also should be pure
 * means it must no contain any expression in its body except a return statement , if it's pure / no extra expressions / then it's not changing
 * OR interacting with the DOM directly , If you want to make changes to the DOM while being in a Component , then use Lifecycle methods . Which is
 * allowed ,and does not contaminates purity of render method or purity of a Component .
 * The render() method of a component is also responsible for rendering it's part of DOM ,
 * Though i know a different render() method functions at top of everything ,
 *
 * ReactDOM => render() method takes React a main / parent Component & render it inside a container provided {container is : document.getElementById('root')}
 * if the element was already rendered on DOM , then this method will call only that specific Component's render methodand update that element . This act of only updating changed elements not everyone
 * comes from , React's DOM diffing algorithm .
 * When this method is first called , with a container node , then all pre-existing DOM elements within it are cleared .
 * Later calls to render method use diffing algorithm .
 *
 * IMP : I came to this conclusion that ReactDom's render is not actually displaying but every component's render method is actually displaying because
 * - then what does component's render method do , and i think that would be more intelligent way , that every component takes
 * responsibility of its rendering , the outer render method just attaches to prop , state & alarms the Components to render or calls their render methods .
 *
 * 3. Why a Component is recommended to be pure ? What if it's not pure ??
 * Ans : In React we have Components or our classes extends React.Component , they render every time ,
 * does not matter data changes or not , means if their parent Component updates , that's why they
 * implement shouldComponentUpdate() method , that checks weather props & state of the component have changed or not
 * if not , then component does not re-renders .
 * React.PureComponent is just a mix of both above {Component & shouldComponentUpdate()} , when a class extends this
 * then that class or component does not needs to implement shouldUpate() method , because its implemented already and PureComponent
 * now checks for props & state .
 * A component is recommended to be Pure because it makes it more faster , for website
 * because now it just does a shallow comparison of props & states earlier & now , and re-renders on basis of it .
 *
 * 4. What does Shallow Comparison means ?
 * Ans : Shallow comparison means just comparing from above , not going much nested deeper
 * or just using '===' for comparison thing , So if your state or
 * prop object implements some complex nesting of Data Strucutre inside it
 * then changes in it at depth might not be visible to this Comparison method .
 *
 *
 * 2. Can you write other methods inside render method body , before return statement ?
 * Ans : https://stackoverflow.com/a/50403824/14439701
 * What I Think Is : calling functions , expression inside render() method will lead to performance issues
 * because , render is the time when code and calculations are done and now render method is running the engine to
 * display react elements returned . Now in between it, u are also running functions .
 */
