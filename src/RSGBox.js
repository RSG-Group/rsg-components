// @flow
// Imports come here.
import React from "react";
import { omit } from "lodash";
import { createComponent } from "react-fela";

// Define the types of our props.
type Props = {
  color?: string, // eslint-disable-line react/no-unused-prop-types
  width?: string, // eslint-disable-line react/no-unused-prop-types
  children: Array<React.createElement>,
  style?: {},
  opacity?: string, // eslint-disable-line react/no-unused-prop-types
  height: string, // eslint-disable-line react/no-unused-prop-types
};

// Our little component.
export default function RSGBox(props: Props): React.createElement {
  // Create our styles.
  const styles: Object = () => ({
    mainDiv: () => ({
      // height: "20px",     // Requires reconfirmation.
      height: props.height,
      color: props.color,
      width: props.width,
      opacity: props.opacity,
      background: "rgb(230, 230, 230)",
      fontFamily: "Verdana, Geneva, sans-serif",
      ...props.style,
    }),
    mainSpan: () => ({
      marginLeft: "15px",
      fontSize: "13.5px",
      verticalAlign: "middle",
    }),
  });

  const mainDiv = createComponent(styles.mainDiv);
  const mainSpan = createComponent(styles.mainSpan, "span");

  return (
    <mainDiv {...omit(props, ["style"])} passThrough={Object.keys(props)}>
      <mainSpan>
        {props.children}
      </mainSpan>
    </mainDiv>
  );
}

// The default props.
RSGBox.defaultProps = {
  color: "rgb(10, 10, 10)",
  width: "95%",
  opacity: "1",
  style: {},
};
