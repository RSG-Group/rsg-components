import { Component, DOM } from "react";
import { omit } from "lodash";
import PropTypes from "prop-types";

export default class RSGCheckbox extends Component {
  render() {
    let classes = "switch";
    if (this.props.RSGType && this.props.RSGType === "lg") {
      classes += " switch-lg";
    }

    const input = DOM.input(
      Object.assign(
        { type: "checkbox", key: 1 },
        omit(this.props, ["type"]),
      ),
    );

    const span = DOM.span({ key: 2 });
    const style1 = this.props.style1;

    const label = DOM.label(
      Object.assign(
        { className: classes, style: style1 },
        omit(this.props, ["className"]),
      ),
      [
        input,
        span,
      ],
    );

    return label;
  }
}

RSGCheckbox.propTypes = {
  RSGType: PropTypes.string,
  style1: PropTypes.shape({}),
};

RSGCheckbox.defaultProps = {
  RSGType: undefined,
  style1: undefined,
};
