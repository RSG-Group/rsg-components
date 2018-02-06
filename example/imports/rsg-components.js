import { Component, createElement } from 'react';
import React__default from 'react';
import { omit } from 'lodash';
import { StyleSheet, css } from 'aphrodite-jss';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

function Box(a){var b=StyleSheet.create({mainDiv:_extends({height:a.height,width:a.width,color:a.color,opacity:a.opacity,background:a.background,padding:'3px 7px',fontFamily:'Verdana, Geneva, sans-serif'},a.style),mainPre:{fontSize:'12px',verticalAlign:'middle',height:a.height,width:a.width}});return React__default.createElement('div',_extends({className:css(b.mainDiv)},omit(a,['style','background','color','opacity','width','height'])),React__default.createElement('pre',{className:css(b.mainPre)},a.children))}Box.defaultProps={color:'rgb(10, 10, 10)',opacity:'1',style:{},width:'95%',background:'rgb(230, 230, 230)'};

var sizes={s:{padding:'1px 3px',fontSize:'12px'},l:{padding:'5px 7px',fontSize:'18px'},xl:{padding:'9px 11px',fontSize:'20px'},xxl:{padding:'12px 14px',fontSize:'25px'},default:{padding:'5px 4px',fontSize:'16px'}};function Button(a){var b=a.sizes?a.sizes:'default';var c='5px 4px';'default'!==b&&(c=sizes[b].padding);var d={elevated:{"&:hover":{boxShadow:'2px 2px 2px #888888'},"&:active":{position:'relative',top:'1px',left:'1px',boxShadow:'none'}},ripple:{position:'relative',overflow:'hidden',transform:'translate3d(0, 0, 0)',"&:after":{content:'""',display:'block',position:'absolute',width:'100%',height:'100%',top:0,left:0,pointerEvents:'none',backgroundImage:'radial-gradient(circle, #FFF 10%, transparent 10%)',backgroundRepeat:'no-repeat',backgroundPosition:'50%',transform:'scale(10,10)',opacity:'0',transition:'transform .5s, opacity 1s'},"&:active:after":{transform:'scale(0,0)',opacity:'.2',transition:'0s'}}},e=StyleSheet.create(function(){var e={};return a.animationType&&(e=d[a.animationType]),{mainButton:_extends({border:a.border,borderRadius:'3px',background:a.background,color:a.color,opacity:a.opacity,padding:c},a.style,{fontSize:a.fontSize?a.fontSize:sizes[b].fontSize,fontStyle:a.fontStyle},e,{cursor:a.cursor})}}());return React__default.createElement('button',_extends({className:css(e.mainButton)},omit(a,['style','background','color','fontSize','fontStyle','opacity','sizes','animationType','cursor','border'])),a.children)}Button.defaultProps={background:'rgb(50, 120, 180)',color:'white',opacity:'1',style:{},fontSize:void 0,fontStyle:void 0,sizes:'default',cursor:'default',border:'1px solid rgb(30, 100, 160)',animationType:!1};

function Label(a){var b=StyleSheet.create({mainSpan:_extends({color:a.color,fontFamily:'monospace',fontSize:'.975em',padding:'.175em .3em',borderRadius:'.235em',background:{success:'rgb(85, 180, 90)',warn:'rgb(255, 150, 25)',danger:'rgb(220, 75, 75)',default:'rgb(195, 195, 195)',lime:'rgb(20, 255, 0)',aqua:'rgb(0, 255, 255)'}[a.labelType],opacity:a.opacity},a.style)});return React__default.createElement('span',_extends({className:css(b.mainSpan)},omit(a,['style','labelType'])),a.children)}Label.defaultProps={labelType:'default',color:'rgb(10, 10, 10)',style:{},opacity:'1'};

function FormBasic(a){var b=StyleSheet.create({inputStyle:{border:'1px solid rgb(128, 128, 128)',borderRadius:'3.5px',background:'rgb(250, 250, 250)',height:'22.5px',paddingLeft:'4.5px',paddingRight:'3px'},buttonStyle:{background:'rgb(50, 120, 180)',color:'white',border:'1px solid rgb(30, 100, 160)',borderRadius:'3px',padding:'5px 10px',fontSize:'16px'},seperator1:{height:'5px'},seperator2:{height:'7.5px'}});return React__default.createElement('form',a,'Username:',React__default.createElement('input',{className:css(b.inputStyle),name:'user',type:'text',key:1}),React__default.createElement('div',{className:css(b.seperator1),key:2}),'Password:',React__default.createElement('input',{className:css(b.inputStyle),name:'password',type:'password',key:3}),React__default.createElement('div',{className:css(b.seperator2),key:4}),React__default.createElement('button',{className:css(b.buttonStyle),key:5,type:'submit'}))}

