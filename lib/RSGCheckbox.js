import React from "react";
import { omit } from "lodash";
import PropTypes from "prop-types";

export default function RSGCheckbox(props) {
  let classes = "switch";
  if (props.RSGType && props.RSGType === "lg") {
    classes += " switch-lg";
  }

  const input = <input type="checkbox" key={1} {...omit(props, ["type"])} />;

  const span = <span key={2} />;
  const style = props.style;

  return (
    <label htmlFor="checkbox" className={classes} style={style} {...omit(props, ["className"])}>
      {input}
      {span}
    </label>
  );
}


RSGCheckbox.propTypes = {
  RSGType: PropTypes.string,
  style: PropTypes.shape({}),
};

RSGCheckbox.defaultProps = {
  RSGType: undefined,
  style: undefined,
};
