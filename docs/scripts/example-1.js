import React, { Component } from 'react';
import RSGLabel from "../../lib/RSGLabel";
import RSGBox from "../../lib/RSGBox";
import RSGCheckbox from "../../lib/RSGCheckbox";

export default class Example extends Component{
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
        <div id="example1">
          <b>rsg-components <i>v2.0.13</i></b> <RSGLabel labelType={`s`}>stable</RSGLabel><br/>
          Any problems? <RSGCheckbox onChange={this.__handleChange.bind(this)}/> <br/>
          <b>Status:</b> { this.state.status }
        </div>
        Here we use <code>RSGLabel</code> and <code>RSGCheckbox</code> from <code>rsg-components</code><br/>
        Code of example: <br/>
        You have to import:
        <pre><code>
{`import React, { Component } from "react";
import ReactDOM from "react-dom";
import { RSGLabel, RSGBox, RSGCheckbox } from "../../lib/RSGLabel";`}
        </code></pre>
        Returned code in the render method of the react class:
        <pre><code>
{`<div id="example1">
  <b>rsg-components <i>v2.0.13</i></b> <RSGLabel labelType={"s"}>stable</RSGLabel><br/>
  Any problems? <RSGCheckbox onChange={this.__handleChange.bind(this)}/> <br/>
  <b>Status:</b> { this.state.status }
</div>`}
        </code></pre>
        The <code>constructor</code> method:
        <pre><code>
{`constructor(props){
  super(props);
  this.state = {
    checked: false,
    status: "Status missing"
  }
}`}
        </code></pre>
        The <code>__handleChange</code> method:
        <pre><code>
{`__handleChange(){
  this.setState({ checked: !this.state.checked });
  if(!this.state.checked){
    this.setState({ status: "If you have problems, please report an issue on Github" });
  }else{
    this.setState({ status: "No problems" });
  }
}`}
        </code></pre>
        Put this into the <code>head</code> of your <code>HTML</code> file (<a href="../pages/checkbox.html">Learn more</a>)
        <pre><code>
{`<link rel="stylesheet" href="./scripts/checkbox.css">`}
        </code></pre>

      </div>
    )
  }
}




