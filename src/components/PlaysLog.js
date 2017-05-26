import React, { Component, PropTypes } from "react";
import "./styles/PlaysLog.css";

import Drawer from "material-ui/Drawer";
import PlayLogItem from "./PlayLogItem";

export default class SpotterScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { current: "zalu[a]" };
  }

  handlePlayClick(play) {
    const { onChange } = this.props;
    this.setState({ current: play.key });
    onChange(play);
  }
  render() {
    const { plays, processed, selected, onChange, phase, clock } = this.props;
    return (
      <div className="ContainerLog">
        <div>
          <Drawer
            width={135}
            className="PlayLog"
            openSecondary={true}
            docked={true}
          >
            <div className="LogHead">
              <p className="LogHeadPending">PENDING:</p>
              <p className="LogHeadNumber">2</p>
            </div>
            <div className="LogStats">
              <p className="StatTitle">PLAYS LOG</p>
              {plays.map(play => {
                return (
                  <PlayLogItem
                    key={play.key}
                    onClick={() => this.handlePlayClick(play)}
                    selected={this.state.current === play.key}
                    processed={play.processed}
                    phase={play.phase}
                    clock={play.clock}
                  />
                );
              })}
            </div>
          </Drawer>
        </div>
      </div>
    );
  }
}

PlayLogItem.propTypes = {
  onChange: PropTypes.func,
  processed: PropTypes.bool,
  selected: PropTypes.bool,
  phase: PropTypes.string,
  clock: PropTypes.string
};
PlayLogItem.defaultProps = {
  onChange: () => {},
  processed: false,
  selected: true,
  phase: "Quarter 0 ",
  clock: "00:00"
};
