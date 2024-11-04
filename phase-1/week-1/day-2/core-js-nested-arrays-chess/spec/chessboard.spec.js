const {generateChessboard, renderChessboard} = require('../chessboard')

describe("Board", function () {

  let board;

  beforeEach(function () {
    board = generateChessboard();
  });

  describe("placePiece", function () {
    it("should return the correct piece for a given starting position", function () {
      expect(board[0][0]).toEqual('Ч Ладья');
      expect(board[1][1]).toEqual('Ч Пешка');
      expect(board[7][7]).toEqual('Б Ладья');
      expect(board[5][4]).toEqual(null);
    });
  });

  describe("init", function () {
    it("should generate an 8x8 array", function () {
      expect(board.length).toEqual(8);
      for (let i = 0; i < board.length; i++) {
        expect(board[i].length).toEqual(8);
      }
    });
  });

  describe("renderChessboard", function () {
    it("should return a string", function () {
      expect(typeof renderChessboard(board)).toEqual('string');
    });

    it("should have an emoji (first element is `♜`)", function () {
      expect(renderChessboard(board)[0]).toEqual('♜');
    });

    it("should have an emoji (sixth element is `♞`)", function () {
      expect(renderChessboard(board)[6]).toEqual('♞');
    });
  });
});
