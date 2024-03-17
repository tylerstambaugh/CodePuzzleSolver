import React from "react";

type PuzzlePiece = {
  name?: string;
  children?: PuzzlePiece[];
};

export default function SolvePuzzle(input: string, ordered: boolean = false) {
  const puzzleObject: PuzzlePiece[] = findPuzzlePieces(input);

  // "(id, name, email, type(id, name, customFields(c1, c2, c3)), externalId)";
  function findPuzzlePieces(input: string): PuzzlePiece[] {
    let currentPiece: PuzzlePiece = { name: "" };
    let puzzlePieces: PuzzlePiece[] = [];

    for (let i = 0; i < input.length; i++) {
      let charToEval = input[i];
      if (charToEval === " ") continue;
      if (charToEval === "(") {
        const closingParenIndex = findClosingParenIndex(input.slice(i));
        const childrenInput = input.slice(i + 1, closingParenIndex + i);
        const children = findPuzzlePieces(childrenInput);
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

  function buildSolution(
    puzzlePieceArray: PuzzlePiece[],
    level: number = 0,
    ordered: boolean = false
  ): JSX.Element {
    let solutionElements: JSX.Element[] = [];

    if (ordered) {
      puzzlePieceArray.sort((a, b) =>
        (a.name || "").localeCompare(b.name || "")
      );
    }

    puzzlePieceArray.forEach((item, index) => {
      const marginLeft = `${level * 10}px`;

      if (item.children && item.children.length > 0) {
        solutionElements.push(
          <div key={index} style={{ marginLeft }}>
            {item.name ? <div>- {item.name}</div> : null}
            {buildSolution(item.children, level + 1, ordered)}
          </div>
        );
      } else {
        solutionElements.push(
          <div key={index} style={{ marginLeft }}>
            - {item.name}
          </div>
        );
      }
    });

    return <>{solutionElements}</>;
  }

  return buildSolution(puzzleObject, 0, ordered);
}
