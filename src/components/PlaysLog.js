import React, { Component } from "react";
import PropTypes from "prop-types";
import "./styles/PlaysLog.css";

import Drawer from "material-ui/Drawer";
import PlayLogItem from "./PlayLogItem";

export default class PlaysLog extends Component {
  handlePlayClick(play) {
    const { onChange } = this.props;
    onChange(play);
  }
  render() {
    const { plays, selected, onChange } = this.props;
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
              <h1 className="LogHeadPending">PENDING:</h1>
              <h1 className="LogHeadNumber">2</h1>
            </div>
            <div className="LogStats">
              <p className="StatTitle">PLAYS LOG</p>
              {plays.map(play => {
                return (
                  <PlayLogItem
                    key={play.key}
                    onClick={() => this.handlePlayClick(play)}
                    selected={selected.key === play.key}
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

PlaysLog.propTypes = {
  onChange: PropTypes.func,
  plays: PropTypes.object,
  selected: PropTypes.bool
};
PlaysLog.defaultProps = {
  onChange: () => {},
  selected: null
};
