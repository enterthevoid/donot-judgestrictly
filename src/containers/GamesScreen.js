import React, { Component } from "react";

import GameCard from "../components/GameCard";
import AppBar from "../components/AppBar";
import games from "../assets/games";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: 30
  }
};

class GamesScreen extends Component {
  render() {
    return (
      <div className="container">
        <AppBar />
        <div style={styles.root}>
          {games.map(game => (
            <GameCard
              key={game.id}
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
