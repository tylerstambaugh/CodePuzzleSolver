import React from "react";
import CodePuzzleSolver from "./CodePuzzleSolver";

import "./App.css";

export default () => (
  <div className="container">
    <img
      src="https://mma.prnewswire.com/media/2164330/Red_Rover__Logo.jpg"
      alt="Red Rover Logo"
      width="250"
      height="200"
      style={{ paddingTop: "15px" }}
    />
    <h1>Code Challenge</h1>

    <CodePuzzleSolver />
  </div>
);
