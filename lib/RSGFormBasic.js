'use strict';

const React = require('react');
const RSGButton = require('./RSGButton');
const _ = require('lodash');

const RSGFormBasic = React.createClass({
  displayName: 'RSGFormBasic',

  render: function render() {
    const inputStyle = {
      border: "1px solid rgb(128, 128, 128)",
      borderRadius: "3.5px", background: "rgb(250, 250, 250)", height: "22.5px",
      paddingLeft: "4.5px", paddingRight: "3px"
    }

    const ch = [
      "Username: ", React.DOM.input({ name: "user", type: "text", key: 1, style: inputStyle }),
      React.DOM.div({ key: 2, style: { height: "5px" }}), "Password: ", 
      React.DOM.input({ name: "password", type: "password", key: 3, style: inputStyle }),
      React.DOM.div({ key: 4, style:{ height: "7.5px" }}), React.DOM.input({ key: 5, type: "submit", style: {
        background: "rgb(50, 120, 180)", color: "white", border: "1px solid rgb(30, 100, 160)",
        borderRadius: "3px", padding: "5px 10px", fontSize: "16px"
      }})
    ];

    return React.DOM.form(
      this.props,
      ch
    );
  }
});


exports['RSGFormBasic'] = RSGFormBasic;
module.exports = exports['RSGFormBasic'];