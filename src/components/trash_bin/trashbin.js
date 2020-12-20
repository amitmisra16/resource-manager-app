import React, { Component } from "react";
import "./trashbin.css";

class TrashBin extends Component {
  componentDidMount() {
    this.props.onNavSelection("TrashBin");
  }

  render() {
    return <h2 className="h2">Bin</h2>;
  }
}

export default TrashBin;
