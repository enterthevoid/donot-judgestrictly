import React, { Component } from "react";
import "./SpotterScreen.css";
import PlaysLog from "../components/playLog/PlaysLog";
import Form from "../components/form/";
import SpotterHead from "../components/SpotterHead";
import gPlays from "../assets/plays.json";

import Toggle from "material-ui/Toggle";
import Paper from "material-ui/Paper";

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
  constructor(props) {
    super(props);
    this.state = {
      selectedPlay: gPlays[0]
    };
  }

  handlePlayChange(play) {
    this.setState({ selectedPlay: play });
  }
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
            <PlaysLog
              onChange={play => {
                this.handlePlayChange(play);
              }}
              plays={gPlays}
              selected={this.state.selectedPlay}
            />
          </div>
          <div>
            <Form play={this.state.selectedPlay} />
          </div>
        </div>
      </div>
    );
  }
}
