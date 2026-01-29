import { BoxSelect, Brush, Eraser, Move, PaintBucket } from "lucide-react";

export function floodFill({ grid, startRow, startCol, gridSize, fillColor }) {
  const next = grid.map((row) => [...row]);
  const targetColor = next[startRow][startCol];

  if (targetColor === fillColor) return null;

  const stack = [[startRow, startCol]];

  while (stack.length) {
    const [row, col] = stack.pop();

    if (row < 0 || row >= gridSize || col < 0 || col >= gridSize) continue;
    if (next[row][col] !== targetColor) continue;

    next[row][col] = fillColor;

    stack.push([row + 1, col]);
    stack.push([row - 1, col]);
    stack.push([row, col + 1]);
    stack.push([row, col - 1]);
  }

  return next;
}

export const tools = [
  { id: "brush", icon: Brush, label: "Brush" },
  { id: "eraser", icon: Eraser, label: "Eraser" },
  { id: "fill", icon: PaintBucket, label: "Fill" },
  { id: "pan", icon: Move, label: "Pan" },
  { id: "select", icon: BoxSelect, label: "Select" },
];
