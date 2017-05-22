import React, { Component } from "react";
import PropTypes from "prop-types";

import Drawer from "material-ui/Drawer";
import RaisedButton from "material-ui/RaisedButton";

import DrawerItem from "./DrawerItem";

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
        <Drawer>
          {games.map(game => (
            <DrawerItem
              teamA={game.home_team_alias}
              teamB={game.away_team_alias}
              status={game.status}
            />
          ))}
        </Drawer>
      </div>
    );
  }
}