function Transition(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'',b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'ease',c=arguments[2];if(!b)return console.error('Transition: You must set time!'),console.warn('syntax: Transition(style, time, type)'),void console.log('For more info - Docs: \nhttps://github.com/RSG-Group/rsg-components/wiki/RSGTransition');c||(console.info('If you don\'t want to set type, please don\'t set anything!\nThe type by default is ease...'),console.info('Example: Transition("background", "5s") - without type.\nActually type will be set to ease by default.\ntype === "ease"'),console.log('For more info - Docs: \nhttps://github.com/RSG-Group/rsg-components/wiki/RSGTransition'),console.info('Don\'t worry! This isn\'t error. This is just tip.'));return{transition:a+' '+b+' '+c}}

var compiledCSS='/*  Checkbox CSS code import. */\n.switch input:checked + span {\n  background-color: #5d9cec;\n  border-color: #5d9cec;\n  transition: all 0.5s;\n}\n.switch .switch-lg span {\n  width: 50px;\n  height: 25px;\n}\n.switch span {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 100px;\n  transition: all 0.5s;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1) inset;\n  vertical-align: middle;\n}\n.switch * {\n  cursor: pointer;\n}\n.switch span::after {\n  content: "";\n  position: absolute;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #ddd;\n  border-radius: 400px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.switch input {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n.switch input:checked + span::after {\n  left: 50%;\n  transition: all 0.2s;\n}\n.switch .switch-lg span::after {\n  height: 23px;\n  width: 23px;\n}\n/* ProgressBar CSS code import. */\n.ProgressBar {\n  background: #d2d7d7;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n.PP {\n  overflow: hidden;\n  background: #337ab7;\n  transition: width 1s;\n  width: 1%;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n.ProgressBar_animated {\n  background: #d2dcdc;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n@keyframes animatedBackground {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 100% 0;\n  }\n}\n.PP_animated {\n  background-image: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);\n  background-position: 0 0;\n  background-repeat: repeat-x;\n  animation: animatedBackground 75s linear infinite;\n  overflow: hidden;\n  transition: width 1s;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n.ProgressBar_checkered {\n  background: #d2d7d7;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n.PP_checkered {\n  overflow: hidden;\n  background: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);\n  transition: width 1s;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n';function ReactInvalidPropException(a){this.name='ReactInvalidPropException';var b=a.type,c=a.prop,d=a.expectedValue,e=a.actualValue;'invalid-type'===b&&d!==void 0&&e!==void 0&&'string'==typeof c?this.message='ProgressBar has incorrectly recieved a '+e+' for the prop "'+c+'" when it expected a '+d+'.':'unassigned-prop'===a.type&&'string'==typeof c?this.message='ProgressBar has not recieved the required prop "'+c+'". Click "OK" to rectify.':'dual-props'===a.type&&(this.message='ProgressBar has recieved 2 incompatible props, '+c[0]+' and '+c[1]+'. Please resolve the issue.');}function ProgressBar(a){if(!a.progressCount||'number'!=typeof a.progressCount)throw new ReactInvalidPropException({prop:'progressCount',type:'invalid-type',expectedValue:'number',actualValue:_typeof(a.progressCount)});if(!a.id)throw new ReactInvalidPropException({prop:'id',type:'unassigned-prop'});var b='';if(!0===a.checkered?b='_checkered':'animated'===a.checkered&&(b='_animated'),a.children&&a.text)throw new ReactInvalidPropException({prop:['props.children','props.text'],type:'dual-props'});var c=0<a.children.length?a.progressCount+'% '+a.children:a.progressCount+'% '+a.text;return!0===a.anim&&a.children&&console.error('Now you are in "anim"-mode. Move your "children" to arguments in anim() function !!!'),React__default.createElement('div',null,React__default.createElement('style',null,compiledCSS),React__default.createElement('div',_extends({className:'ProgressBar'+b,key:5},a),React__default.createElement('div',{className:'PP'+b,id:a.id,style:{width:a.progressCount+'%'},key:3},c)))}ProgressBar.defaultProps={anim:!1,checkered:!1,text:''};

var compiledCSS$1='/*  Checkbox CSS code import. */\n.switch input:checked + span {\n  background-color: #5d9cec;\n  border-color: #5d9cec;\n  transition: all 0.5s;\n}\n.switch .switch-lg span {\n  width: 50px;\n  height: 25px;\n}\n.switch span {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 100px;\n  transition: all 0.5s;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1) inset;\n  vertical-align: middle;\n}\n.switch * {\n  cursor: pointer;\n}\n.switch span::after {\n  content: "";\n  position: absolute;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #ddd;\n  border-radius: 400px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.switch input {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n.switch input:checked + span::after {\n  left: 50%;\n  transition: all 0.2s;\n}\n.switch .switch-lg span::after {\n  height: 23px;\n  width: 23px;\n}\n/* ProgressBar CSS code import. */\n.ProgressBar {\n  background: #d2d7d7;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n.PP {\n  overflow: hidden;\n  background: #337ab7;\n  transition: width 1s;\n  width: 1%;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n.ProgressBar_animated {\n  background: #d2dcdc;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n@keyframes animatedBackground {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 100% 0;\n  }\n}\n.PP_animated {\n  background-image: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);\n  background-position: 0 0;\n  background-repeat: repeat-x;\n  animation: animatedBackground 75s linear infinite;\n  overflow: hidden;\n  transition: width 1s;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n.ProgressBar_checkered {\n  background: #d2d7d7;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n.PP_checkered {\n  overflow: hidden;\n  background: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);\n  transition: width 1s;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n';function Checkbox(b){var c=b.large?'switch':'switch switch-lg',d=omit(b,['className','onChange']);return React__default.createElement('div',null,React__default.createElement('style',null,compiledCSS$1),React__default.createElement('label',_extends({className:c,style:b.style},d),React__default.createElement('input',_extends({type:'checkbox',onChange:b.onChange,checked:b.checked,key:1},omit(b,['type','onChange']))),React__default.createElement('span',{key:2})))}Checkbox.defaultProps={large:!1};

