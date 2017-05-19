import React from "react";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router-dom";
import "./AppBar.css";

const LinkStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: 68,
  width: 350
};

const AppBarMain = () => (
  <AppBar>
    <div style={LinkStyle}>
      <Link to="/login">Login</Link>
      <Link to="/gamesscreen">GamesScreen</Link>
      <Link to="/spoterscreen">SpotterScreen</Link>
    </div>
  </AppBar>
);

export default AppBarMain;
