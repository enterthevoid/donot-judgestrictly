import React, { Component } from "react";
import "../styles/Situations.css";

function shortPhase(phase) {
  switch (phase) {
    case "QUARTER 1":
      return "Q1";
    case "QUARTER 2":
      return "Q2";
    case "QUARTER 3":
      return "Q3";
    case "QUARTER 4":
      return "Q4";
    case "PREGAME":
      return "PG";
    case "HALFTIME":
      return "HT";
    case "OVERTIME":
      return "OT";
    default:
      return "NA";
  }
}

Number.prototype.toOrdinal2 = function() {
  if ([11, 12, 13].indexOf(this % 100) > -1) {
    return this + "th";
  } else {
    return (
      this +
      ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][this % 10]
    );
  }
};

export default class Situations extends Component {
  render() {
    const { phase, clock, end, start } = this.props;
    return (
      <div className="Situations">
        <div className="StartSit">
          <p className="SitTitle">START SITUATION</p>
          <p className="StartSitProp">
            {start.possession}{" "}
            {start.down.toOrdinal2()}{" "}
            &{" "}
            {start.yards}{" "}
            @{" "}
            {start.locationAlias}{" "}
            {start.location}
          </p>
        </div>
        <div className="EndSit">
          <p className="SitTitle">
            END SITUATION : {shortPhase(phase)} {clock}
          </p>
          <p className="EndSitProp">
            {end.possession}{" "}
            {end.down.toOrdinal2()}{" "}
            &{" "}
            {end.yards}{" "}
            @{" "}
            {end.locationAlias}{" "}
            {end.location}
          </p>
        </div>
      </div>
    );
  }
}
