import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Screen1 = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const Screen2 = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Screen3 = () => (
  <div>
    <h2>RockLegent</h2>
  </div>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li>
                <Link to="/yoyorapismylifestyleurbancitylive">Topics</Link>
              </li>
            </ul>

            <Route path="/" component={Screen1} />
            <Route path="/about" component={Screen2} />
            <Route
              path="/yoyorapismylifestyleurbancitylive"
              component={Screen3}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
