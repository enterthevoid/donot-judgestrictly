import React, { Component } from "react";
import "./styles/PlayTypeRadio.css";

export default class PlayTypeRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }
  render() {
    return (
      <div className="PlayType">
        <p className="TitleRadio">PLAY TYPE :</p>
        <form>
          <div className="Radio">
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="NONE"
                  name="PlayType"
                  checked={this.state.selectedOption === "NONE"}
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
                  checked={this.state.selectedOption === "PASS"}
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
                  checked={this.state.selectedOption === "RUSH"}
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
                  checked={this.state.selectedOption === "PENALTY"}
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
                  checked={this.state.selectedOption === "PUNT"}
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
                  checked={this.state.selectedOption === "FIELDGOAL"}
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
                  checked={this.state.selectedOption === "KICKOFF"}
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
                  checked={this.state.selectedOption === "EXTRA_POINT"}
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
                  checked={this.state.selectedOption === "SACK"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Sack
                </p>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
