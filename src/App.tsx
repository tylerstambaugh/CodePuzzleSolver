import React from "react";
import CodePuzzleSolver from "./CodePuzzleSolver";
import redRoverLogo from "./public/Red_Rover__Logo.jpg";
import "./App.css";

export default () => (
  <div className="container">
    <img
      src={redRoverLogo}
      alt="Red Rover Logo"
      width="250"
      height="200"
      style={{ paddingTop: "15px" }}
    />
    <h1>Code Challenge</h1>

    <CodePuzzleSolver />
  </div>
);
