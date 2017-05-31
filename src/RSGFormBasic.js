// @flow
import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function RSGFormBasic(props: {}): React.createElement {
  const styles: Object = StyleSheet.create({
    inputStyle: {
      border: "1px solid rgb(128, 128, 128)",
      borderRadius: "3.5px",
      background: "rgb(250, 250, 250)",
      height: "22.5px",
      paddingLeft: "4.5px",
      paddingRight: "3px",
    },
    buttonStyle: {
      background: "rgb(50, 120, 180)",
      color: "white",
      border: "1px solid rgb(30, 100, 160)",
      borderRadius: "3px",
      padding: "5px 10px",
      fontSize: "16px",
    },
    seperator1: { height: "5px" },
    seperator2: { height: "7.5px" },
  });

  return (
    <form {...props}>
      Username:
      <input name="user" type="text" key={1} className={css(styles.inputStyle)} />
      <div key={2} style={css(styles.seperator1)} />
      Password:
      <input name="password" type="password" key={3} className={css(styles.inputStyle)} />
      <div key={4} style={css(styles.seperator2)} />-
      <input key={5} type="submit" className={css(styles.buttonStyle)} />
    </form>
  );
}
