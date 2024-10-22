require("../game");
const { isAlive, generate } = window.game;

describe("game of life", () => {
  describe("isAlive algorithm", () => {
    test("dead cell with no neighbours", () => {
      expect(isAlive(0, 0)).toEqual(0);
    });
    test("dead cell with 3 neighbours should return 1", () => {
      expect(isAlive(0, 3)).toEqual(1);
    });
    test("live cell with 0 neighbours should return 0", () => {
      expect(isAlive(1, 0)).toEqual(0);
    });
    test("live cell with 2 neighbours should return 1", () => {
      expect(isAlive(1, 2)).toEqual(1);
    });
    describe("generate function", () => {
      test("should create an array of x * x", () => {
        expect(generate(1)).toEqual([0]);
        expect(generate(2)).toEqual([0, 0, 0, 0]);
      });
    });
  });
});
