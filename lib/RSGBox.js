import { Component, DOM } from "react";
import { omit } from "lodash";

export default class RSGBox extends Component {
  render() {
    var RSGStyle = {};
    var children = this.props.children;

    RSGStyle.width = "95%";
    RSGStyle.height = "20px";
    RSGStyle.color = "rgb(10, 10, 10)";
    RSGStyle.background = "rgb(230, 230, 230)";
    RSGStyle.fontFamily = "Verdana, Geneva, sans-serif";

    if (this.props.color) RSGStyle.color = this.props.color;
    if (this.props.width) RSGStyle.width = this.props.width;
    if (this.props.opacity) RSGStyle.opacity = this.props.opacity;

    RSGStyle = Object.assign(RSGStyle, this.props.style);

    return DOM.div(
      Object.assign({ style: RSGStyle }, omit(this.props, ["style"])),
      DOM.span({
        style: {
          marginLeft: "15px",
          fontSize: "13.5px",
          verticalAlign: "middle",
        },
      }, children),
    );
  }
}
