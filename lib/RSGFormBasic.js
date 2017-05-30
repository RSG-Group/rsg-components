import React from "react";

export default function RSGFormBasic(props) {
  const inputStyle = {
    border: "1px solid rgb(128, 128, 128)",
    borderRadius: "3.5px",
    background: "rgb(250, 250, 250)",
    height: "22.5px",
    paddingLeft: "4.5px",
    paddingRight: "3px",
  };

  return (
    <form {...props}>
      Username:
      <input name="user" type="text" key={1} style={inputStyle} />
      <div key={2} style={{ height: "5px" }} />
      Password:
      <input name="password" type="password" key={3} style={inputStyle} />
      <div key={4} style={{ height: "7.5px" }} />
      <input
        key={5}
        type="submit"
        style={{
          background: "rgb(50, 120, 180)",
          color: "white",
          border: "1px solid rgb(30, 100, 160)",
          borderRadius: "3px",
          padding: "5px 10px",
          fontSize: "16px",
        }}
      />
    </form>
  );
}
