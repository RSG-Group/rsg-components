// @flow
// Imports here.
import React from "react";
import { omit } from "lodash";

// Insert types for our components props here.
type Props = {
  RSGType: string,
  style: Object,
};

// Our beautiful little component.
export default function RSGCheckbox(props: Props): React.createElement {
  const classes: Array<string> = ["switch"];
  let classy = "switch";
  if (props.RSGType === "lg") {
    classes.push("switch-lg");
    classy += " switch-lg";
  }

  return (
    <label htmlFor="checkbox" className={classy} style={props.style} {...omit(props, ["className"])}>
      <input type="checkbox" key={1} {...omit(props, ["type"])} />
      <span key={2} />
    </label>
  );
}


RSGCheckbox.defaultProps = {
  RSGType: undefined,
  style: undefined,
};
