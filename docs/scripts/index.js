import React, { Component } from "react";
import ReactDOM from "react-dom";
import RSGLabel from "../../lib/RSGLabel";
import RSGBox from "../../lib/RSGBox";

class IndexPage extends Component {
  render(){
    return(
      <div>
        <h1>
          Hello to rsg-components! Cool front-end framework built for <a href="https://facebook.github.io/react/">React.js</a><br/>
        </h1>
        Get started with React - https://facebook.github.io/react/docs, view on GitHub: https://github.com/facebook/react <br/>
        <h2>Example:</h2>
        <div id="example1">
          <b>rsg-components <i>v2.0.13</i></b> <RSGLabel labelType={`s`}>stable</RSGLabel>
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