import React, { Component } from "react";
import "./computers.css";

class Computers extends Component {
  componentDidMount() {
    this.props.onNavSelection("Computers");
  }

  render() {
    return <h2 className="h2">Computers &amp; Tablets</h2>;
  }
}

export default Computers;
