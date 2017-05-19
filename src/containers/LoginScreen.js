import React, { Component } from "react";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Logo from "../Logo.png";
import { Link } from "react-router-dom";

const logoStyle = {
  margin: "70px 0 20px 0",
  width: "300"
};

const buttonStyle = {
  width: "255",
  margin: "20"
};

export default class LoginScreen extends Component {
  render() {
    return (
      <div className="container">
        <img id="logo" src={Logo} style={logoStyle} />
        <br />
        <TextField hintText="Username Field" floatingLabelText="Username" />
        <br />
        <TextField
          hintText="Password Field"
          floatingLabelText="Password"
          type="password"
        />
        <br />
        <Link to="/gamesscreen">
          <RaisedButton
            label="Log in"
            style={buttonStyle}
            backgroundColor="#FFCF00"
          />
        </Link>
      </div>
    );
  }
}
