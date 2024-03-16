import React from "react";

export interface Puzzle {
  input: string;
}

type PuzzlePiece = {
  name?: string;
  children?: PuzzlePiece[];
};

export default function useSolvePuzzle({ input }: Puzzle) {
  const solution: JSX.Element = <></>;

  const puzzleObject = findPuzzlePieces(input);

  buildSolution(puzzleObject);
  // "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)";
  function findPuzzlePieces(input: string): PuzzlePiece[] {
    let currentPiece: PuzzlePiece = { name: "" };
    let puzzlePieces: PuzzlePiece[] = [];
    console.log("puzzlePieces:", puzzlePieces);
    console.log("input:", input);

    for (let i = 0; i < input.length; i++) {
      let charToEval = input[i];
      if (charToEval === " ") continue;
      if (charToEval === "(") {
        const closingParenIndex = findClosingParenIndex(input.slice(i));
        const subInput = input.slice(i + 1, closingParenIndex + i);
        const children = findPuzzlePieces(subInput);
        puzzlePieces.push({
          name: currentPiece.name,
          children: children,
        });
        i += closingParenIndex;
        currentPiece = { name: "" };
      } else if (charToEval === ",") {
        if (currentPiece.name !== "") {
          puzzlePieces.push({ name: currentPiece.name });
          currentPiece = { name: "" };
        }
      } else {
        currentPiece.name += charToEval;
      }
    }

    if (currentPiece.name !== "") {
      puzzlePieces.push({ name: currentPiece.name });
    }
    console.log("puzzlePieces:", puzzlePieces);
    return puzzlePieces;
  }

  function findClosingParenIndex(input: string): number {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "(") {
        count++;
      } else if (input[i] === ")") {
        count--;
        if (count === 0) {
          return i;
        }
      }
    }
    return -1;
  }
  function buildSolution(puzzlePieceArray: PuzzlePiece[]) {
    //iterate through puzzle array, if item is array,
    puzzlePieceArray.map((item, index) => {
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
