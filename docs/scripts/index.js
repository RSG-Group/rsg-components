import React, { Component } from "react";
import ReactDOM from "react-dom";

class IndexPage extends Component {
  render(){
    return(
      <div>
        <h1>Hello to rsg-components!</h1>
      </div>
    );
  }
}

var app = document.querySelector("#app");
ReactDOM.render(
  <IndexPage/>,
  app
);