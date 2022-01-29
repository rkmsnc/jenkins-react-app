import "./App.css";
import React, { useRef } from "react";
import { CSVLink, CSVDownload } from "react-csv";

const csvData = [
  ["firstname", "lastname", "email"],
  ["Ahmed", "Tomi", "ah@smthing.co.com"],
  ["Raed", "Labes", "rl@smthing.co.com"],
  ["Yezzi", "Min l3b", "ymin@cocococo.com"],
];

function CSVLinkApp() {
  const textInput = useRef(null); //reference
  const down = () => {
    console.log(textInput);
    textInput.current.link.click(); //automatically click trigger
  };
  return (
    <div className="App">
      <button onClick={down}>Down</button>
      <CSVLink
        style={{
          display: "none",
        }}
        ref={textInput}
        data={csvData}
      >
        Download me
      </CSVLink>
    </div>
  );
}

export default CSVLinkApp;
