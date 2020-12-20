// import logo from './logo.svg';
import "./App.css";
import Login from "./components/login/login.js";
import Home from "./components/home/home.js";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userLoggedIn: "", rememberMe: false };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(email, password, rememberMe) {
    console.log(
      "Input: " +
        email +
        " and Password: " +
        password +
        " RememberMe: " +
        rememberMe
    );
    this.setState({ userLoggedIn: email, rememberMe: rememberMe });
  }

  render() {
    const userLoggedIn = this.state.userLoggedIn;
    if (userLoggedIn) {
      return <Home userLoggedIn={userLoggedIn} />;
    } else {
      return (
        <div className="App">
          <Login onLogin={this.handleLogin} />
        </div>
      );
    }
  }
}

export default App;
