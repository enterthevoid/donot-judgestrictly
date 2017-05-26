import React, { Component } from "react";
import "./styles/YardsGained.css";

export default class YardsGained extends Component {
  render() {
    return (
      <div className="YardsContainer">
        <div className="YardsGained">
          <p className="Title">YARDS GAINED :</p>
          <p className="YardsProp">24</p>
        </div>
      </div>
    );
  }
}
