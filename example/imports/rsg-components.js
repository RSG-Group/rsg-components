import React from 'react';
import { omit } from 'lodash';
import { StyleSheet, css } from 'aphrodite-jss';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





















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

function RSGBox(a){var b=StyleSheet.create({mainDiv:_extends({color:a.color,height:a.height,opacity:a.opacity,background:a.background,padding:'0px 3px 0px 3px',fontFamily:'Verdana, Geneva, sans-serif',width:a.width},a.style),mainSpan:{fontSize:'12px',verticalAlign:'middle'}});return React.createElement('div',_extends({className:css(b.mainDiv)},omit(a,['style','background','color','opacity','width','height'])),React.createElement('span',{className:css(b.mainSpan)},a.children))}RSGBox.defaultProps={color:'rgb(10, 10, 10)',opacity:'1',style:{},width:'95%',background:'rgb(230, 230, 230)'};

var sizes={s:function s(){return{padding:'1px 3px',fontSize:'12px'}},l:function l(){return{padding:'5px 7px',fontSize:'18px'}},xl:function xl(){return{padding:'9px 11px',fontSize:'20px'}},xxl:function xxl(){return{padding:'12px 14px',fontSize:'25px'}},default:function _default(){return{padding:'5px 4px',fontSize:'16px'}}};function RSGButton(a){var b=a.sizes?a.sizes:'default';var c='5px 4px';'default'!==b&&(c=sizes[b]().padding);var d={elevated:{"&:hover":{boxShadow:'2px 2px 2px #888888'},"&:active":{position:'relative',top:'1px',left:'1px',boxShadow:'none'}},ripple:{transition:'all .15s ease-out',"&:hover":{"-moz-filter":'brightness(117%)',"-webkit-filter":'brightness(117%)',"-o-filter":'brightness(117%)',"-ms-filter":'brightness(117%)',filter:'brightness(117%)'},"&:active":{borderRadius:'50%',background:'rgba(255, 255, 255, 0.35)'}}},e='ripple'===a.animationType?{"&:active":{background:a.background,"-moz-filter":'brightness(125%)',"-webkit-filter":'brightness(125%)',"-o-filter":'brightness(125%)',"-ms-filter":'brightness(125%)',filter:'brightness(125%)'}}:{},f=StyleSheet.create(function(){var f={};return a.animationType&&(f=d[a.animationType]),{mainButton:_extends({border:a.border,borderRadius:'3px',background:a.background,color:a.color,opacity:a.opacity,padding:c},a.style,{fontSize:a.fontSize?a.fontSize:sizes[b]().fontSize,fontStyle:a.fontStyle},f,{cursor:a.cursor}),div:_extends({transition:'all .2s ease-out',display:'inline-block'},e)}}());return React.createElement('div',{className:css(f.div)},React.createElement('button',_extends({className:css(f.mainButton)},omit(a,['style','background','color','fontSize','fontStyle','opacity','sizes','animationType','cursor','border'])),a.children))}RSGButton.defaultProps={background:'rgb(50, 120, 180)',color:'white',opacity:'1',style:{},fontSize:void 0,fontStyle:void 0,sizes:'default',cursor:'default',border:'1px solid rgb(30, 100, 160)',animationType:!1};

function RSGLabel(a){var b=StyleSheet.create({mainSpan:_extends({color:a.color,fontFamily:'monospace',fontSize:'.975em',padding:'.175em .3em',borderRadius:'.235em',background:{success:'rgb(85, 180, 90)',warn:'rgb(255, 150, 25)',danger:'rgb(220, 75, 75)',default:'rgb(195, 195, 195)',lime:'rgb(20, 255, 0)',aqua:'rgb(0, 255, 255)'}[a.labelType],opacity:a.opacity},a.style)});return React.createElement('span',_extends({className:css(b.mainSpan)},omit(a,['style','labelType'])),a.children)}RSGLabel.defaultProps={labelType:'default',color:'rgb(10, 10, 10)',style:{},opacity:'1'};

