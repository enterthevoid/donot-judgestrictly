import React, { Component } from "react";
import "./styles/SpotterPanel.css";
import Situations from "../components/Situations";
import YardsGained from "../components/YardsGained";
import PlayStarted from "../components/PlayStarted";
import PlayTypeRadio from "../components/PlayTypeRadio";
import ScoringRadio from "../components/ScoringRadio";
import TurnoverRadio from "../components/TurnoverRadio";

import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  height: 52,
  width: 100,
  backgroundColor: "#F9F9F9",
  marginLeft: 25
};

export default class SpotterPanel extends Component {
  render() {
    return (
      <div className="SpotterContainer">
        <Paper className="SpotterRoot">
          <div className="TopLine" />
          <Situations />
          <div className="YardsnTime">
            <YardsGained />
            <PlayStarted />
          </div>
          <div className="RadioBox">
            <PlayTypeRadio />
            <ScoringRadio />
            <TurnoverRadio />
          </div>
          <div className="Input">
            <p className="InputTitle">DESCRIPTION :</p>
            <form onSubmit={this.handleSubmit}>
              <textarea />
            </form>
          </div>
          <div className="FormButtons">
            <RaisedButton label="Reset" style={style} type="reset" />
            <RaisedButton label="Skip" style={style} />
            <form onSubmit={this.handleFormSubmit}>
              <RaisedButton
                type="submit"
                label="Save Play"
                style={{ marginLeft: 49, height: 52, width: 145 }}
                backgroundColor="#FFCF00"
              />
            </form>
          </div>
        </Paper>
      </div>
    );
  }
}