var Clock=function(a){function b(){var a,c,d,e;classCallCheck(this,b);for(var f=arguments.length,g=Array(f),h=0;h<f;h++)g[h]=arguments[h];return e=(c=(d=possibleConstructorReturn(this,(a=b.__proto__||Object.getPrototypeOf(b)).call.apply(a,[this].concat(g))),d),d.state={sec:6*new Date().getSeconds(),min:6*new Date().getMinutes(),hour:30*new Date().getHours()+0.5*new Date().getMinutes()},d.componentWillMount=function(){setInterval(function(){d.setState({sec:6*new Date().getSeconds(),min:6*new Date().getMinutes(),hour:30*new Date().getHours()+0.5*new Date().getMinutes()});},1e3);},c),possibleConstructorReturn(d,e)}var c=Math.PI;return inherits(b,a),createClass(b,[{key:'sine',value:function sine(a,b,d){return a+b*Math.sin(c/180*d)}},{key:'cosine',value:function cosine(a,b,d){return a+b*Math.cos(c/180*d)}},{key:'render',value:function render(){var a=this.props,b=a.size,c=this.state,d=new Date().getSeconds().toString(),e=new Date().getMinutes().toString(),f=new Date().getHours().toString(),g=StyleSheet.create({mainSpan:_extends({fontSize:b/2.5,fontFamily:'Arial, Veranda',"-webkit-touch-callout":'none',"-webkit-user-select":'none',"-khtml-user-select":'none',"-moz-user-select":'none',"-ms-user-select":'none',userSelect:'none',cursor:'default'},a.style)});if(95>b)return 20>=b&&(g.mainSpan.style.fontSize=8.5),createElement('span',{className:css(g.mainSpan)},(2>f.length?'0':'')+f,':',(2>e.length?'0':'')+e,a.seconds&&':'+((2>d.length?'0':'')+d));var h=this.cosine,j=this.sine,k=b/2-5,l=b/2,m=b/2,i={x1:l,y1:m,x2:j(l,0.375*b,180-c.sec),y2:h(m,0.375*b,180-c.sec)},n={x1:l,y1:m,x2:j(l,0.35*b,180-c.min),y2:h(m,0.35*b,180-c.min)},o={x1:l,y1:m,x2:j(l,0.25*b,180-c.hour),y2:h(m,0.25*b,180-c.hour)};return createElement('div',_extends({},omit(a,['style','children']),{style:_extends({display:'inline-block'},a.style)}),createElement('svg',{width:b,height:b},'Your device isn\'t support SVG. Please update your browser or OS...',createElement('circle',{cx:l,cy:m,r:k,style:{stroke:'black',fill:'rgba(250, 237, 205, 0.25)'}}),createElement('line',_extends({style:{stroke:'gray',strokeWidth:b/100}},i)),createElement('line',_extends({style:{stroke:'black',strokeWidth:b/60}},n)),createElement('line',{x1:n.x2,y1:n.y2,x2:j(l,0.25*b,180-(c.min-4)),y2:h(m,0.25*b,180-(c.min-4)),style:{stroke:'black',strokeWidth:b/60}}),createElement('line',{x1:n.x2,y1:n.y2,x2:j(l,0.25*b,180-(c.min+4)),y2:h(m,0.25*b,180-(c.min+4)),style:{stroke:'black',strokeWidth:b/60}}),createElement('line',_extends({style:{stroke:'brown',strokeWidth:b/32}},o)),createElement('circle',{cx:l,cy:m,r:b/30,style:{fill:'blue',opacity:'0.975'}}),Array(12).fill('').map(function(a,c){return createElement('line',{x1:j(l,k,180+30*c),y1:h(m,k,180+30*c),x2:j(l,0==c%3?k-0.085*b:k-0.065*b,180+30*c),y2:h(m,0==c%3?k-0.085*b:k-0.065*b,180+30*c),style:{stroke:'black',strokeWidth:'2px'},key:c})})))}}]),b}(Component);Clock.defaultProps={size:200};

function Input(a){var b=StyleSheet.create({inputStyle:{border:'1px solid rgb(128, 128, 128)',borderRadius:'3.5px',background:'rgb(250, 250, 250)',height:'22.5px',paddingLeft:'4.5px',paddingRight:'3px'}});return React__default.createElement('input',_extends({className:css(b.inputStyle)},a))}

export { Box, Button, Label, FormBasic, Transition, ProgressBar, Checkbox, Clock, Input };
//# sourceMappingURL=rsg-components.js.map
