import React, { Component } from "react";
import PropTypes from "prop-types";

import { CardTitle } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { getEmblem } from "../utils/GetLogo";
import { Link } from "react-router-dom";
import Avatar from "material-ui/Avatar";
import Paper from "material-ui/Paper";

const styles = {
  teams: {
    display: "flex",
    justifyContent: "center",
    height: 130,
    backgroundColor: "#F8F8F8"
  },
  teamA: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  teamB: {
    flex: 1,
    display: "flex",
    justifyContent: "center"
  },
  titleStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    backgroundColor: "#F8F8F8",
    height: 45,
    fontFamily: "Impact",
    fontSize: 20,
    padding: 3
  },
  AtStyle: {
    alignItems: "center",
    display: "flex",
    fontFamily: "Impact",
    fontSize: 35
  },
  AvatarStyles: {
    width: 120,
    height: 120,
    marginTop: 5,
    backgroundColor: "#F8F8F8"
  },
  PaperStyle: {
    height: 190,
    width: 340,
    margin: 40,
    zDepth: 5
  }
};

class GameCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    status: PropTypes.string,
    teamA: PropTypes.string,
    teamB: PropTypes.string
  };

  render() {
    const { name, status, teamA, teamB } = this.props;
    return (
      <div>
        <Paper style={styles.PaperStyle} zDepth="5">
          <div style={styles.teams}>
            <div style={styles.teamA}>
              <Avatar style={styles.AvatarStyles} src={getEmblem(teamA)} />
            </div>
            <div style={styles.AtStyle}>
              AT
            </div>
            <div style={styles.teamB}>
              <Avatar style={styles.AvatarStyles} src={getEmblem(teamB)} />
            </div>
          </div>
          <CardTitle
            title={name}
            subtitle={status}
            style={styles.titleStyle}
            subtitleStyle={{
              fontSize: 14
            }}
            titleStyle={styles.titleStyle}
          />
          <Link className="Link" to="/spoterscreen">
            <RaisedButton
              href="#"
              label="MONITOR"
              backgroundColor="#FFCF00"
              fullWidth={true}
            />
          </Link>
        </Paper>
      </div>
    );
  }
}

export default GameCard;
