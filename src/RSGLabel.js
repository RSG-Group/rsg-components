// @flow
import React from "react";
import { omit } from "lodash";
import { createComponent } from "react-fela";

type Props = {
  children: Array<React.createElement>,
  opacity?: string, // eslint-disable-line react/no-unused-prop-types
  style: {},
  color?: string, // eslint-disable-line react/no-unused-prop-types
  labelType?: string,
};

export default function RSGLabel(props: Props) {
  const styles = prop => ({
    ...props.style,
    color: props.color,
    fontFamily: "monospace",
    fontSize: ".975em",
    padding: ".175em .3em",
    borderRadius: ".235em",
    background: prop.background ? prop.background : "rgb(195, 195, 195)",
    opacity: props.opacity,
  });

  let background = false;

  switch (props.labelType) {
  case "de":
    // This has already been configured in the style sheet, hence commented for optimization.
    // Styles.mainSpan.background = "rgb(195, 195, 195)";
    break;
  case "s":
    background = "rgb(85, 180, 90)";
    break;
  case "w":
    background = "rgb(255, 150, 25)";
    break;
  case "d":
    background = "rgb(220, 75, 75)";
    break;
  default:
    // This has already been configured in the style sheet, hence commented for optimization.
    // background = "rgb(195, 195, 195)";
  }

  const mainSpan = createComponent(styles, "span", () => {
    const a = Object.keys(props);
    a.shift();
    return a;
  });

  return (
    <mainSpan background={background} {...omit(props, ["style", "labelType"])}>
      {props.children}
    </mainSpan>
  );
}

RSGLabel.defaultProps = {
  labelType: "de",
  color: "rgb(10, 10, 10)",
  style: {},
  opacity: "1",
};
