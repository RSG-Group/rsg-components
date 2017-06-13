// @flow
import React from "react";
import { createComponent } from "react-fela";

export default function RSGFormBasic(props: {}): React.createElement {
  const styles: Object = () => ({
    inputStyle: () => ({
      border: "1px solid rgb(128, 128, 128)",
      borderRadius: "3.5px",
      background: "rgb(250, 250, 250)",
      height: "22.5px",
      paddingLeft: "4.5px",
      paddingRight: "3px",
    }),
    buttonStyle: () => ({
      background: "rgb(50, 120, 180)",
      color: "white",
      border: "1px solid rgb(30, 100, 160)",
      borderRadius: "3px",
      padding: "5px 10px",
      fontSize: "16px",
    }),
    seperator1: () => ({ height: "5px" }),
    seperator2: () => ({ height: "7.5px" }),
  });

  const inputStyled = createComponent(styles.inputStyle, "input");
  const buttonStyled = createComponent(styles.buttonStyle, "input");
  const separatorOne = createComponent(styles.seperator1);
  const separatorTwo = createComponent(styles.seperator2);

  return (
    <form {...props}>
      Username:
      <inputStyled name="user" type="text" key={1} />
      <separatorOne key={2} />
      Password:
      <inputStyled name="password" type="password" key={3} />
      <separatorTwo key={4} />
      <buttonStyled key={5} type="submit" />
    </form>
  );
}
