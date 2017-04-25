'use strict';

var React = require('react');
var _ = require('lodash');
var txt = "Initializing";
var style = "";

var RSGProgressBar = React.createClass({
  displayName: 'RSGProgressBar',

  render: function render() {
    if (!this.props.anim && !this.props.progressCount && typeof this.props.progressCount !== "number") {
      return React.DOM.div({}, React.DOM.b({style:{'color': 'red'}}, "You MUST set progressCount prop as number!!!"));
    }
    if (!this.props.id) {
      return React.DOM.div({}, React.DOM.b({style:{'color': 'red'}}, "You MUST set id of the RSGProgressBar component!"));
      console.error("You must set id of the RSGProgressBar component");
    }else{
      style = ".RSGProgressBar{  background: rgb(210, 215, 215);  box-shadow: inset 0 1.5px 3px rgb(150, 150, 150);  -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150);  border-radius: 3px;  height: 20px;} #" + this.props.id + "SPAN" + "{  background: rgb(51, 122, 183);  transition: width 1s;  width: 1%;  height: 20px;  border-radius: 5px;  text-align: center;  color: white; }"
    }
    // // // // //
    if (this.props.checkered === true) {
      style = ".RSGProgressBar { background: rgb(210, 215, 215); box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); border-radius: 3px; height: 20px; } .PP { background: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png); transition: width 1s; height: 20px; border-radius: 5px;text-align: center; color: white; }";
    }else if(this.props.checkered === "animated"){
      style = ".RSGProgressBar { background: rgb(210, 220, 220); box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); -webkit-box-shadow: inset 0 1.5px 3px rgb(150, 150, 150); border-radius: 3px; height: 20px; } @keyframes animatedBackground { from { background-position: 0 0; } to { background-position: 100% 0; } } .PP { background-image: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png); background-position: 0px 0px; background-repeat: repeat-x; animation: animatedBackground 75s linear infinite; transition: width 1s; height: 20px; border-radius: 5px; text-align: center; color: white; }";
    }
    var txt2 = this.props.text2 ? this.props.text2 : "";

    if (this.props.children && typeof this.props.children !== "string") {
      console.error("Please set only text for children");
    }

    txt = this.props.children && this.props.children.trim() ?
    this.props.children + " " + this.props.progressCount + "%" + " " + txt2
    : this.props.progressCount + "%" + " " + txt2;
    var PPwidth = this.props.progressCount + "%";

    if (this.props.anim === true && this.children) {
      console.warning('Now you are in "anim"-mode. Move your "children" to arguments in anim() function !!!');
    }

    var DIVProps = Object.assign({}, {className: 'RSGProgressBar', key: 5}, this.props ? this.props : {});
    style += ' .PP{ overflow: hidden; }';

    var arr = [
      React.DOM.style({
        key: 1
      }, style),
      React.DOM.div(
        DIVProps,
        React.DOM.div({
          className: 'PP',
          id: this.props.id + "SPAN",
          style: { width: PPwidth },
          key: 3
        }, txt)
      )
    ]

    return React.DOM.div({}, arr);
  }
});


exports['RSGProgressBar'] = RSGProgressBar;
module.exports = exports['RSGProgressBar'];