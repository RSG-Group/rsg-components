'use strict';

var React = require('react');
var _ = require('lodash');

var RSGLabel = React.createClass({
  displayName: 'RSGLabel',

  render: function render() {
    var RSGStyle = {};
    var children = this.props.children;

    RSGStyle.color = 'rgb(10, 10, 10)';
    RSGStyle.fontFamily = 'monospace';
    RSGStyle.fontSize = '.975em';
    RSGStyle.padding = '.175em .3em';
    RSGStyle.borderRadius = '.235em';

    switch(this.props.labelType) {
      case "de":
        RSGStyle.background = 'rgb(195, 195, 195)';
        break;
      case "s":
        RSGStyle.background = 'rgb(85, 180, 90)';
        break;
      case "w": 
        RSGStyle.background = 'rgb(255, 150, 25)';
        break;
      case "d":
        RSGStyle.background = 'rgb(220, 75, 75)';
        break;
      default:
        RSGStyle.background = 'rgb(195, 195, 195)';
    }

    RSGStyle = Object.assign(RSGStyle, this.props.style);

    if(this.props.color) RSGStyle.color = this.props.color;
    if(this.props.opacity) RSGStyle.opacity = this.props.opacity;

    return React.DOM.span(
      Object.assign({style: RSGStyle}, _.omit(this.props, ['style', 'labelType'])),
      children
    );
  }
});


exports['RSGLabel'] = RSGLabel;
module.exports = exports['RSGLabel'];