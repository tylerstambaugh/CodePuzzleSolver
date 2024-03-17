import React, { useState } from "react";
import SolvePuzzle from "./SolvePuzzle";
import { JsxElement } from "typescript";

export default function CodePuzzleSolver() {
  const [solution, setSolution] = useState<JSX.Element | null>();
  const [orderedSolution, setOrderedSolution] = useState<JSX.Element | null>();
  const puzzle =
    "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)";

  function handleSolvePuzzle() {
    setSolution(SolvePuzzle(puzzle));
    setOrderedSolution(SolvePuzzle(puzzle, true));
  }

  return (
    <>
      <div>
        <p>
          {" "}
          String to solve: "(id, name, email, type(id, name, customFields(c1,
          c2, c3)), externalId)"
        </p>
      </div>

      <div>
        <button onClick={handleSolvePuzzle}>Click to solve</button>
      </div>

      <div>
        <h3>Solution:</h3>
        <p>
          {!!solution
            ? solution
            : `Puzzle hasn't been solved yet. Please click the button.`}
        </p>
      </div>
      <div>
        <h3>Ordered Solution</h3>
        <p>
          {!!orderedSolution
            ? orderedSolution
            : `Ordered Puzzle hasn't been solved yet.  Please click the button.`}
        </p>
      </div>
      <div>
        <h4>
          Thank you for considering me for employment. For more info, please
          check out:
        </h4>
        <ul className="">
          <li>
            <a href="https://www.linkedin.com/in/tyler-stambaugh-b274a59/">
              LinkedIn{" "}
            </a>
          </li>
          <li>
            <a href="https://github.com/tylerstambaugh">Github </a>
          </li>
          <li>
            <a href="https://tylerstambaugh.github.io/ProfessionalPortfolio/">
              Professional Profile{" "}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
