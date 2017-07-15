// @flow
/* eslint-disable no-console */
// Import React.
import React from "react";

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
  prop: string,
  type: string,
  expectedValue?: string,
  actualValue?: string,
}) {
  // Actual code starts here.
  this.name = "ReactInvalidPropException";
  // Extract values from info to make code line length smaller.
  const { type, prop, expectedValue, actualValue } = info;
  // If..
  if (type === "invalid-type" && expectedValue !== undefined && actualValue !== undefined) {
    this.message = `RSGProgressBar has incorrectly recieved a ${actualValue} for the prop "${prop}" when it expected a ${expectedValue}.`;
  // Else..
  } else if (info.type === "unassigned-prop") {
    this.message = `RSGProgressBar has not recieved the required prop "${prop}". Click "OK" to rectify.`;
  }
}

// Our component.
export default function RSGProgressBar(props: Props) {
  // If progressCount is not a number then.
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

  // Ugly code.
  let style = `.RSGProgressBar{  background: rgb(210, 215, 215);  box-shadow: inset 0 1.5px 3px rgb(150, 150, 150);  -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150);  border-radius: 3px;  height: 20px;} #${props.id}SPAN{  background: rgb(51, 122, 183);  transition: width 1s;  width: 1%;  height: 20px;  border-radius: 5px;  text-align: center;  color: white; } .PP { overflow: hidden; }`;

  if (props.checkered === true) {
    // Ugly code.
    style = ".RSGProgressBar { background: rgb(210, 215, 215); box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); border-radius: 3px; height: 20px; } .PP { overflow: hidden; background: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png); transition: width 1s; height: 20px; border-radius: 5px;text-align: center; color: white; }";
  } else if (props.checkered === "animated") {
    // Ugly code.
    style = ".RSGProgressBar { background: rgb(210, 220, 220); box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); border-radius: 3px; height: 20px; } @keyframes animatedBackground { from { background-position: 0 0; } to { background-position: 100% 0; } } .PP { background-image: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png); background-position: 0px 0px; background-repeat: repeat-x; animation: animatedBackground 75s linear infinite; overflow: hidden; transition: width 1s; height: 20px; border-radius: 5px; text-align: center; color: white; }";
  }

  // What? Replace with check for props.children and props.text should not co-exist.
  if (props.children && typeof props.children !== "string") {
    console.error("Please set only text for children");
  }

  // Content to be included on the progress bar.
  const text = props.children.length > 0 ? `${props.progressCount}% ${props.children}` : `${props.progressCount}% ${props.text}`;

  // Weird block of code.
  if (props.anim === true && props.children) {
    console.error("Now you are in \"anim\"-mode. Move your \"children\" to arguments in anim() function !!!");
  }

  // Gulp. We need to see what to do about this :3
  return (
    <div>
      <style key={1}>{style}</style>
      <div className="RSGProgressBar" key={5} {...props}>
        <div className="PP" id={`${props.id}SPAN`} style={{ width: `${props.progressCount}%` }} key={3}>
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
