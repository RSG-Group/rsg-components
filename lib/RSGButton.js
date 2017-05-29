import { Component, DOM } from "react";
import { omit } from "lodash";

export default class RSGButton extends Component {
  render() {
    var RSGStyle = {};
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
      RSGStyle.fontSize = "16px";
    }

    RSGStyle.background = "rgb(50, 120, 180)";
    RSGStyle.color = "rgb(220, 220, 220)";
    RSGStyle.border = "1px solid rgb(30, 100, 160)";
    RSGStyle.borderRadius = "3px";
    RSGStyle = Object.assign(RSGStyle, this.props.style);

    if (this.props.background) RSGStyle.background = this.props.background;
    if (this.props.color) RSGStyle.color = this.props.color;
    if (this.props.fontSize) RSGStyle.fontSize = this.props.fontSize;
    if (this.props.fontStyle) RSGStyle.fontStyle = this.props.fontStyle;
    if (this.props.opacity) RSGStyle.opacity = this.props.opacity;

    return DOM.button(Object.assign({ style: RSGStyle }, omit(this.props, ["style"])), this.props.children);
  }
}
