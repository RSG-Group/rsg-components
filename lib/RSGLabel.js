import { Component, DOM } from "react";
import { omit } from "lodash";
import PropTypes from "prop-types";

export default class RSGLabel extends Component {
  render() {
    var RSGStyle = {};
    var children = this.props.children;

    RSGStyle.color = this.props.color;
    RSGStyle.fontFamily = "monospace";
    RSGStyle.fontSize = ".975em";
    RSGStyle.padding = ".175em .3em";
    RSGStyle.borderRadius = ".235em";
    RSGStyle.opacity = this.props.opacity;

    switch (this.props.labelType) {
    case "de":
      RSGStyle.background = "rgb(195, 195, 195)";
      break;
    case "s":
      RSGStyle.background = "rgb(85, 180, 90)";
      break;
    case "w":
      RSGStyle.background = "rgb(255, 150, 25)";
      break;
    case "d":
      RSGStyle.background = "rgb(220, 75, 75)";
      break;
    default:
      RSGStyle.background = "rgb(195, 195, 195)";
    }

    RSGStyle = Object.assign(RSGStyle, this.props.style);

    return DOM.span(
      Object.assign({ style: RSGStyle }, omit(this.props, ["style", "labelType"])),
      children,
    );
  }
}

RSGLabel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  opacity: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.string,
  labelType: PropTypes.string,
};

RSGLabel.defaultProps = {
  labelType: "de",
  color: "rgb(10, 10, 10)",
  style: {},
  opacity: "1",
};
