import React, { Component } from "react";
import "../../css/App.css";

class Heading extends React.Component {
  render() {
    return (
      <div>
        <h2 className="heading"> {this.props.header} </h2>
      </div>
    );
  }
}

export default Heading;
