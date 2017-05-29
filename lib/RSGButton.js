import { Component, DOM } from "react";
import { omit } from "lodash";
import PropTypes from "prop-types";

export default class RSGButton extends Component {
  render() {
    var RSGStyle = {};
    RSGStyle.fontSize = this.props.fontSize;

    switch (this.props.sizes) {
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

    RSGStyle.background = this.props.background;
    RSGStyle.color = this.props.color;
    RSGStyle.opacity = this.props.opacity;
    RSGStyle.border = "1px solid rgb(30, 100, 160)";
    RSGStyle.borderRadius = "3px";
    RSGStyle = Object.assign(RSGStyle, this.props.style);

    if (this.props.fontStyle) RSGStyle.fontStyle = this.props.fontStyle;

    return DOM.button(Object.assign({ style: RSGStyle }, omit(this.props, ["style"])), this.props.children);
  }
}

RSGButton.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontStyle: PropTypes.string,
  opacity: PropTypes.string,
  style: PropTypes.shape({}),
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
