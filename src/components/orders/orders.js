import React, { Component } from "react";
import "./orders.css";

class Orders extends Component {
  componentDidMount() {
    this.props.onNavSelection("Orders");
  }

  render() {
    return <h2 className="h2">Orders</h2>;
  }
}

export default Orders;
