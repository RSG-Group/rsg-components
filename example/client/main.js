/* eslint-disable react/prop-types,import/first */
// Import MongoDB adapter.
import { Mongo } from "meteor/mongo";
// Our database.
const Database = new Mongo.Collection("database");
Database.insert({ username: "mongoo", password: "dbbb" });
// Import RSGComponents and React.
import React, { Component } from "react";
import { render } from "react-dom";
import { createContainer } from "meteor/react-meteor-data";
// Please do not use the following lines in your code. Import RSGComponents from the module.
import { StyleSheet, css } from "aphrodite-jss";
import { RSGButton, RSGBox, RSGLabel } from "../imports/rsg-components";

const RSGFormBasic = (props) => {
  const styles: Object = StyleSheet.create({
    inputStyle: {
      border: "1px solid rgb(128, 128, 128)",
      borderRadius: "3.5px",
      background: "rgb(250, 250, 250)",
      height: "22.5px",
      paddingLeft: "4.5px",
      paddingRight: "3px",
    },
    seperator1: { height: "5px" },
    seperator2: { height: "7.5px" },
  });

  return (
    <div>
      Username: {/* */}
      <input className={css(styles.inputStyle)} name="user" type="text" key={1} onChange={e => props.onField1Change(e.target.value)} />
      <div className={css(styles.seperator1)} key={2} />
      Password: {/* */}
      <input className={css(styles.inputStyle)} name="password" type="password" key={3} onChange={e => props.onField2Change(e.target.value)} />
      <div className={css(styles.seperator2)} key={4} />
    </div>
  );
};

class App extends Component {
  static handleClick() {
    Database.remove({});
    Database.insert(this.state);
  }

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }

  render() {
    return (
      <div>
        <RSGFormBasic
          onField1Change={e => this.setState({ username: e })}
          onField2Change={e => this.setState({ password: e })}
        />
        <RSGButton onClick={this.handleClick}>Submit</RSGButton>
        <br />
        <RSGBox>
          {`Username on server: ${this.props.db} /
          Password on server: ${this.props.db}`}
        </RSGBox>
        <RSGLabel labelType="s">Database in sync with server.</RSGLabel>
      </div>
    );
  }
}

const AppContainer = createContainer(() => ({
  db: Database.find(),
}), App);

render(<AppContainer />, document.getElementById("app"));
