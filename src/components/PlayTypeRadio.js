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
                checked={this.props.currentState === "NONE"}
                onChange={e => this.props.handleOptionChange(e)}
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
                checked={this.props.currentState === "PASS"}
                onChange={e => this.props.handleOptionChange(e)}
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
                checked={this.props.currentState === "RUSH"}
                onChange={e => this.props.handleOptionChange(e)}
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
                checked={this.props.currentState === "PENALTY"}
                onChange={e => this.props.handleOptionChange(e)}
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
                checked={this.props.currentState === "PUNT"}
                onChange={e => this.props.handleOptionChange(e)}
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
                value="TYPE_FIELDGOAL"
                name="PlayType"
                checked={this.props.currentState === "TYPE_FIELDGOAL"}
                onChange={e => this.props.handleOptionChange(e)}
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
                checked={this.props.currentState === "KICKOFF"}
                onChange={e => this.props.handleOptionChange(e)}
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
                value="TYPE_EXTRA_POINT"
                name="PlayType"
                checked={this.props.currentState === "TYPE_EXTRA_POINT"}
                onChange={e => this.props.handleOptionChange(e)}
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
                checked={this.props.currentState === "SACK"}
                onChange={e => this.props.handleOptionChange(e)}
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
