import React, { PropTypes } from "react";
import "./styles/PlayLogItem.css";

function shortPhase(phase) {
  switch (phase) {
    case "QUARTER 1":
      return "Q1";
    case "QUARTER 2":
      return "Q2";
    case "QUARTER 3":
      return "Q3";
    case "QUARTER 4":
      return "Q4";
    case "PREGAME":
      return "PG";
    case "HALFTIME":
      return "HT";
    case "OVERTIME":
      return "OT";
    default:
      return "NA";
      break;
  }
}

const PlayLogItem = props => {
  const { processed, selected, onClick, phase, clock } = props;
  return (
    <div className="PlayLogItem" onClick={onClick}>
      <div className={selected ? "PlayLogItemActive" : "PlayLogItemNull"}>
        <div className={processed ? "StatButtGrey" : "StatButtYellow"} />
        <p className="StatItem">{shortPhase(phase)} {clock}</p>
      </div>
    </div>
  );
};

PlayLogItem.propTypes = {
  onClick: PropTypes.func,
  processed: PropTypes.bool,
  selected: PropTypes.bool,
  phase: PropTypes.string,
  clock: PropTypes.string
};
PlayLogItem.defaultProps = {
  onClick: () => {},
  processed: false,
  selected: true,
  clock: "00:00"
};
export default PlayLogItem;
