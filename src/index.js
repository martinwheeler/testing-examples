import React from "react";
import ReactDOM from "react-dom";
import { Link, Route } from "wouter";

import ExampleOne from "./examples/one.js";
import ExampleTwo from "./examples/two.js";
import ExampleThree from "./examples/three.js";
import ExampleFour from "./examples/four.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="nav-wrapper">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/example-1">Example 1</Link>
        </div>
        <div>
          <Link to="/example-2">Example 2</Link>
        </div>
        <div>
          <Link to="/example-3">Example 3</Link>
        </div>
        <div>
          <Link to="/example-4">Example 4</Link>
        </div>
      </div>
      <Route path="/">
        <h1>Hello Testing</h1>
      </Route>
      <Route path="/example-1">
        <ExampleOne />
      </Route>
      <Route path="/example-2">
        <ExampleTwo />
      </Route>
      <Route path="/example-3">
        <ExampleThree />
      </Route>
      <Route path="/example-4">
        <ExampleFour />
      </Route>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
