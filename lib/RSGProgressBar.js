/* eslint-disable no-console */
import React from "react";
import PropTypes from "prop-types";

var txt = "Initializing";
var style = "";

export default function RSGProgressBar(props) {
  if (!props.anim && !props.progressCount && typeof props.progressCount !== "number") {
    return <div><b style={{ color: "red" }}>You MUST set progressCount prop as number!!!</b></div>;
  }
  if (!props.id) {
    return <div><b style={{ color: "red" }}>You MUST set id of the RSGProgressBar component!</b></div>;
  }
  style = `.RSGProgressBar{  background: rgb(210, 215, 215);  box-shadow: inset 0 1.5px 3px rgb(150, 150, 150);  -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150);  border-radius: 3px;  height: 20px;} #${props.id}SPAN{  background: rgb(51, 122, 183);  transition: width 1s;  width: 1%;  height: 20px;  border-radius: 5px;  text-align: center;  color: white; }`;

  if (props.checkered === true) {
    style = ".RSGProgressBar { background: rgb(210, 215, 215); box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); border-radius: 3px; height: 20px; } .PP { background: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png); transition: width 1s; height: 20px; border-radius: 5px;text-align: center; color: white; }";
  } else if (props.checkered === "animated") {
    style = ".RSGProgressBar { background: rgb(210, 220, 220); box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); border-radius: 3px; height: 20px; } @keyframes animatedBackground { from { background-position: 0 0; } to { background-position: 100% 0; } } .PP { background-image: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png); background-position: 0px 0px; background-repeat: repeat-x; animation: animatedBackground 75s linear infinite; transition: width 1s; height: 20px; border-radius: 5px; text-align: center; color: white; }";
  }
  const txt2 = props.text ? props.text : "";

  if (props.children && typeof props.children !== "string") {
    console.error("Please set only text for children");
  }

  txt = props.children && props.children.trim() ?
    `${props.children} ${props.progressCount}% ${txt2}`
    : `${props.progressCount}% ${txt2}`;
  const PPwidth = `${props.progressCount}%`;

  if (props.anim === true && props.children) {
    console.warning("Now you are in \"anim\"-mode. Move your \"children\" to arguments in anim() function !!!");
  }

  const DIVProps = Object.assign({ className: "RSGProgressBar", key: 5 }, props);
  style += " .PP{ overflow: hidden; }";


  return (
    <div>
      <style key={1}>{style}</style>
      <div {...DIVProps}>
        <div className="PP" id={`${props.id}SPAN`} style={{ width: PPwidth }} key={3}>
          {txt}
        </div>
      </div>
    </div>
  );
}


RSGProgressBar.propTypes = {
  anim: PropTypes.bool,
  id: PropTypes.string.isRequired,
  checkered: PropTypes.oneOf([true, false, "animated"]),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  text: PropTypes.string.isRequired,
  progressCount: PropTypes.number.isRequired,
};

RSGProgressBar.defaultProps = {
  anim: false,
  checkered: false,
};
