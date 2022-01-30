import "./App.css";
import React, { useRef, useState, useMemo, Component } from "react";
// import { CalculateFactorial } from "./CalculateFactorial";
import ErrorBoundary from "./ErrorBoundary";
const Hello = () => <h1>Hello World Main</h1>;
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
