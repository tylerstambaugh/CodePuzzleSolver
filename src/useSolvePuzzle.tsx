import React from "react";
import { JsxElement } from "typescript";

export interface Puzzle {
  input: string;
}

export default function useSolvePuzzle({ input }: Puzzle) {
  const solution: React.ReactNode = <></>;

  return { solution };
}
