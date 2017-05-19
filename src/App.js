import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginScreen from "./containers/LoginScreen";
import GamesScreen from "./containers/GamesScreen";
import SpotterScreen from "./containers/SpotterScreen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <ul>
              <li><Link to="/">Login</Link></li>
              <li><Link to="/gamesscreen">GamesScreen</Link></li>
              <li>
                <Link to="/spoterscreen">SpotterScreen</Link>
              </li>
            </ul>
            <Route path="/" component={LoginScreen} />
            <Route path="/gamesscreen" component={GamesScreen} />
            <Route path="/spoterscreen" component={SpotterScreen} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
