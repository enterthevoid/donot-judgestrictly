import React, { Component } from "react";
import "./styles/ScoringRadio.css";

export default class ScoringRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleOptionChange(event) {
    this.setState({
      score: event.target.value
    });
  }
  render() {
    return (
      <div className="Scoring">
        <p className="TitleRadio">SCORING :</p>
        <form>
          <div className="Radio">
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="NONE"
                  name="scoring"
                  checked={this.state.score === "NONE"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">None</p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="OFF_TOUCHDOWN"
                  name="scoring"
                  checked={this.state.score === "OFF_TOUCHDOWN"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Offensive TD
                </p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="DEF_TOUCHDOWN"
                  name="scoring"
                  checked={this.state.score === "DEF_TOUCHDOWN"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Defensive TD
                </p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="ST_TOUCHDOWN"
                  name="scoring"
                  checked={this.state.score === "ST_TOUCHDOWN"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Sp. Teams TD
                </p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="FIELDGOAL"
                  name="scoring"
                  checked={this.state.score === "FIELDGOAL"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Field Goal Made
                </p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="EXTRA_POINT"
                  name="scoring"
                  checked={this.state.score === "EXTRA_POINT"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  Extra Point Made
                </p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="TWOPT_CONVERSION"
                  name="scoring"
                  checked={this.state.score === "TWOPT_CONVERSION"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">
                  2PT Conversion
                </p>
              </label>
            </div>
            <div className="ValueRadio">
              <label>
                <input
                  type="radio"
                  value="SAFETY"
                  name="scoring"
                  checked={this.state.score === "SAFETY"}
                  onChange={e => this.handleOptionChange(e)}
                />
                <p className="RadioName">Safety</p>
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
