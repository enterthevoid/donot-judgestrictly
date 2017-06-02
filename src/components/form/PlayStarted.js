import React, { Component } from "react";
import "../styles/PlayStarted.css";

import RaisedButton from "material-ui/RaisedButton";

function timeConverter(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var hour = a.getHours();
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = hour + ":" + min + ":" + sec;
  return time;
}

export default class PlayStarted extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.timestamp };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="PlayStartedContainer">
        <div className="PlayStarted">
          <div className="PlayDiv">
            <h3 className="Title">PLAY STARTED :</h3>
            <input
              className="TimeProp"
              value={timeConverter(this.state.value)}
              onChange={this.handleChange}
            />
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
