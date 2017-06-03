// @flow
/* eslint-disable no-console */
// Imports here.
import React from "react";
import { omit } from "lodash";

// Insert types for our components props here.
type Props = {
  RSGType: string,
  style: Object,
};

// Our beautiful little component.
export default function RSGCheckbox(props: Props): React.createElement {
  let classy = "switch";
  if (props.RSGType === "lg") {
    classy += " switch-lg";
  }

  // Set styles
  const styles: string = `.switch input:checked+span{background-color:#5d9cec;border-color:#5d9cec;transition:all .5s}.switch.switch-lg span{width:50px;height:25px}.switch span{position:relative;display:inline-block;width:40px;height:20px;background-color:#fff;border:1px solid #ddd;border-radius:100px;transition:all .5s;box-shadow:1px 2px 3px rgba(0,0,0,.1) inset;vertical-align:middle}.switch *{cursor:pointer}.switch span:after{content:"";position:absolute;background-color:#fff;top:0;left:0;height:18px;width:18px;border:1px solid #ddd;border-radius:400px;box-shadow:1px 1px 3px rgba(0,0,0,.1);-webkit-transition:all .2s}.switch input{opacity:0;position:absolute;z-index:-1}.switch input:checked+span:after{left:50%;transition:all .2s}.switch.switch-lg span:after{height:23px;width:23px}`;
  console.log(
    `RSGCheckbox is controlled component, and you have to use state to create checkable box.
    More info: http://github.com/RSG-Group/rsg-components/wiki/RSGCheckbox and http://rsg-group.github.io/rsg-components`
  )

  return (
    <span>
      <style>{styles}</style>
      <label htmlFor="checkbox" className={classy} style={props.style} {...omit(props, ["className"])}>
        <input type="checkbox" key={1} {...omit(props, ["type"])} />
        <span key={2} />
      </label>
    </span>
  );
}


RSGCheckbox.defaultProps = {
  RSGType: undefined,
  style: undefined,
};
