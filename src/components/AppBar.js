import React from "react";
import AppBar from "material-ui/AppBar";
import { Link } from "react-router-dom";
import "./AppBar.css";


const AppBarMain = () => (
  <AppBar>
    <div className="LinkStyle">
      <Link className="Link" to="/login">Login</Link>
      <Link className="Link" to="/gamesscreen">Games</Link>
      <Link className="Link" to="/spoterscreen">Spotter</Link>
    </div>
  </AppBar>
);

export default AppBarMain;
