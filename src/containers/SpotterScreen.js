import React, { Component } from "react";
import "./SpotterScreen.css";
import PlaysLog from "../components/PlaysLog";
import SpotterPanel from "../components/SpotterPanel";
import SpotterHead from "../components/SpotterHead";

import Toggle from "material-ui/Toggle";
import Paper from "material-ui/Paper";

const g_Plays = [
  { key: "zalu[a]", phase: "QUARTER 1", clock: "10:55", processed: false },
  { key: "zalu[a]2", phase: "QUARTER 2", clock: "11:55", processed: false },
  { key: "zalu[a]3", phase: "QUARTER 3", clock: "12:55", processed: true },
  { key: "zalu[a]4", phase: "QUARTER 4", clock: "13:55", processed: true },
  { key: "zalu[a]5", phase: "PREGAME", clock: "14:55", processed: true },
  { key: "zalu[a]6", phase: "HALFTIME", clock: "15:55", processed: true },
  { key: "zalu[a]7", phase: "OVERTIME", clock: "16:55", processed: true },
  { key: "zalu[a]8", phase: "OVE", clock: "16:55", processed: true }
];

const styles = {
  thumbOff: {
    backgroundColor: "#F2F2F2"
  },
  trackOff: {
    backgroundColor: "#373737"
  },
  thumbSwitched: {
    backgroundColor: "#F2F2F2"
  },
  trackSwitched: {
    backgroundColor: "#FFCF00"
  },
  labelStyle: {
    color: "#F2F2F2"
  }
};

export default class SpotterScreen extends Component {
  render() {
    return (
      <div className="ContainerSpotter">

        <SpotterHead />
        <div className="BackGrount">
          <div className="PlayerField">
            <div>
              <Paper
                className="Player"
                style={{ backgroundColor: "#373737" }}
              />
            </div>
            <div className="Toggle">
              <Toggle
                label="Advertisement"
                style={styles}
                thumbStyle={styles.thumbOff}
                trackStyle={styles.trackOff}
                thumbSwitchedStyle={styles.thumbSwitched}
                trackSwitchedStyle={styles.trackSwitched}
                labelStyle={{ color: "#F2F2F2" }}
              />
            </div>
          </div>
          <div>
            <PlaysLog plays={g_Plays} />
          </div>
          <div>
            <SpotterPanel />
          </div>
        </div>
      </div>
    );
  }
}
