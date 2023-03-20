import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import React, { Component } from "react";
import TMSList from "./component/tms-list";
import TMSEdit from "./component/tms-edit";
import TMSCreate from "./component/tms-create";
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h2>Task management system</h2>
        </nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">
                  TMS list
                </Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">
                  TMS Create
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Route path="/" exact component={TMSList} />
      <Route path="/edit/:id" component={TMSEdit} />
      <Route path="/create" component={TMSCreate} />
    </Router>
  );
}

export default App;
