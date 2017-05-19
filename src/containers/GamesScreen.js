import React, { Component } from "react";

import GameCard from "../components/GameCard";
import AppBar from "../components/AppBar";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    margin: 30
  }
};

class GamesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    return (
      <div className="container">
        <AppBar />
        <div style={styles.root}>
          <GameCard
            title="Headline Example"
            status="Caption Example"
            teamA="ari"
            teamB="sf"
          />
          <GameCard
            title="Headline Example"
            status="Caption Example"
            teamA="sea"
            teamB="pit"
          />
          <GameCard
            title="Headline Example"
            status="Caption Example"
            teamA="cin"
            teamB="gb"
          />
          <GameCard
            title="Headline Example"
            status="Caption Example"
            teamA="tb"
            teamB="chi"
          />
          <GameCard
            title="Headline Example"
            status="Caption Example"
            teamA="tb"
            teamB="ne"
          />
          <GameCard
            title="Headline Example"
            status="Caption Example"
            teamA="no"
            teamB="sf"
          />
        </div>
      </div>
    );
  }
}

export default GamesScreen;
