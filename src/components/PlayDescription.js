import React, { Component } from "react";
import "./PlayDescription.css";

import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class PlayDescription extends Component {
  render() {
    return (
      <div className="RightRoot">
        <div className="TextFieldOne">
          <h3 className="Text">Yards Gained</h3>
          <TextField />
        </div>
        <div className="TextFieldOne">
          <h3 className="Text">Play Started</h3>
          <TextField />
          <RaisedButton
            label="NOW"
            className="Button"
            backgroundColor="#FFCF00"
            style={{ marginLeft: "50", width: "130" }}
          />
        </div>
        <div className="RadioButtonRoot">
          <div className="RadioButton">
            <h2 className="Text"> Play Type</h2>
            <RadioButtonGroup name="Play Type" className="RadioButton">
              <RadioButton label="Pass Attempt" />
              <RadioButton label="Rush Attempt" />
              <RadioButton label="Acpt Penalty" />
              <RadioButton label="Punt" />
              <RadioButton label="Field Goal Atmpt" />
              <RadioButton label="Kickoff" />
              <RadioButton label="Extra Point Atmpt" />
              <RadioButton label="Sack" />
            </RadioButtonGroup>
          </div>
          <div className="RadioButton">
            <h2 className="Text">Scoring</h2>
            <RadioButtonGroup name="Scoring" className="RadioButton">
              <RadioButton label="None" />
              <RadioButton label="Off Tdown" />
              <RadioButton label="Def Tdown" />
              <RadioButton label="Spec Teams Tdown" />
              <RadioButton label="Field Goal Made" />
              <RadioButton label="Extra Point Made" />
              <RadioButton label="2-P Conv Made" />
              <RadioButton label="Safety" />
            </RadioButtonGroup>
          </div>
          <div className="RadioButton">
            <h2 className="Text">Turnover</h2>
            <RadioButtonGroup name="Turnover" className="RadioButton">
              <RadioButton label="None" />
              <RadioButton label="Fumble Lost" />
              <RadioButton label="Interception" />
              <RadioButton label="Turnover On Downs" />
            </RadioButtonGroup>
          </div>

        </div>
        <div className="Description">
          <h3 className="Text">Description</h3>
          <TextField multiLine={true} />
        </div>
      </div>
    );
  }
}
export default PlayDescription;
