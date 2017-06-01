import React, { Component } from "react";
import "./styles/PlayStarted.css";

import RaisedButton from "material-ui/RaisedButton";

export default class PlayStarted extends Component {
  render() {
    const { clock } = this.props;
    return (
      <div className="PlayStartedContainer">
        <div className="PlayStarted">
          <div className="PlayDiv">
            <h3 className="Title">PLAY STARTED :</h3>
            <h3 className="TimeProp">{clock}</h3>
          </div>
          <RaisedButton
            label="NOW"
            style={{ width: 145, height: 52 }}
            backgroundColor="#FFCF00"
          />
        </div>
      </div>
    );
  }
}
