import React, { Component } from "react";
import "../styles/RadioScoring.css";

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
        <div className="Radio">
          <div className="ValueRadio">
            <label>
              <input
                type="radio"
                value="NONE"
                name="scoring"
                checked={this.props.currentState === "NONE"}
                onChange={event => this.props.handleOptionChange(event)}
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
                checked={this.props.currentState === "OFF_TOUCHDOWN"}
                onChange={event => this.props.handleOptionChange(event)}
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
                checked={this.props.currentState === "DEF_TOUCHDOWN"}
                onChange={event => this.props.handleOptionChange(event)}
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
                checked={this.props.currentState === "ST_TOUCHDOWN"}
                onChange={event => this.props.handleOptionChange(event)}
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
                checked={this.props.currentState === "FIELDGOAL"}
                onChange={event => this.props.handleOptionChange(event)}
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
                checked={this.props.currentState === "EXTRA_POINT"}
                onChange={event => this.props.handleOptionChange(event)}
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
                checked={this.props.currentState === "TWOPT_CONVERSION"}
                onChange={event => this.props.handleOptionChange(event)}
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
                checked={this.props.currentState === "SAFETY"}
                onChange={event => this.props.handleOptionChange(event)}
              />
              <p className="RadioName">Safety</p>
            </label>
          </div>
        </div>
      </div>
    );
  }
}
