// @flow weak
/* eslint-disable no-console */
import React from "react";

let txt = "Initializing";

type Props = {
  anim?: boolean,
  id: string,
  checkered?: boolean | string,
  children: Array<React.createElement>,
  text?: string,
  progressCount: number,
};

function ReactInvalidPropException(info: {
  prop: string,
  type: string,
  expectedValue?: string,
  actualValue?: string,
}) {
  this.name = "ReactInvalidPropException";
  if (info.type === "invalid-type") {
    this.message = `RSGProgressBar has incorrectly recieved a ${info.actualValue} for the prop "${info.prop}" when it expected a ${info.expectedValue}.`;
  } else if (info.type === "unassigned-prop") {
    this.message = `RSGProgressBar has not recieved the required prop "${info.prop}". Click "OK" to rectify.`;
  }
}

export default function RSGProgressBar(props: Props) {
  // Ugly code.
  if (!props.progressCount || typeof props.progressCount !== "number") {
    throw new ReactInvalidPropException({
      prop: "progressCount",
      type: "invalid-type",
      expectedValue: "number",
      actualValue: typeof props.progressCount,
    });
  }
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

  // What?
  if (props.children && typeof props.children !== "string") {
    console.error("Please set only text for children");
  }

  // Weird code.
  // flow-disable-next-line
  txt = props.children.length > 0 ? `${props.progressCount}% ${props.text}` : `${props.progressCount}% ${props.text}`;
  // Weird code.
  const PPwidth = `${props.progressCount}%`;

  // Weird block of code.
  if (props.anim === true && props.children) {
    console.error("Now you are in \"anim\"-mode. Move your \"children\" to arguments in anim() function !!!");
  }

  return (
    <div>
      <style key={1}>{style}</style>
      <div className="RSGProgressBar" key={5} {...props}>
        <div className="PP" id={`${props.id}SPAN`} style={{ width: PPwidth }} key={3}>
          {props.children}{txt}
        </div>
      </div>
    </div>
  );
}

RSGProgressBar.defaultProps = {
  anim: false,
  checkered: false,
  text: "",
};
