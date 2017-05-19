import React, { Component } from "react";
import PropTypes from "prop-types";

import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import RaisedButton from "material-ui/RaisedButton";

import DrawerItem from "./DrawerItem.js";

import games from "../assets/games";

export default class AppDrawer extends Component {
  static propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
    teamA: PropTypes.string,
    teamB: PropTypes.string
  };

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <RaisedButton label="Toggle Drawer" onTouchTap={this.handleToggle} />

      </div>
    );
  }
}
