import React, { Component } from "react";
import "./users.css";

class Users extends Component {
  componentDidMount() {
    this.props.onNavSelection("Users");
  }

  render() {
    return <h2 className="h2">Users</h2>;
  }
}

export default Users;
