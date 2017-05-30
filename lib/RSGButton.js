import React from "react";
import { omit } from "lodash";
import PropTypes from "prop-types";

export default function RSGButton(props) {
  var RSGStyle = {};
  RSGStyle.fontSize = props.fontSize;

  switch (props.sizes) {
  case "s":
    RSGStyle.padding = "1px 3px";
    RSGStyle.fontSize = "12px";
    break;
  case "l":
    RSGStyle.padding = "5px 7px";
    RSGStyle.fontSize = "18px";
    break;
  case "xl":
    RSGStyle.padding = "9px 11px";
    RSGStyle.fontSize = "20px";
    break;
  case "xxl":
    RSGStyle.padding = "12px 14px";
    RSGStyle.fontSize = "25px";
    break;
  default:
    RSGStyle.padding = "5px 4px";
  }

  RSGStyle.background = props.background;
  RSGStyle.color = props.color;
  RSGStyle.opacity = props.opacity;
  RSGStyle.border = "1px solid rgb(30, 100, 160)";
  RSGStyle.borderRadius = "3px";
  RSGStyle = Object.assign(RSGStyle, props.style);

  if (props.fontStyle) RSGStyle.fontStyle = props.fontStyle;

  return (
    <button style={RSGStyle} {...omit(props, ["style"])}>
      ...props.children
    </button>
  );
}


RSGButton.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  opacity: PropTypes.string,
  style: PropTypes.shape({}),
  // eslint-disable-next-line react/no-unused-prop-types
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  sizes: PropTypes.string,
};

RSGButton.defaultProps = {
  background: "rgb(50, 120, 180)",
  color: "rgb(220, 220, 220)",
  opacity: "1",
  style: {},
  fontSize: "16px",
  fontStyle: undefined,
  sizes: "default",
};
