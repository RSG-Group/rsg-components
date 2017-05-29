import { Component, DOM } from "react";
import { omit } from "lodash";
import PropTypes from "prop-types";

export default class RSGBox extends Component {
  render() {
    let RSGStyle = {};
    const children = this.props.children;

    RSGStyle.height = "20px";
    RSGStyle.background = "rgb(230, 230, 230)";
    RSGStyle.fontFamily = "Verdana, Geneva, sans-serif";
    RSGStyle.color = this.props.color;
    RSGStyle.width = this.props.width;
    RSGStyle.opacity = this.props.opacity;

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

RSGBox.propTypes = {
  color: PropTypes.string,
  width: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.shape({}),
  opacity: PropTypes.string,
};

RSGBox.defaultProps = {
  color: "rgb(10, 10, 10)",
  width: "95%",
  style: {},
  opacity: "1",
};
