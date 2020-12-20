import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Home as FeatherHome,
  ShoppingCart,
  Users as UsersIcon,
  Layers,
  BarChart2,
  Tablet,
  LogOut,
  Bell,
  User,
  FilePlus,
  RefreshCcw,
  Trash,
  ThumbsDown,
} from "react-feather";

import Orders from "../orders/orders.js";
import Computers from "../computers/computers.js";
import Components from "../components/components.js";
import Recycle from "../recycle/recycle.js";
import TrashBin from "../trash_bin/trashbin.js";
import Reports from "../reports/reports.js";
import Integrations from "../integrations/integrations.js";
import Users from "../users/users.js";
import Dashboard from "../dashboard/dashboard.js";

import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeNav: "Dashboard" };
    this.handleNavChange = this.handleNavChange.bind(this);
  }

  handleNavChange(navName) {
    this.setState({ activeNav: navName });
  }

  render() {
    const activeNav = this.state.activeNav;
    return (
      <Router>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="#">
            <strong>e-Device Manager</strong>
          </Link>
          <button
            className="navbar-toggler position-absolute d-md-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-targe
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input
            className="form-control form-control-dark px-3"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Link className="nav-link" to="/notifications">
                <Bell />
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Link className="nav-link" to="/profile">
                <User />
                &nbsp;{this.props.userLoggedIn}!
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <Link className="nav-link" to="/logout">
                <LogOut />
                &nbsp;Sign Out
              </Link>
            </li>
          </ul>
        </header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2">
              <nav
                id="sidebarMenu"
                className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse"
              >
                <div className="position-sticky pt-3">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      {activeNav === "Dashboard" ? (
                        <Link className="nav-link active" to="/">
                          <FeatherHome />
                          &nbsp;&nbsp; Dashboard
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/">
                          <FeatherHome />
                          &nbsp;&nbsp; Dashboard
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {activeNav === "Orders" ? (
                        <Link className="nav-link active" to="/orders">
                          <ShoppingCart />
                          &nbsp;&nbsp; Orders
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/orders">
                          <ShoppingCart />
                          &nbsp;&nbsp; Orders
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {activeNav === "Computers" ? (
                        <Link className="nav-link active" to="/computers">
                          <Tablet />
                          &nbsp;&nbsp; Computers &amp; Tablets
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/computers">
                          <Tablet />
                          &nbsp;&nbsp; Computers &amp; Tablets
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {activeNav === "Components" ? (
                        <Link className="nav-link active" to="/components">
                          <FilePlus />
                          &nbsp;&nbsp; Components
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/components">
                          <FilePlus />
                          &nbsp;&nbsp; Components
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {activeNav === "Users" ? (
                        <Link className="nav-link active" to="/users">
                          <UsersIcon></UsersIcon>&nbsp;&nbsp; Users
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/users">
                          <UsersIcon></UsersIcon>&nbsp;&nbsp; Users
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {activeNav === "Recycle" ? (
                        <Link className="nav-link active" to="/recycle">
                          <RefreshCcw />
                          &nbsp;&nbsp; Recycle
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/recycle">
                          <RefreshCcw />
                          &nbsp;&nbsp; Recycle
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {activeNav === "TrashBin" ? (
                        <Link className="nav-link active" to="/bin">
                          <Trash />
                          &nbsp;&nbsp; Bin
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/bin">
                          <Trash />
                          &nbsp;&nbsp; Bin
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {activeNav === "Reports" ? (
                        <Link className="nav-link active" to="/reports">
                          <BarChart2 />
                          &nbsp;&nbsp; Reports
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/reports">
                          <BarChart2 />
                          &nbsp;&nbsp; Reports
                        </Link>
                      )}
                    </li>
                    <li className="nav-item">
                      {activeNav === "Integrations" ? (
                        <Link className="nav-link active" to="/integrations">
                          <Layers />
                          &nbsp;&nbsp; Integrations
                        </Link>
                      ) : (
                        <Link className="nav-link" to="/integrations">
                          <Layers />
                          &nbsp;&nbsp; Integrations
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="col">
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <Switch>
                    <Route path="/orders">
                      <Orders onNavSelection={this.handleNavChange} />
                    </Route>
                    <Route path="/computers">
                      <Computers onNavSelection={this.handleNavChange} />
                    </Route>
                    <Route path="/components">
                      <Components onNavSelection={this.handleNavChange} />
                    </Route>
                    <Route path="/recycle">
                      <Recycle onNavSelection={this.handleNavChange} />
                    </Route>
                    <Route path="/bin">
                      <TrashBin onNavSelection={this.handleNavChange} />
                    </Route>
                    <Route path="/reports">
                      <Reports onNavSelection={this.handleNavChange} />
                    </Route>
                    <Route path="/integrations">
                      <Integrations onNavSelection={this.handleNavChange} />
                    </Route>
                    <Route path="/users">
                      <Users onNavSelection={this.handleNavChange} />
                    </Route>
                    <Route path="/">
                      <Dashboard onNavSelection={this.handleNavChange} />
                    </Route>
                  </Switch>
                </div>
              </main>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default Home;
