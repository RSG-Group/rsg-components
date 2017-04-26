import React, { Component } from "react";
import ReactDOM from "react-dom";

class IndexPage extends Component {
  render(){
    return(
      <div>
        Hello!
      </div>
    );
  }
}

var app = document.querySelector("#app");
ReactDOM.render(
  <IndexPage/>,
  app
);