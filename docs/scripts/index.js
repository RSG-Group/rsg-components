import React, { Component } from "react";
import ReactDOM from "react-dom";
import RSGLabel from "../../lib/RSGLabel";
import RSGBox from "../../lib/RSGBox";
import RSGCheckbox from "../../lib/RSGCheckbox";

class IndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      checked: false,
      status: "Status missing"
    }
  }

  __handleChange(){
    this.setState({ checked: !this.state.checked });
    if(!this.state.checked){
      this.setState({ status: "If you have problems, please report an issue on Github" });
    }else{
      this.setState({ status: "No problems" });
    }
  }

  render(){
    return(
      <div>
        <h1>
          Hello to rsg-components! Cool front-end framework built for <a href="https://facebook.github.io/react/">React.js</a><br/>
        </h1>
        Get started with React - https://facebook.github.io/react/docs, view on GitHub: https://github.com/facebook/react <br/>
        <h2>Example:</h2>
        <div id="example1">
          <b>rsg-components <i>v2.0.13</i></b> <RSGLabel labelType={`s`}>stable</RSGLabel><br/>
          Any problems? <RSGCheckbox onChange={this.__handleChange.bind(this)}/> <br/>
          <b>Status:</b> { this.state.status }
        </div>
        Here we use <code>RSGLabel</code> and <code>RSGCheckbox</code> from <code>rsg-components</code> 
      </div>
    );
  }
}

var app = document.querySelector("#app");
ReactDOM.render(
  <IndexPage/>,
  app
);