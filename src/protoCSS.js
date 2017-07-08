// @flow
// Import React.
import React from "react";

// Define prop types.
type propTypes = {
  children: Array<React.createElement>,
}

// Export our lone and sole component..
export default ({ children }: propTypes) => (
  <div>
    <style>{".PP,.switch span{vertical-align:middle}.switch input:checked+span{background-color:#5d9cec;border-color:#5d9cec;transition:all .5s}.switch .switch-lg span{width:50px;height:25px}.switch span{position:relative;display:inline-block;width:40px;height:20px;background-color:#fff;border:1px solid #ddd;border-radius:100px;transition:all .5s;box-shadow:1px 2px 3px rgba(0,0,0,.1) inset}.switch *{cursor:pointer}.switch span::after{content:\"\";position:absolute;background-color:#fff;top:0;left:0;height:18px;width:18px;border:1px solid #ddd;border-radius:400px;box-shadow:1px 1px 3px rgba(0,0,0,.1);-webkit-transition:all .2s;transition:all .2s}.switch input{opacity:0;position:absolute;z-index:-1}.switch input:checked+span::after{left:50%;transition:all .2s}.switch .switch-lg span::after{height:23px;width:23px}.RSGProgressBar{background:#d2d7d7;box-shadow:inset 0 1.5px 3px #969696;-webkit-box-shadow:inset 0 1.5px 3px #969696;border-radius:3px;height:20px}@keyframes animatedBackground{from{background-position:0 0}to{background-position:100% 0}}.PP{background-image:url(https://raw.githubusercontent.com/RSG-Group/rsg-components/master/images/Progress.png);background-position:0 0;background-repeat:repeat-x;animation:animatedBackground 75s linear infinite;transition:width 1s;width:1%;height:20px;border-radius:5px;text-align:center;color:#fff"}</style>
    {children}
  </div>
);
