import React, { Component } from "react";
import "./reports.css";

class Reports extends Component {
  componentDidMount() {
    this.props.onNavSelection("Reports");
  }

  render() {
    return <h2 className="h2">Reports</h2>;
  }
}

export default Reports;
