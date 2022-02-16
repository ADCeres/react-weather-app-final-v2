import React from "react";
import Form from "./Form.js";
import "./App.css";

function App() {
  return (
    <div className="border">
      <div className="container">
        <Form defaultCity="Phoenix" />
      </div>
    </div>
  );
}

export default App;
