import React, { Component } from "react";
import "../styles/YardsGained.css";

export default class YardsGained extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.yardsGained };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div className="YardsContainer">
        <div className="YardsGained">
          <h3 className="Title">YARDS GAINED :</h3>
          <input
            className="YardsProp"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}
