'use strict';

var React = require('react');
var _ = require('lodash');

var RSGDiv = React.createClass({
  displayName: 'RSGDiv',

  render: function render() {
    var RSGStyle = {};
    var children = this.props.children;

    RSGStyle = Object.assign(RSGStyle);

    RSGStyle.width = '95%';
    RSGStyle.height = '20px';
    RSGStyle.color = 'rgb(10, 10, 10)';
    RSGStyle.background = 'rgb(230, 230, 230)';
    RSGStyle.fontFamily = 'Verdana, Geneva, sans-serif';

    if(this.props.color) RSGStyle.color = this.props.color;
    if(this.props.width) RSGStyle.width = this.props.width;
    if(this.props.opacity) RSGStyle.opacity = this.props.opacity;

    return React.DOM.div(
      Object.assign({style: RSGStyle}, _.omit(this.props, ['style'])),
      React.DOM.span({
        style: {
          'marginLeft': '15px',
          'fontSize': '13.5px',
          background: 'rgb(230, 230, 230)',
          'verticalAlign': 'middle',
        }
      }, children)
    );
  }
});


exports['RSGDiv'] = RSGDiv;
module.exports = exports['RSGDiv'];