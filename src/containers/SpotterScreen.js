import React, { Component } from "react";
import ReactPlayer from "react-player";

import AppDrawer from "../components/AppDrawer";
import AppBar from "../components/AppBar";

const rootstyles = {
  display: "flex",
  flexDirection: "row",
  ustifyContent: "flex-start",
  margin: 5
};
const AppDrawerStyles = {
  width: 260
};

export default class SpotterScreen extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <AppBar />
        </div>
        <div style={rootstyles}>
          <div style={AppDrawerStyles}>
            <AppDrawer />
          </div>
          <div>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              playing
            />
          </div>
        </div>
      </div>
    );
  }
}
