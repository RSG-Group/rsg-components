// @flow
import React from "react";
import { StyleSheet, css } from "aphrodite-jss";

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
      <input className={css(styles.inputStyle)} name="user" type="text" key={1} />
      <div className={css(styles.seperator1)} key={2} />
      Password:
      <input className={css(styles.inputStyle)} name="password" type="password" key={3} />
      <div className={css(styles.seperator2)} key={4} />
      <button className={css(styles.buttonStyle)} key={5} type="submit" />
    </form>
  );
}
