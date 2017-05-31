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
import Plays from "./Plays.json";

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
      type: "NONE",
      play: Plays.KlPh_ojCToJ6_XTER9E
    };
  }
  handleOptionChange(event) {
    switch (event.target.name) {
      case "PlayType":
        this.setState({ type: event.target.value });
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
    var type;
    var score;
    var turnover;
    var end_clock = " 7:32 ";
    var start_poss = " NE ";
    var end_poss = " NA ";
    var yardsGained = 3;
    var end_location = 49;

    switch (state.type) {
      case "NONE":
        type = " ";
        break;
      case "PASS":
        if ((state.type = "PASS")) {
          type =
            end_poss +
            " pass for " +
            yardsGained +
            " yard" +
            (yardsGained === 1 ? "" : "s");
        } else if (state.score === "OFF_TOUCHDOWN") {
          type = ", TOUCHDOWN!";
        } else if (state.score === "TWOPT_CONVERSION") {
          type = ", CONVERSION SUCCESSFUL!";
        } else if (state.score === "SAFETY") {
          type = ", SAFETY!";
        } else {
          type = " . ";
        }
        break;
      case "RUSH":
        if (state.type === "RUSH") {
          type =
            end_poss +
            " rush for " +
            yardsGained +
            " yard" +
            (yardsGained === 1 ? "" : "s");
        } else if (state.score === "OFF_TOUCHDOWN") {
          type = ", TOUCHDOWN!";
        } else if (state.score === "TWOPT_CONVERSION") {
          type = ", CONVERSION SUCCESSFUL!";
        } else if (state.score === "SAFETY") {
          type = ", SAFETY!";
        } else {
          type = " . ";
        }
        break;
      case "PENALTY":
        type =
          " Penalty enforced for " +
          yardsGained +
          " yard" +
          (yardsGained === 1 ? "" : "s");
        break;
      case "PUNT":
        if (state.score === "ST_TOUCHDOWN") {
          type =
            start_poss + " punt returned by " + end_poss + " for a TOUCHDOWN!";
        } else {
          type = start_poss + " punt returned to the " + end_location + ".";
        }
        break;
      case "TYPE_FIELDGOAL":
        if (state.score === "FIELDGOAL") {
          type = start_poss + " field goal is GOOD!";
        } else {
          type = start_poss + " field goal attempt FAILED!";
        }
        break;
      case "KICKOFF":
        if (state.score === "ST_TOUCHDOWN") {
          type = start_poss + " kickoff returned for a TOUCHDOWN!";
        } else {
          type = start_poss + " kickoff returned to the " + end_location + ".";
        }
        break;
      case "TYPE_EXTRA_POINT":
        if (state.score === "EXTRA_POINT") {
          type = start_poss + " extra point is GOOD!";
        } else {
          type = start_poss + " extra point attempt FAILED!";
        }
        break;
      case "SACK":
        if (state.type === "SACK") {
          type =
            start_poss + " is sacked for a loss of " + Math.abs(yardsGained);
        } else if (state.score === "SAFETY") {
          type = " for a SAFETY!";
        } else {
          type = " . ";
        }
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
      default:
        turnover = "not defined";
        break;
    }
    switch (state.turnover) {
      case "NONE":
        turnover = " ";
        break;
      case "FUMBLE":
        if (state.turnover === "FUMBLE") {
          turnover = start_poss + " fumble recovered by " + end_poss;
        } else if (state.score === "DEF_TOUCHDOWN") {
          turnover = " and returned for a TOUCHDOWN!";
        } else {
          turnover = " . ";
        }
        break;
      case "INTERCEPTION":
        if (state.turnover === "INTERCEPTION") {
          turnover = start_poss + " pass intercepted by " + end_poss;
        } else if (state.score === "DEF_TOUCHDOWN") {
          turnover = " and returned for a TOUCHDOWN!";
        } else {
          turnover = " . ";
        }
        break;
      case "ON_DOWNS":
        turnover = " turned the ball over on downs.";
        break;

      default:
        turnover = "not defined";
        break;
    }
    return end_clock + ":" + type + turnover + score;
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
          <form>
            <div className="RadioBox">
              <PlayTypeRadio
                currentState={this.state.type}
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
                <textarea
                  rows={3}
                  value={this.renderText()}
                  className="Input"
                />
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
          </form>
        </Paper>
      </div>
    );
  }
}
