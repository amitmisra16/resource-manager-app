import React from "react";
import "./login.css";
import bootstraplogo from "../../assets/images/bootstrap-logo.svg";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputEmail: "", password: "", rememberMe: false };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this);
  }

  handleSubmit(event) {
    // alert("Input: " + this.state.inputEmail + " and Password: " + this.state.password + " RememberMe: " + this.state.rememberMe)
    this.props.onLogin(
      this.state.inputEmail,
      this.state.password,
      this.state.rememberMe
    );
  }

  handleEmailChange(event) {
    this.setState({ inputEmail: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleRememberMeChange(event) {
    this.setState({ rememberMe: event.target.checked });
  }

  render() {
    return (
      <div className="text-center">
        <main className="form-signin">
          <form>
            <img
              className="mb-4"
              src={bootstraplogo}
              alt=""
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
            <label htmlFor="inputEmail" className="visually-hidden">
              Email address
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              onChange={this.handleEmailChange}
            />
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              placeholder="Password"
              required
              onChange={this.handlePasswordChange}
            />
            <div className="checkbox mb-3">
              <label>
                <input
                  type="checkbox"
                  value="remember-me"
                  onClick={this.handleRememberMeChange}
                />{" "}
                Remember me
              </label>
            </div>
            <button
              className="w-100 btn btn-lg btn-primary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Sign in
            </button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2020</p>
          </form>
        </main>
      </div>
    );
  }
}

export default Login;