function RSGFormBasic(a){var b=StyleSheet.create({inputStyle:{border:'1px solid rgb(128, 128, 128)',borderRadius:'3.5px',background:'rgb(250, 250, 250)',height:'22.5px',paddingLeft:'4.5px',paddingRight:'3px'},buttonStyle:{background:'rgb(50, 120, 180)',color:'white',border:'1px solid rgb(30, 100, 160)',borderRadius:'3px',padding:'5px 10px',fontSize:'16px'},seperator1:{height:'5px'},seperator2:{height:'7.5px'}});return React.createElement('form',a,'Username:',React.createElement('input',{className:css(b.inputStyle),name:'user',type:'text',key:1}),React.createElement('div',{className:css(b.seperator1),key:2}),'Password:',React.createElement('input',{className:css(b.inputStyle),name:'password',type:'password',key:3}),React.createElement('div',{className:css(b.seperator2),key:4}),React.createElement('button',{className:css(b.buttonStyle),key:5,type:'submit'}))}

function RSGTransition(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:'',b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'ease',c=arguments[2];if(!b)return console.error('RSGTransition: You must set time!'),console.warn('syntax: RSGTransition(style, time, type)'),void console.log('For more info - Docs: \nhttps://github.com/RSG-Group/rsg-components/wiki/RSGTransition');c||(console.info('If you don\'t want to set type, please don\'t set anything!\nThe type by default is ease...'),console.info('Example: RSGTransition("background", "5s") - without type.\nActually type will be set to ease by default.\ntype === "ease"'),console.log('For more info - Docs: \nhttps://github.com/RSG-Group/rsg-components/wiki/RSGTransition'),console.info('Don\'t worry! This isn\'t error. This is just tip.'));return{transition:a+' '+b+' '+c}}

var compiledCSS='/*  Checkbox CSS code import. */\n.switch input:checked + span {\n  background-color: #5d9cec;\n  border-color: #5d9cec;\n  transition: all 0.5s;\n}\n.switch .switch-lg span {\n  width: 50px;\n  height: 25px;\n}\n.switch span {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 100px;\n  transition: all 0.5s;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1) inset;\n  vertical-align: middle;\n}\n.switch * {\n  cursor: pointer;\n}\n.switch span::after {\n  content: "";\n  position: absolute;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #ddd;\n  border-radius: 400px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.switch input {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n.switch input:checked + span::after {\n  left: 50%;\n  transition: all 0.2s;\n}\n.switch .switch-lg span::after {\n  height: 23px;\n  width: 23px;\n}\n/* ProgressBar CSS code import. */\n.RSGProgressBar {\n  background: #d2d7d7;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n.PP {\n  overflow: hidden;\n  background: #337ab7;\n  transition: width 1s;\n  width: 1%;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n.RSGProgressBar_animated {\n  background: #d2dcdc;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n@keyframes animatedBackground {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 100% 0;\n  }\n}\n.PP_animated {\n  background-image: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);\n  background-position: 0 0;\n  background-repeat: repeat-x;\n  animation: animatedBackground 75s linear infinite;\n  overflow: hidden;\n  transition: width 1s;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n.RSGProgressBar_checkered {\n  background: #d2d7d7;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n.PP_checkered {\n  overflow: hidden;\n  background: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);\n  transition: width 1s;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n';function ReactInvalidPropException(a){this.name='ReactInvalidPropException';var b=a.type,c=a.prop,d=a.expectedValue,e=a.actualValue;'invalid-type'===b&&d!==void 0&&e!==void 0&&'string'==typeof c?this.message='RSGProgressBar has incorrectly recieved a '+e+' for the prop "'+c+'" when it expected a '+d+'.':'unassigned-prop'===a.type&&'string'==typeof c?this.message='RSGProgressBar has not recieved the required prop "'+c+'". Click "OK" to rectify.':'dual-props'===a.type&&(this.message='RSGProgressBar has recieved 2 incompatible props, '+c[0]+' and '+c[1]+'. Please resolve the issue.');}function RSGProgressBar(a){if(!a.progressCount||'number'!=typeof a.progressCount)throw new ReactInvalidPropException({prop:'progressCount',type:'invalid-type',expectedValue:'number',actualValue:_typeof(a.progressCount)});if(!a.id)throw new ReactInvalidPropException({prop:'id',type:'unassigned-prop'});var b='';if(!0===a.checkered?b='_checkered':'animated'===a.checkered&&(b='_animated'),a.children&&a.text)throw new ReactInvalidPropException({prop:['props.children','props.text'],type:'dual-props'});var c=0<a.children.length?a.progressCount+'% '+a.children:a.progressCount+'% '+a.text;return!0===a.anim&&a.children&&console.error('Now you are in "anim"-mode. Move your "children" to arguments in anim() function !!!'),React.createElement('div',null,React.createElement('style',null,compiledCSS),React.createElement('div',_extends({className:'RSGProgressBar'+b,key:5},a),React.createElement('div',{className:'PP'+b,id:a.id,style:{width:a.progressCount+'%'},key:3},c)))}RSGProgressBar.defaultProps={anim:!1,checkered:!1,text:''};

