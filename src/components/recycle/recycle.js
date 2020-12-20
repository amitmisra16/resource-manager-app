import React, { Component } from "react";
import "./recycle.css";

class Recycle extends Component {
  componentDidMount() {
    this.props.onNavSelection("Recycle");
  }

  render() {
    return <h2 className="h2">Recycle</h2>;
  }
}

export default Recycle;
