import React from "react";
import { omit } from "lodash";
import PropTypes from "prop-types";

export default function RSGBox(props) {
  let RSGStyle = {};

  RSGStyle.height = "20px";
  RSGStyle.background = "rgb(230, 230, 230)";
  RSGStyle.fontFamily = "Verdana, Geneva, sans-serif";
  RSGStyle.color = props.color;
  RSGStyle.width = props.width;
  RSGStyle.opacity = props.opacity;

  RSGStyle = Object.assign(RSGStyle, props.style);

  return (
    <div style={RSGStyle} {...omit(props, ["style"])}>
      <span style={{ marginLeft: "15px", fontSize: "13.5px", verticalAlign: "middle" }}>
        ...props.children
      </span>
    </div>
  );
}


RSGBox.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.shape({}).isRequired,
  opacity: PropTypes.string,
};

RSGBox.defaultProps = {
  color: "rgb(10, 10, 10)",
  width: "95%",
  opacity: "1",
};
