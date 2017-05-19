import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { GamesScreen, SpotterScreen, LoginScreen } from "./containers";
import { grey900 } from "material-ui/styles/colors";
import getMuiTheme from "material-ui/styles/getMuiTheme";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: grey900
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Router>
            <div>
              <Route path="/login" component={LoginScreen} />
              <Route path="/gamesscreen" component={GamesScreen} />
              <Route path="/spoterscreen" component={SpotterScreen} />
            </div>
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
