import React from "react";

export interface Puzzle {
  input: string;
}

export default function useSolvePuzzle({ input }: Puzzle) {
  let puzzleArray: (string | string[])[] = [];
  const solution: JSX.Element = <></>;

  const puzzleObject = buildPuzzleObject(input);

  buildSolution(puzzleObject);

  function buildPuzzleObject(input: string) {
    let letterOrNumber: RegExp = /[a-zA-Z0-9]/;
    let currentArray: string[] = [];
    let currentWord = "";

    for (let i = 0; i < input.length; i++) {
      //iterate through each letter.

      //if it's a letter or number, add it to the current word.

      //if it's a comma, add the current work to the array and reset the current word.

      //if it is an open parenthesis, start working on a new array.

      //if it is a close parenthesis, add the current array to the puzzle array array and reset the current array.
      console.log("puzzleArray:", puzzleArray);

      return puzzleObject;
    }
  }

  function buildSolution(puzzleArray: string[][]) {
    //iterate through puzzle array, if item is array,
    puzzleArray.map((item, index) => {
      if (Array.isArray(item)) {
        solution: <>
          {solution}
          <div key={index} style={{ marginLeft: "20px" }}>
            {item}
          </div>
        </>;
      }
      //console.log("solution:", solution);
    });
  }

  return { solution };
}
