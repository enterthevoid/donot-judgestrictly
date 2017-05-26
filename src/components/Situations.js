import React, { Component } from "react";
import "./styles/Situations.css";

export default class Situations extends Component {
  render() {
    return (
      <div className="Situations">
        <div className="StartSit">
          <p className="SitTitle">START SITUATION</p>
          <p className="StartSitProp">NE 4th & 1@ NE 34</p>
        </div>
        <div className="EndSit">
          <p className="SitTitle">END SITUATION : Q1 14:55</p>
          <p className="EndSitProp">NE 3rd & 1 @ NE 34</p>
        </div>
      </div>
    );
  }
}
