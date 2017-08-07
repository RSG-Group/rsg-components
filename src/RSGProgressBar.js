// @flow
/* eslint-disable no-console */
// Import React.
import React from "react";
// Import our CSS.
import compiledCSS from "../lib/index.css";

// Ink out the type of our props.
type Props = {
  anim?: boolean,
  id: string,
  checkered?: boolean | string,
  children: string,
  text: string,
  progressCount: number,
};

// A function to define the error thrown on invalid props.
function ReactInvalidPropException(info: {
  prop: string | Array<string>,
  type: string,
  expectedValue?: string,
  actualValue?: string,
}) {
  // Actual code starts here.
  this.name = "ReactInvalidPropException";
  // Extract values from info to make code line length smaller.
  const { type, prop, expectedValue, actualValue } = info;
  // If..
  if (type === "invalid-type" && expectedValue !== undefined && actualValue !== undefined && typeof prop === "string") {
    this.message = `RSGProgressBar has incorrectly recieved a ${actualValue} for the prop "${prop}" when it expected a ${expectedValue}.`;
  // Else..
  } else if (info.type === "unassigned-prop" && typeof prop === "string") {
    this.message = `RSGProgressBar has not recieved the required prop "${prop}". Click "OK" to rectify.`;
  } else if (info.type === "dual-props") {
    this.message = `RSGProgressBar has recieved 2 incompatible props, ${prop[0]} and ${prop[1]}. Please resolve the issue.`;
  }
}

// Our component.
export default function RSGProgressBar(props: Props) {
  // If progressCount is not a number then..
  if (!props.progressCount || typeof props.progressCount !== "number") {
    throw new ReactInvalidPropException({
      prop: "progressCount",
      type: "invalid-type",
      expectedValue: "number",
      actualValue: typeof props.progressCount,
    });
  }
  // If the prop `id` is undefined..
  if (!props.id) {
    throw new ReactInvalidPropException({
      prop: "id",
      type: "unassigned-prop",
    });
  }

  // Regular CSS props.
  let CSSProp: string = "";
  // If prop `checkered` is true then add CSS prop of sorts `_checkered`.
  if (props.checkered === true) {
    CSSProp = "_checkered";
  } else if (props.checkered === "animated") {
    // If prop `checkered` is true then add CSS prop of sorts `_checkered`.
    CSSProp = "_animated";
  }

  // props.children and props.text should not co-exist.
  if (props.children && props.text) {
    throw new ReactInvalidPropException({
      props: ["props.children", "props.text"],
      type: "dual-props",
    });
  }

  // Content to be included on the progress bar.
  const text = props.children.length > 0 ? `${props.progressCount}% ${props.children}` : `${props.progressCount}% ${props.text}`;

  // Ugly code.
  if (props.anim === true && props.children) {
    console.error("Now you are in \"anim\"-mode. Move your \"children\" to arguments in anim() function !!!");
  }

  // Return our final component.
  return (
    <div>
      <style>{compiledCSS}</style>
      <div className={`RSGProgressBar${CSSProp}`} key={5} {...props}>
        <div className={`PP${CSSProp}`} id={props.id} style={{ width: `${props.progressCount}%` }} key={3}>
          {text}
        </div>
      </div>
    </div>
  );
}

// Our default props.
RSGProgressBar.defaultProps = {
  anim: false,
  checkered: false,
  text: "",
};
