import { createGame, MAX_GRID_SIZE, MIN_GRID_SIZE } from '.';

describe(`TicTacToe`, () => {
  describe(`create`, () => {
    test(`create game of default size`, () => {
      const gridSize = 3;
      const game = createGame(gridSize);
      expect(game.board).toHaveLength(gridSize);
      expect(game.board[0]).toHaveLength(gridSize);
    });

    test(`create game executes when grid is within allowed sizes`, () => {
      expect(() => createGame(MIN_GRID_SIZE)).not.toThrow();
      expect(() => createGame(MAX_GRID_SIZE)).not.toThrow();
    });

    test(`create game throws when grid is not within allowed sizes`, () => {
      expect(() => createGame(MIN_GRID_SIZE - 1)).toThrow();
      expect(() => createGame(MAX_GRID_SIZE + 1)).toThrow();
    });
  });
});
