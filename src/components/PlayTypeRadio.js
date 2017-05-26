import React, { Component } from "react";
import "./styles/PlayTypeRadio.css";

export default class PlayTypeRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOptionChange(event) {
    this.setState({
      type: event.target.value
    });
  }
  render() {
    return (
      <div className="PlayType">
        <p className="TitleRadio">PLAY TYPE :</p>
        <div className="Radio">
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="NONE"
                name="PlayType"
                checked={this.state.type === "NONE"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                None
              </p>
            </label>
          </div>
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="PASS"
                name="PlayType"
                checked={this.state.type === "PASS"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                Pass Attempt
              </p>
            </label>
          </div>
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="RUSH"
                name="PlayType"
                checked={this.state.type === "RUSH"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                Rush Attempt
              </p>
            </label>
          </div>
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="PENALTY"
                name="PlayType"
                checked={this.state.type === "PENALTY"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                Acc. Penalty
              </p>
            </label>
          </div>
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="PUNT"
                name="PlayType"
                checked={this.state.type === "PUNT"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                Punt
              </p>
            </label>
          </div>
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="FIELDGOAL"
                name="PlayType"
                checked={this.state.type === "FIELDGOAL"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                Field Goal
              </p>
            </label>
          </div>
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="KICKOFF"
                name="PlayType"
                checked={this.state.type === "KICKOFF"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                Kickoff
              </p>
            </label>
          </div>
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="EXTRA_POINT"
                name="PlayType"
                checked={this.state.type === "EXTRA_POINT"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                Ext Point
              </p>
            </label>
          </div>
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="SACK"
                name="PlayType"
                checked={this.state.type === "SACK"}
                onChange={e => this.handleOptionChange(e)}
              />
              <p className="RadioName">
                Sack
              </p>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
