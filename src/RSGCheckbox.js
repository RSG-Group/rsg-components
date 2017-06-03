// @flow
// Imports here.
import React from "react";
import { omit } from "lodash";

// Insert types for our components props here.
type Props = {
  RSGType: string,
  style: Object,
  onChange: Function
};
type State = {
  checked: boolean,
}

// Our beautiful component.
export default class RSGCheckbox extends React.Component<void, Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { checked: false };
  }

  state: { checked: boolean }

  handleChange() {
    this.setState({ checked: !this.state.checked });
    if (this.props.onChange) (this.props.onChange)();
  }

  render() {
    let classy = "switch";
    if (this.props.RSGType === "lg") {
      classy += " switch-lg";
    }

    // Set styles
    const styles: string = ".switch input:checked+span{background-color:#5d9cec;border-color:#5d9cec;transition:all .5s}.switch.switch-lg span{width:50px;height:25px}.switch span{position:relative;display:inline-block;width:40px;height:20px;background-color:#fff;border:1px solid #ddd;border-radius:100px;transition:all .5s;box-shadow:1px 2px 3px rgba(0,0,0,.1) inset;vertical-align:middle}.switch *{cursor:pointer}.switch span:after{content:\"\";position:absolute;background-color:#fff;top:0;left:0;height:18px;width:18px;border:1px solid #ddd;border-radius:400px;box-shadow:1px 1px 3px rgba(0,0,0,.1);-webkit-transition:all .2s}.switch input{opacity:0;position:absolute;z-index:-1}.switch input:checked+span:after{left:50%;transition:all .2s}.switch.switch-lg span:after{height:23px;width:23px}";

    return (
      <span>
        <style>{styles}</style>
        <label className={classy} htmlFor="checkbox" style={this.props.style} {...omit(this.props, ["className", "onChange"])}>
          <input
            type="checkbox"
            onChange={this.handleChange}
            checked={this.state.checked}
            key={1}
            {...omit(this.props, ["type", "onChange"])}
          />
          <span key={2} />
        </label>
      </span>
    );
  }
}
