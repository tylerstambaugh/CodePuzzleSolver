import React, {
  JSXElementConstructor,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { JsxElement } from "typescript";
import useSolvePuzzle from "./useSolvePuzzle";

export default function CodePuzzleSolver() {
  const [solutions, setSolutions] = useState<JSX.Element | null>();
  const puzzle =
    "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)";
  function handleSolvePuzzle() {
    const { solution } = useSolvePuzzle({ input: puzzle });
    setSolutions(solution);
  }

  useEffect(() => {
    // console.log("solutions2:", solutions);
  }, [solutions]);

  return (
    <>
      <div>
        <h1>Code Puzzle Solver</h1>
      </div>

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
        <p>Solution:</p>
        <p>
          {!!solutions
            ? solutions
            : `Puzzle hasn't been solved yet. Please click the button.`}
        </p>
      </div>
    </>
  );
}