var compiledCSS$1='/*  Checkbox CSS code import. */\n.switch input:checked + span {\n  background-color: #5d9cec;\n  border-color: #5d9cec;\n  transition: all 0.5s;\n}\n.switch .switch-lg span {\n  width: 50px;\n  height: 25px;\n}\n.switch span {\n  position: relative;\n  display: inline-block;\n  width: 40px;\n  height: 20px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 100px;\n  transition: all 0.5s;\n  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.1) inset;\n  vertical-align: middle;\n}\n.switch * {\n  cursor: pointer;\n}\n.switch span::after {\n  content: "";\n  position: absolute;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #ddd;\n  border-radius: 400px;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s;\n}\n.switch input {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n.switch input:checked + span::after {\n  left: 50%;\n  transition: all 0.2s;\n}\n.switch .switch-lg span::after {\n  height: 23px;\n  width: 23px;\n}\n/* ProgressBar CSS code import. */\n.RSGProgressBar {\n  background: #d2d7d7;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n.PP {\n  overflow: hidden;\n  background: #337ab7;\n  transition: width 1s;\n  width: 1%;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n.RSGProgressBar_animated {\n  background: #d2dcdc;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n@keyframes animatedBackground {\n  from {\n    background-position: 0 0;\n  }\n  to {\n    background-position: 100% 0;\n  }\n}\n.PP_animated {\n  background-image: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);\n  background-position: 0 0;\n  background-repeat: repeat-x;\n  animation: animatedBackground 75s linear infinite;\n  overflow: hidden;\n  transition: width 1s;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n.RSGProgressBar_checkered {\n  background: #d2d7d7;\n  box-shadow: inset 0 1.5px 3px #969696;\n  -webkit-box-shadow: inset 0 1.5px 3px #969696;\n  border-radius: 3px;\n  height: 20px;\n}\n.PP_checkered {\n  overflow: hidden;\n  background: url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);\n  transition: width 1s;\n  height: 20px;\n  border-radius: 5px;\n  text-align: center;\n  color: white;\n}\n';function RSGCheckbox(b){var c=b.large?'switch':'switch switch-lg',d=omit(this.props,['className','onChange']);return React.createElement('div',null,React.createElement('style',null,compiledCSS$1),React.createElement('label',_extends({className:c,htmlFor:'checkbox',style:b.style},d),React.createElement('input',_extends({type:'checkbox',onChange:b.onChange,checked:b.checked,key:1},omit(this.props,['type','onChange']))),React.createElement('span',{key:2})))}RSGCheckbox.defaultProps={large:!1};

export { RSGBox, RSGButton, RSGLabel, RSGFormBasic, RSGTransition, RSGProgressBar, RSGCheckbox };
//# sourceMappingURL=rsg-components.js.map
