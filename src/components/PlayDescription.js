import React, { Component } from "react";

import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import RaisedButton from "material-ui/RaisedButton";

const style = {
  RootStyle: {
    display: "flex",
    flexDirection: "column",
    width: 470
  },
  TextStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "Impact",
    fontSize: 20,
    margin: 5,
    justifyContent: "space-around"
  },

  TextStyle2: {
    display: "flex",
    flexDirection: "column",
    fontFamily: "Impact",
    fontSize: 20,
    margin: 5
  },
  ButtonStyle: {
    display: "flex"
  },
  underlineStyle: {
    borderColor: "#FFCF00"
  },
  CheckboxStyles: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Impact",
    fontSize: 20,
    margin: 5
  },
  Checkbox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Impact",
    fontSize: 20,
    margin: 5,
    alignContent: "center",
    checkbox: {}
  }
};
class PlayDescription extends Component {
  render() {
    return (
      <div style={style.RootStyle}>
        <div style={style.TextStyle}>
          Yards Gained <TextField underlineFocusStyle={style.underlineStyle} />
        </div>
        <div style={style.TextStyle}>
          Play Started<TextField underlineFocusStyle={style.underlineStyle} />
        </div>
        <RaisedButton
          label="NOW"
          style={style.ButtonStyle}
          backgroundColor="#FFCF00"
        />
        <div style={style.CheckboxStyles}>
          Play Type
          <Checkbox label="Pass Attempt" style={style.Checkbox} />
          <Checkbox label="Rush Attempt" style={style.Checkbox} />
          <Checkbox label="Accepted Penalty" style={style.Checkbox} />
          <Checkbox label="Punt" style={style.Checkbox} />
          <Checkbox label="Field Goal Attempt" style={style.Checkbox} />
          <Checkbox label="Kickoff" style={style.Checkbox} />
          <Checkbox label="Extra Point Attempt" style={style.Checkbox} />
          <Checkbox label="Sack" style={style.Checkbox} />
        </div>
      </div>
    );
  }
}

export default PlayDescription;
