// @flow
// Imports come here.
import React from "react";
import { omit } from "lodash";
// flow-disable-next-line because aphrodite is aliased to aphrodite-jss.
import { StyleSheet, css } from "aphrodite";

// Define the types of our props.
type Props = {
  color?: string,
  width?: string,
  children: Array<React.createElement>,
  style?: {},
  opacity?: string,
  height: string,
};

// Our little component.
export default function RSGBox(props: Props): React.createElement {
  // Create our styles.
  const styles: Object = StyleSheet.create({
    mainDiv: {
      height: props.height ? props.width : undefined,
      color: props.color,
      width: props.width ? props.width : undefined,
      opacity: props.opacity,
      background: "rgb(230, 230, 230)",
      fontFamily: "Verdana, Geneva, sans-serif",
      ...props.style,
    },
    mainSpan: {
      marginLeft: "15px",
      fontSize: "13.5px",
      verticalAlign: "middle",
    },
  });


  return (
    <div className={css(styles.mainDiv)} {...omit(props, ["style"])}>
      <span className={css(styles.mainSpan)}>
        {props.children}
      </span>
    </div>
  );
}

// The default props.
RSGBox.defaultProps = {
  color: "rgb(10, 10, 10)",
  width: "95%",
  opacity: "1",
  style: {},
};
