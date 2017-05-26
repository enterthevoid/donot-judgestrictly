import React, { Component } from "react";
import "./styles/SpotterHead.css";

export default class SpotterHead extends Component {
  render() {
    return (
      <div className="Head">
        <div className="HeadItem">
          <p className="HeadTitle">NE 34 @ ATL 28</p>
          <p className="HeadTime">OVERTIME 2:00</p>
        </div>
      </div>
    );
  }
}
