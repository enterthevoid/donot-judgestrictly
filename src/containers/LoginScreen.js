import React, { Component } from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

import "./LoginScreen.css";

export default class LoginScreen extends Component {
  render() {
    return (
      <div>
        <div className="RootStyle">
          <img src={Logo} alt="Logo" className="LogoStyle" />
          <br />
          <TextField hintText="Username Field" floatingLabelText="Username" />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
          />
          <Link to="/gamesscreen">
            <RaisedButton
              className="ButtonStyle"
              label="Log in"
              backgroundColor="#FFCF00"
            />
          </Link>
        </div>
      </div>
    );
  }
}
