import React, { Component } from "react";
import "./dashboard.css";

class Dashboard extends Component {
  componentDidMount() {
    this.props.onNavSelection("Dashboard");
  }
  render() {
    return <h2 className="h2">Dashboard</h2>;
  }
}

export default Dashboard;
