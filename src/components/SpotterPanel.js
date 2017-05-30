import React, { Component } from "react";
import Situations from "../components/Situations";
import YardsGained from "../components/YardsGained";
import PlayStarted from "../components/PlayStarted";
import PlayTypeRadio from "../components/PlayTypeRadio";
import ScoringRadio from "../components/ScoringRadio";
import TurnoverRadio from "../components/TurnoverRadio";
import "./styles/SpotterPanel.css";

import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  height: 52,
  width: 100,
  backgroundColor: "#F9F9F9",
  marginLeft: 25
};

export default class SpotterPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      score: "NONE",
      turnover: "NONE",
      play: "NONE"
    };
  }
  handleOptionChange(event) {
    switch (event.target.name) {
      case "PlayType":
        this.setState({ play: event.target.value });
        break;
      case "Turnover":
        this.setState({ turnover: event.target.value });
        break;
      case "scoring":
        this.setState({ score: event.target.value });
        break;
      default:
        break;
    }
  }

  renderText() {
    var state = this.state;
    var play;
    var score;
    var turnover;
    var end_clock = " 7:32 ";
    var start_poss = " NE ";
    var end_poss = " NE ";

    switch (state.play) {
      case "NONE":
        play = " ";
        break;
      case "PASS":
        play = " pass for";
        break;
      case "RUSH":
        play = " rush for";
        break;
      case "PENALTY":
        play = " Penalty enforced for";
        break;
      case "PUNT":
        play = " punt returned by";
        break;
      case "FIELDGOAL":
        play = " field goal is GOOD!";
        break;
      case "KICKOFF":
        play = " kickoff returned to the";
        break;
      case "EXTRA_POINT":
        play = " extra point is GOOD!";
        break;
      case "SACK":
        play = " is sacked for a loss of";
        break;
    }
    switch (state.score) {
      case "NONE":
        score = " ";
        break;
      case "OFF_TOUCHDOWN":
        score = ", TOUCHDOWN!";
        break;
      case "DEF_TOUCHDOWN":
        score = " and returned for a TOUCHDOWN!";
        break;
      case "ST_TOUCHDOWN":
        score = " for a TOUCHDOWN!";
        break;
      case "FIELDGOAL":
        score = " field goal attempt FAILED!";
        break;
      case "EXTRA_POINT":
        score = " extra point is GOOD!";
        break;
      case "TWOPT_CONVERSION":
        score = ", CONVERSION SUCCESSFUL!";
        break;
      case "SAFETY":
        score = ", SAFETY!";
    }
    switch (state.turnover) {
      case "NONE":
        turnover = " ";
        break;
      case "FUMBLE":
        if ("FUMBLE") turnover = " fumble recovered by ";
        break;
      case "INTERCEPTION":
        turnover = " pass intercepted by ";
        break;
      case "ON_DOWNS":
        turnover = " turned the ball over on downs.";
        break;
    }
    return end_clock + ": " + play + turnover + score;
  }

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
            <PlayTypeRadio
              currentState={this.state.play}
              handleOptionChange={event => this.handleOptionChange(event)}
            />
            <ScoringRadio
              currentState={this.state.score}
              handleOptionChange={event => this.handleOptionChange(event)}
            />
            <TurnoverRadio
              currentState={this.state.turnover}
              handleOptionChange={event => this.handleOptionChange(event)}
            />
          </div>
          <div className="Description">
            <p className="DescriptionTitle">DESCRIPTION :</p>
            <form>
              <textarea rows={3} value={this.renderText()} className="Input" />
            </form>
          </div>
          <div className="FormButtons">
            <RaisedButton label="Reset" style={style} type="reset" />
            <RaisedButton label="Skip" style={style} />
            <RaisedButton
              type="submit"
              label="Save Play"
              style={{ marginLeft: 49, height: 52, width: 145 }}
              backgroundColor="#FFCF00"
            />
          </div>
        </Paper>
      </div>
    );
  }
}
