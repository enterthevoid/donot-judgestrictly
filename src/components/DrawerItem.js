import React, { Component } from "react";
import PropTypes from "prop-types";

import { getEmblem } from "../utils/GetLogo";
import RaisedButton from "material-ui/RaisedButton";

const ButtonStyle = {
  height: 45
};

const styles = {
  teams: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 48,
    width: 160
  },
  teamA: {
    width: 40,
    alignContent: "center"
  },
  teamB: {
    width: 40,
    alignContent: "center"
  }
};
const AvatarStyle = {
  width: 30,
  margin: 5,
  height: 30
};
const TeamNameStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  height: 48,
  fontFamily: "Impact",
  fontSize: 15,
  width: 35
};
const RootStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  height: 48,
  border: "1px solid",
  margin: 1
};
const QuarterStyle = {
  height: 48,
  width: 50,
  backgroundColor: "#F3F3F3",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};
const PendingStyle = {
  height: 48,
  width: 50,
  backgroundColor: "#D8D8D8",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};
const PregameStyles = {
  height: 48,
  width: 100,
  backgroundColor: "#F3F3F3",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
};

class DrawerItem extends Component {
  static propTypes = {
    quarter: PropTypes.number,
    panding: PropTypes.number,
    status: PropTypes.string,
    teamA: PropTypes.string.isRequired,
    teamB: PropTypes.string.isRequired
  };

  render() {
    const { quarter, pending, status, teamA, teamB } = this.props;
    return (
      <RaisedButton fullWidth={true} style={ButtonStyle}>
        <div style={RootStyles}>
          <div style={styles.teams}>
            <div style={styles.teamA}>
              <img style={AvatarStyle} src={getEmblem(teamA)} />
            </div>
            <div style={TeamNameStyle}>
              {teamA}
            </div>
            <div style={styles.teamB}>
              <img style={AvatarStyle} src={getEmblem(teamB)} />
            </div>
            <div style={TeamNameStyle}>
              {teamB}
            </div>
          </div>
          <div>
            {status
              ? <div style={PregameStyles}>
                  {status}
                </div>
              : <div style={RootStyles}>
                  <div style={QuarterStyle}>
                    {quarter}
                  </div>
                  <div style={PendingStyle}>
                    {pending}
                  </div>
                </div>}
          </div>
        </div>
      </RaisedButton>
    );
  }
}

export default DrawerItem;
