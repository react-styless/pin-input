import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PinInput from "@react-styless/pin-input";

function App() {
  return (
    <div className="App">
      <PinInput>
        <input type="text" />
      </PinInput>
    </div>
  );
}

export default App;
