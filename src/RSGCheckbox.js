// @flow
// Imports here.
import React from "react";
import { omit } from "lodash";
// Import Aphrodite and tools to configure it.
import aphrodite from "aphrodite-jss";
import { create } from "jss";
import preset from "jss-preset-default";

// Create Aphrodite instance with plugins.
const { StyleSheet, css } = aphrodite(create(preset()));

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

  const styles = StyleSheet.create({
    mainSpan: {
      position: "relative",
      display: "inline-block",
      width: props.large ? "50px" : "40px",
      height: props.large ? "25px" : "20px",
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "100px",
      transition: "all 0.5s",
      boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.1) inset",
      verticalAlign: "middle",
      cursor: "pointer",
      "&:after": {
        content: "",
        position: "absolute",
        backgroundColor: "#fff",
        top: 0,
        left: 0,
        height: props.large ? "23px" : "18px",
        width: props.large ? "23px" : "18px",
        border: "1px solid #ddd",
        borderRadius: "400px",
        boxShadow: "1px 1px 3px rgba(0, 0, 0, 0.1)",
        "-webkit-transition": "all 0.2s",
        transition: "all 0.2s",
      },
    },
    mainLabel: {
      cursor: "pointer",
      composes: "switch",
    },
    mainInput: {
      cursor: "pointer",
      opacity: 0,
      position: "absolute",
      zIndex: -1,
      "&:checked + $mainSpan": {
        backgroundColor: "#5d9cec",
        borderColor: "#5d9cec",
        transition: "all 0.5s",
      },
      "&:checked + $mainSpan:after": {
        left: "50%",
        transition: "all 0.2s",
      },
    },
  });

  const a = omit(this.props, ["className", "onChange"]);

  return (
    <label className={css(styles.mainLabel) + classy} htmlFor="checkbox" style={props.style} {...a}>
      <input
        type="checkbox"
        onChange={props.onChange}
        checked={props.checked}
        key={1}
        className={css(styles.mainInput)}
        {...omit(this.props, ["type", "onChange"])}
      />
      <span className={css(styles.mainSpan)} key={2} />
    </label>
  );
}

RSGCheckbox.defaultProps = { large: false };
