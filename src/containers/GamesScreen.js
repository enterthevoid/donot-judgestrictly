import React, { Component } from "react";

import GameCard from "../components/GameCard";
import AppBar from "../components/AppBar";
import games from "../assets/games";
import PropTypes from "prop-types";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: 30
  }
};

class GamesScreen extends Component {
  static propTypes = {
    quarter: PropTypes.number,
    panding: PropTypes.number,
    status: PropTypes.string,
    teamA: PropTypes.string.isRequired,
    teamB: PropTypes.string.isRequired,
    name: PropTypes.string
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="container">
        <AppBar />
        <div style={styles.root}>
          {games.map(game => (
            <GameCard
              teamA={game.home_team_alias}
              teamB={game.away_team_alias}
              status={game.status}
              name={game.name}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default GamesScreen;
