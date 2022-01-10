import React from "react";

class Components_Props extends React.Component {
  // It would work even without props argument written below !! Then What does it do ??
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>
          Welcome !! Components & Props Page !!
          <br /> This is my name :{this.props.userName} <br />
          This is my email: {this.props.eMail}
        </h1>
      </div>
    );
  }
}

const Element = (
  <Components_Props userName={"shivam"} eMail={"shivam@jkjnd541.com"} />
);

export default Element;
