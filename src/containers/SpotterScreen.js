import React, { Component } from "react";
import ReactPlayer from "react-player";
import games from "../assets/games";
import PropTypes from "prop-types";

import AppBar from "../components/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import Subheader from "material-ui/Subheader";
import { Tabs, Tab } from "material-ui/Tabs";

import PlayDescription from "../components/PlayDescription";

const RootStyles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  margin: 5
};
const ContentStyles = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  margin: 5
};

const LeftSideStyle = {
  display: "flex",
  flexDirection: "column",
  width: "auto"
};
const PlayerStyles = {
  display: "flex"
};
const StartEndSitStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  width: 800
};
const PaperStyle = {
  display: "flex",
  height: 70,
  width: 300,
  margin: 20,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row"
};

const RightSideStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "	flex-start",
  width: "auto"
};
const PendingStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexDirection: "row",
  height: 45,
  fontFamily: "Impact",
  fontSize: 20,
  margin: 5
};
const HeadDiv = {
  display: "flex",
  width: 470,
  height: 500,
  margin: 5
};
const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400
  }
};

export default class SpotterScreen extends Component {
  static propTypes = {
    quarter: PropTypes.number,
    panding: PropTypes.number,
    status: PropTypes.string,
    teamA: PropTypes.string.isRequired,
    teamB: PropTypes.string.isRequired,
    name: PropTypes.string
  };
  render() {
    return (
      <div style={RootStyles}>
        <AppBar />
        <div style={ContentStyles}>
          <div style={LeftSideStyle}>
            <Paper style={PlayerStyles} zDepth={4}>
              <ReactPlayer
                margin={10}
                width={800}
                height={450}
                url="https://www.youtube.com/watch?v=F8tnJZklzXE"
              />
            </Paper>
            <div style={StartEndSitStyle}>
              <Paper style={PaperStyle} zDepth={4}>
                <Subheader>StartSitStyle</Subheader>
                ATL 1st & 10 @ ATL 38
              </Paper>
              <Paper style={PaperStyle} zDepth={4}>
                <Subheader>EndSitStyle</Subheader>
                ATL 1st & 10 @ NE 38
              </Paper>
            </div>
          </div>
          <div style={RightSideStyle}>
            <Paper style={PendingStyle} zDepth={4}>
              700 Plays Pending
              <RaisedButton
                label="Recall Last Play"
                backgroundColor={"#FFCF00"}
                margin="3"
              />
            </Paper>
            <Paper style={HeadDiv} zDepth={4}>

              <Tabs>
                <Tab label="Play Description">
                  <div>
                    <PlayDescription />
                  </div>
                </Tab>
                <Tab label="Scoring">
                  <div>
                    <h2 style={styles.headline}>Tab Two</h2>
                    <p>
                      This is another example tab.
                    </p>
                  </div>
                </Tab>
                <Tab label="Turnover">
                  <div>
                    <h2 style={styles.headline}>Tab Three</h2>
                    <p>
                      This is a third example tab.
                    </p>
                  </div>
                </Tab>
              </Tabs>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
