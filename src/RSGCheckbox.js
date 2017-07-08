// @flow
// Imports here.
import React from "react";
import { omit } from "lodash";
import protoCSS from "./protoCSS";

// Insert types for our components props here.
type Props = {
  style: Object,
  onChange: Function,
  checked: boolean,
  large?: boolean,
};

// Our beautiful component.
export default function RSGCheckbox(props: Props): React.createElement {
  const classy = props.large ? " switch" : " switch switch-lg";

  const a = omit(this.props, ["className", "onChange"]);

  return (
    <protoCSS>
      <label className={classy} htmlFor="checkbox" style={props.style} {...a}>
        <input
          type="checkbox"
          onChange={props.onChange}
          checked={props.checked}
          key={1}
          {...omit(this.props, ["type", "onChange"])}
        />
        <span key={2} />
      </label>
    </protoCSS>
  );
}

RSGCheckbox.defaultProps = { large: false };
