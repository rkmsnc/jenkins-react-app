import "./App.css";
import React, { useRef, useState, useMemo, Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
const Hello = () => <h1>World Main</h1>;
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <button data-testid="button" disabled></button>
        <button data-testid="button2"></button>
        <button data-testid="empty">s</button>
        <Hello />
      </div>
    );
  }
}

export default App;
