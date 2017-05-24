import React, { Component } from "react";
import "./GameCard.css";

import RaisedButton from "material-ui/RaisedButton";
import { getEmblem } from "../utils/GetLogo";
import { Link } from "react-router-dom";
import Avatar from "material-ui/Avatar";
import Paper from "material-ui/Paper";

class GameCard extends Component {
  render() {
    const { name, status, teamA, teamB } = this.props;
    return (
      <div>
        <Paper className="PaperStyle" zDepth={1}>
          <div className="teams">
            <div className="teamA">
              <Avatar
                className="Avatar"
                src={getEmblem(teamA)}
                backgroundColor={"white"}
              />
            </div>
            <div className="AtStyle">
              AT
            </div>
            <div className="teamB">
              <Avatar
                className="Avatar"
                src={getEmblem(teamB)}
                backgroundColor={"white"}
              />
            </div>
          </div>
          <div className="TeamName">
            {name}
          </div>
          <div className="TeamStatus">
            {status}
          </div>
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
