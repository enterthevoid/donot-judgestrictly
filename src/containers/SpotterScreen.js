import React, { Component } from "react";
import "./SpotterScreen.css";

import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import { Tabs, Tab } from "material-ui/Tabs";
import TextField from "material-ui/TextField";

import AppBar from "../components/AppBar";
import PlayDescription from "../components/PlayDescription";

export default class SpotterScreen extends Component {
  render() {
    return (
      <div className="Container">
        <AppBar />
        <div className="Root">
          <div className="LeftSide">
            <div className="Player" />
            <Paper className="ButtonsLeft">
              <RaisedButton label="Save Play" primary={true} />
              <RaisedButton label="Reset" primary={true} />
              <RaisedButton label="Skip Play" />
            </Paper>
          </div>
          <div className="RightSide">
            <Paper className="Pending">
              <h3 className="headline"> 700 Plays Pending</h3>
              <RaisedButton
                label="Recall Last Play"
                backgroundColor={"#FFCF00"}
                margin="3"
              />
            </Paper>
            <div className="StartEnd">
              <Paper className="StartEndPaper">
                <h3 className="Sit">Start Situation</h3>
                <TextField style={{ height: "30", width: "130" }} />
              </Paper>
              <Paper className="StartEndPaper">
                <h3 className="Sit">End Situation</h3>
                <TextField style={{ height: "30", width: "130" }} />
              </Paper>
            </div>
            <Paper>
              <Tabs className="Tab">
                <Tab label="Current Event">
                  <PlayDescription />
                </Tab>
                <Tab label="Pending Events(25)">
                  <h2 className="headline">Tab Two</h2>
                  <p>
                    This is another example tab.
                  </p>
                </Tab>
              </Tabs>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
