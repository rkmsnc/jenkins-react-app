import "./App.css";
import React, { useRef, useState } from "react";

function UseRefApp() {
  const textInput = useRef(null); //reference
  const [count, setCount] = useState(0);
  const random = () => {
    textInput.current.value = parseInt(textInput.current.value) + 1;
  };
  console.log("Rendered..");
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={random}>Time Update</button>
      <br />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count Update
      </button>
      <br />
      <input
        type="text"
        // onChange={() => setCount(count)}
        ref={textInput}
        value={count}
        readOnly
      />
    </div>
  );
}

export default UseRefApp;
