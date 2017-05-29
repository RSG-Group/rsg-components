import { Component, DOM } from "react";

export default class RSGFormBasic extends Component {
  render() {
    const inputStyle = {
      border: "1px solid rgb(128, 128, 128)",
      borderRadius: "3.5px",
      background: "rgb(250, 250, 250)",
      height: "22.5px",
      paddingLeft: "4.5px",
      paddingRight: "3px",
    };

    const ch = [
      "Username: ", DOM.input({ name: "user", type: "text", key: 1, style: inputStyle }),
      DOM.div({ key: 2, style: { height: "5px" } }), "Password: ",
      DOM.input({ name: "password", type: "password", key: 3, style: inputStyle }),
      DOM.div({ key: 4, style: { height: "7.5px" } }), DOM.input({ key: 5,
        type: "submit",
        style: {
          background: "rgb(50, 120, 180)",
          color: "white",
          border: "1px solid rgb(30, 100, 160)",
          borderRadius: "3px",
          padding: "5px 10px",
          fontSize: "16px",
        } }),
    ];

    return DOM.form(
      this.props,
      ch,
    );
  }
}
