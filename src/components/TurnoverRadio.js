import React, { Component } from "react";
import "./styles/TurnoverRadio.css";

export default class TurnoverRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOptionChange(event) {
    this.setState({
      turnover: event.target.value
    });
  }
  render() {
    return (
      <div className="Turnover">
        <p className="TitleRadio">TURNOVER :</p>
        <form>
          <div className="Radio">
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="NONE"
                  name="Turnover"
                  checked={this.state.turnover === "NONE"}
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
                  value="FUMBLE"
                  name="Turnover"
                  checked={this.state.turnover === "FUMBLE"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Fumble Lost
                </p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="INTERCEPTION"
                  name="Turnover"
                  checked={this.state.turnover === "INTERCEPTION"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Interception
                </p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="ON_DOWNS"
                  name="Turnover"
                  checked={this.state.turnover === "ON_DOWNS"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Turnover Downs
                </p>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
