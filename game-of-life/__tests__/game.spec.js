require("../game");
const { isAlive } = window.game;

describe("game of life", () => {
  describe("isAlive algorithm", () => {
    test("dead cell with no neighbours", () => {
      expect(isAlive(0, 0)).toEqual(0);
    });
    test("dead cell with 3 neighbours should return 1", () => {
      expect(isAlive(0, 3)).toEqual(1);
    })
  });
});
