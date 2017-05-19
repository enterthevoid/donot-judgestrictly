import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, CardTitle } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { getEmblem } from "../utils/GetLogo";

const titleStyle = {
  padding: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column"
};
const styles = {
  teams: {
    display: "flex",
    height: 130
  },
  teamA: {
    flex: 1
  },
  teamB: {
    flex: 1
  }
};

class GameCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    status: PropTypes.string,
    teamA: PropTypes.string,
    teamB: PropTypes.string
  };

  render() {
    const { title, status, teamA, teamB } = this.props;
    return (
      <Card
        style={{
          width: 350,
          marginTop: 30,
          height: 220
        }}
      >
        <div style={styles.teams}>
          <div style={styles.teamA}>
            <img style={{ width: 130 }} src={getEmblem(teamA)} />
          </div>
          <div style={styles.teamB}>
            <img style={{ width: 130 }} src={getEmblem(teamB)} />
          </div>
        </div>
        <CardTitle title={title} subtitle={status} style={titleStyle} />
        <RaisedButton
          href="#"
          label="MONITOR"
          backgroundColor="#FFCF00"
          fullWidth={true}
        />
      </Card>
    );
  }
}

export default GameCard;
