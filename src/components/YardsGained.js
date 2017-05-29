import React, { Component } from "react";
import "./styles/YardsGained.css";

export default class YardsGained extends Component {
  render() {
    return (
      <div className="YardsContainer">
        <div className="YardsGained">
          <h3 className="Title">YARDS GAINED :</h3>
          <h3 className="YardsProp">24</h3>
        </div>
      </div>
    );
  }
}
