import React from "react";

// IMP : Does `this` works differently in React ? because it comes into play without invoking a execution function ? 


class Foo extends React.Component {
  constructor(props) {
    super(props);

    // Binding handleClick function to this Foo object
    this.handleClik = this.handleClick.bind(this)
  }

  handleClick(event) {
    // Before binding this log returned undefined.Because this function handleClick , without binding will be 
    // considered out of Foo object , which you can log by simply logging `this` . So after binding done 
    // the Foo object shows that handleClick is also part of this Foo object . So it can be used now . 
    
    console.log(this); // undefined
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        Click Me 
      </button>
    );
  }
}

export default Foo;
