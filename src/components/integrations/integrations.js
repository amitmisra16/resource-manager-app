import React, { Component } from "react";
import "./integrations.css";

class Integrations extends Component {
  componentDidMount() {
    this.props.onNavSelection("Integrations");
  }

  render() {
    return <h2 className="h2">Integrations</h2>;
  }
}

export default Integrations;
