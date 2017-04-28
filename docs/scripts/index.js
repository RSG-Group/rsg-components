import React, { Component } from "react";
import ReactDOM from "react-dom";

class IndexPage extends Component {
  render(){
    return(
      <div>
        <h1>Hello to rsg-components - React.js components with beautiful styles and modified props!</h1>
        <div>
          <h1>Get started!</h1>
        </div>
      </div>
    );
  }
}

var app = document.querySelector("#app");
ReactDOM.render(
  <IndexPage/>,
  app
);