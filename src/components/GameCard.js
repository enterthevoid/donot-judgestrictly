import React, { Component } from "react";
import PropTypes from "prop-types";

import { Card, CardTitle } from "material-ui/Card";
import RaisedButton from "material-ui/RaisedButton";
import { getEmblem } from "../utils/GetLogo";
import { Link } from "react-router-dom";
import Avatar from "material-ui/Avatar";

const styles = {
  teams: {
    display: "flex",
    justifyContent: "center",
    height: 130,
    backgroundColor: "#FFFDE7"
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
    padding: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#FFFDE7",
    height: 70,
    fontFamily: "Impact"
  },
  AtStyle: {
    alignItems: "center",
    display: "flex",
    fontFamily: "Impact",
    fontSize: 40
  },
  AvatarStyles: {
    width: 120,
    height: 120,
    marginTop: 5,
    backgroundColor: "#FFFDE7"
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
      <div>
        <Card
          style={{
            width: 350,
            marginTop: 20,
            height: 235
          }}
        >
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
            title={title}
            subtitle={status}
            style={styles.titleStyle}
          />
          <Link className="Link" to="/spoterscreen">
            <RaisedButton
              href="#"
              label="MONITOR"
              backgroundColor="#FFCF00"
              fullWidth={true}
            />
          </Link>
        </Card>
      </div>
    );
  }
}

export default GameCard;
