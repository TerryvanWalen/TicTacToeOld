type EmptyMarking = '';
type Marking = 'X' | 'O' | EmptyMarking;
type Board = Marking[][];

export type Game = {
  board: Board;
  turn: number;
};

// TODO: Export to configuration
export const MIN_GRID_SIZE = 3;
export const MAX_GRID_SIZE = 9;

function createBoard(gridSize: number): Board {
  return Array.from({ length: gridSize }, () => Array.from({ length: gridSize }, () => ``));
}

export function createGame(gridSize: number): Game {
  function assertValidGridSize(gridSize: number) {
    if (gridSize < MIN_GRID_SIZE) {
      throw new Error(`GridSize should be greater than ${MIN_GRID_SIZE - 1}`);
    }
    if (MAX_GRID_SIZE < gridSize) {
      throw new Error(`GridSize should be lower than ${MAX_GRID_SIZE + 1}`);
    }
  }

  {
    assertValidGridSize(gridSize);
    return {
      board: createBoard(gridSize),
      turn: 0,
    };
  }
}
