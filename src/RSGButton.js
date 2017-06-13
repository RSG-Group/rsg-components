// @flow
// Imports go here.
import React from "react";
import { omit } from "lodash";
import { createComponent } from "react-fela";

// Define the props and types our app needs.
type Props = {
  background?: string,
  color?: string,
  fontSize?: string,
  fontStyle?: string,
  opacity?: string,
  style?: Object,
  children: Array<React.createElement>,
  sizes: string, // If you face a bug saying sizes is compulsory with flow, pass anything as sizes.
  // This was done to avoid errors later in the component.
};

// Create stylesheet of sizes.
const sizes: Object = {
  s: () => ({ padding: "1px 3px", fontSize: "12px" }),
  l: () => ({ padding: "5px 7px", fontSize: "18px" }),
  xl: () => ({ padding: "9px 11px", fontSize: "20px" }),
  xxl: () => ({ padding: "12px 14px", fontSize: "25px" }),
  default: () => ({ padding: "5px 4px", fontSize: "16px" }),
};

// Finally.. our component.
export default function RSGButton(props: Props): React.createElement {
  let sizeId: string;
  if (props.sizes) sizeId = props.sizes;
  else { sizeId = "default"; }

  const styles: Object = () => {
    let padding = "5px 4px";
    if (sizeId !== "default") padding = sizes[sizeId]().padding;
    return {
      border: "1px solid rgb(30, 100, 160)",
      borderRadius: "3px",
      background: props.background,
      color: props.color,
      opacity: props.opacity,
      padding,
      ...props.style,
      fontSize: props.fontSize ? props.fontSize : sizes[sizeId]().fontSize,
      fontStyle: props.fontStyle,
    };
  };

  const StyledButton = createComponent(styles, "button");

  return (
    <StyledButton {...omit(props, ["style"])} passThrough={Object.keys(props)}>
      {props.children}
    </StyledButton>
  );
}

// and sir default props.
RSGButton.defaultProps = {
  background: "rgb(50, 120, 180)",
  color: "rgb(220, 220, 220)",
  opacity: "1",
  style: {},
  fontSize: undefined,
  fontStyle: undefined,
  sizes: "default",
};
