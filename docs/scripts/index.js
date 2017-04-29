import React, { Component } from "react";
import ReactDOM from "react-dom";
import Example from './example-1';

class IndexPage extends Component {
  render(){
    return(
      <div>
        <h1>
          Hello to rsg-components! Cool front-end framework built for <a href="https://facebook.github.io/react/">React.js</a><br/>
        </h1>
        <h2>What's inside <code>rsg-components</code>?</h2>
        <ul>
          <li>
            Beautiful components, like <a href="https://github.com/RSG-Group/rsg-components/wiki/RSGButton">RSGButton</a>, <a href="https://github.com/RSG-Group/rsg-components/wiki/RSGLabel">RSGLabel</a> and others
          </li>
          <li>Modified props</li>
          <li>And cool functions, like <a href="https://github.com/RSG-Group/rsg-components/wiki/RSGTransition">RSGTransition()</a></li>
        </ul>
        <hr/>
        Get started with React - https://facebook.github.io/react/docs, view on GitHub: https://github.com/facebook/react <br/>
        <h2>Component transform</h2>
        View how <code>rsg-components</code> transform the new components to standart <code>React</code> and <code>HTML</code> components <a href="./pages/transforming.html">here</a>
        
        <h2>Example with <code>rsg-components</code>:</h2>
        <Example/>
      </div>
    );
  }
}

var app = document.querySelector("#app");
ReactDOM.render(
  <IndexPage/>,
  app
);