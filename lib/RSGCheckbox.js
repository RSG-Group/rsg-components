'use strict';

var React = require('react');

var RSGCheckbox = React.createClass({
  displayName: 'RSGCheckbox',

  render: function render() {
    var classes = "switch";
    if(this.props.RSGType && this.props.RSGType === "lg"){
      classes += " switch-lg"
    }

    var input = React.DOM.input(
      Object.assign(
        {type: 'checkbox', key: 1}, 
        _.omit(this.props, ['type'])
      )
    );

    var span = React.DOM.span({key: 2});
    var style1 = this.props.style1;

    var label = React.DOM.label(
      Object.assign(
        {className: classes, style: style1}, 
        _.omit(this.props, ['className'])
      ),
      [
        input,
        span
      ]
    );

    return label;

  }
});

exports['RSGCheckbox'] = RSGCheckbox;
module.exports = exports['RSGCheckbox'];