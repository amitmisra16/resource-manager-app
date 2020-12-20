import React, { Component } from "react";
import "./components.css";

class Components extends Component {
  componentDidMount() {
    this.props.onNavSelection("Components");
  }
  render() {
    return <h2 className="h2">Components</h2>;
  }
}

export default Components;
