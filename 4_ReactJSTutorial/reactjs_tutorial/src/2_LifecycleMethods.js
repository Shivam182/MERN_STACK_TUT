import React from "react";
import HelloWorld from "./1_HelloWorld";

class LifeCycle_Methods extends React.Component {
  // What is super ? why it won't work without super()  ?
  // Ans: we call super() inside constructor , to call parent class's constructor . In this case it is React.Component
  // It is mainly useful in those cases when we want to inherit some methods or data from our parent class .
  // In this case we did it , as we have access to many methods provided by React.Component class in React.
  constructor() {
    super();
    this.state = {
      name: "shivam",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: "shivam yadav",
      });
    }, 2000);
  }

  componentDidUpdate() {
    console.log("from update method ");
  }

  render() {
    return (
      <div>
        <h1>Hello my name is {this.state.name}</h1>
      </div>
    );
  }

  componentWillUnmount() {
    console.log("i am always at last ......");
  }
}

export default LifeCycle_Methods;

/**
 * Notes :-
 *
 * 1. What are lifeCycle Methods ?
 * Ans : These are built in React methods that work during the time when a Component is added to DOM Tree, till It is removed
 * From the DOM Tree . Most Importat lifecycle method is : 'render()' method , that is responsible for displaying the
 * content to a web page . Other LifeCycle Methods are as follows :-
 * (a.)---> componentDidMount() = This method works at first when the rendering has been completed . Common tasks that
 * can be enlisted in this method are :
 * 1.) Calls to APIs and servers {as they they much time for connectivity}
 * 2.) Adding event listeners for specific functionality , like global OR window events , that must run despite of any button press
 * 3.) setTimeout & setIntervals callacks {as many time we want them to start timer as soon as component loads , so to put them here is best place }
 *
 * (b.)---> componentDidUpdate() = This method is called when the component is updated , Also this method is vulnerable
 * to infinite loop , as if we update the component from this method , so on every update this method is called . WHile
 * this method can be useful in situations like when a user updates his Info , then component is updated , hence this method
 * called to again fetch details of user to , change display contents of the website .
 *
 * (c.)---> componentWillUnmount() = This method is generally used for cleanup , which is necessary to free up our resources
 * for faster , and effective functionality .
 *
 */
