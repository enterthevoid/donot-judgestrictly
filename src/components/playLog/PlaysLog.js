import React, { Component } from "react";
import PropTypes from "prop-types";
import Add from "material-ui/svg-icons/content/add";
import "../styles/PlaysLog.css";

import Drawer from "material-ui/Drawer";
import PlayLogItem from "./PlayLogItem";
import IconButton from "material-ui/IconButton";

export default class PlaysLog extends Component {
  handlePlayClick(play) {
    const { onChange } = this.props;
    onChange(play);
  }
  render() {
    const { plays, selected } = this.props;
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
              <div className="LogTitle">
                <div className="IconTitle">
                  <p className="StatTitle">
                    PLAYS LOG
                  </p>
                </div>
                <div className="Icon">
                  <IconButton>
                    <Add
                      color="#FFCF00"
                      hoverColor={"#F2F2F2"}
                      onClick={() => console.log("button work hard")}
                    />
                  </IconButton>
                </div>
              </div>
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
  plays: PropTypes.array,
  selected: PropTypes.object
};
PlaysLog.defaultProps = {
  onChange: () => {},
  selected: null
};
