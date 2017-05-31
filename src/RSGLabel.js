// @flow
import React from "react";
import { omit } from "lodash";
import { StyleSheet, css } from "aphrodite";

type Props = {
  // eslint-disable-next-line react/no-unused-prop-types
  children: Array<React.createElement>,
  opacity?: string,
  style: {},
  color?: string,
  labelType?: string,
};

export default function RSGLabel(props: Props) {
  const Styles = {
    mainSpan: {
      ...props.style,
      color: props.color,
      fontFamily: "monospace",
      fontSize: ".975em",
      padding: ".175em .3em",
      borderRadius: ".235em",
      background: "rgb(195, 195, 195)",
      opacity: props.opacity,
    },
  };

  switch (props.labelType) {
  case "de":
    // This has already been configured in the style sheet, hence commented for optimization.
    // Styles.mainSpan.background = "rgb(195, 195, 195)";
    break;
  case "s":
    Styles.mainSpan.background = "rgb(85, 180, 90)";
    break;
  case "w":
    Styles.mainSpan.background = "rgb(255, 150, 25)";
    break;
  case "d":
    Styles.mainSpan.background = "rgb(220, 75, 75)";
    break;
  default:
    // This has already been configured in the style sheet, hence commented for optimization.
    // Styles.mainSpan.background = "rgb(195, 195, 195)";
  }

  const styles: Object = StyleSheet.create(Styles);

  return (
    <span style={css(styles.mainSpan)} {...omit(props, ["style", "labelType"])}>
      {props.children}
    </span>
  );
}

RSGLabel.defaultProps = {
  labelType: "de",
  color: "rgb(10, 10, 10)",
  style: {},
  opacity: "1",
};
