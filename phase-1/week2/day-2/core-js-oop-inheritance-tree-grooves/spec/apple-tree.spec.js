const AppleTree = require("../apple-tree");
const Apple = require("../apple");

describe("AppleTree", () => {
  let tree;

  beforeEach(() => {
    tree = new AppleTree(0, 0);
  });

  describe("age", () => {
    test("has an age", () => {
      expect(tree.age).toBe(0);
    });
  });

  describe("height", () => {
    test("has a height", () => {
      expect(tree.height).toBe(0);
    });
  });

  describe("passGrowingSeason", () => {
    test("should change the tree age", () => {
      tree.passGrowingSeason();
      expect(tree.age).toBe(1);
    });

    test("should make the tree grow", () => {
      tree.passGrowingSeason();
      expect(tree.height).toBe(2);
    });

    test("should cause the tree to produce apple", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.fruits.length).toBeGreaterThanOrEqual(400);
      expect(tree.fruits.length).toBeLessThanOrEqual(600);
    });
  });

  describe("isMature", () => {
    test("returns true if tree is old enough to bear fruit", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.isMature()).toBe(true);
    });

    test("returns false if tree is not old enough to bear fruit", () => {
      expect(tree.isMature()).toBe(false);
    });
  });

  describe("isDead", () => {
    test("should return false for an alive tree", () => {
      expect(tree.isDead()).toBe(false);
    });

    test("should return true for a dead tree", () => {
      for (let i = 0; i < 46; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.isDead()).toBe(true);
    });
  });

  describe("hasFruits", () => {
    test("should return true if apple are on the tree", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.hasFruits()).toBe(true);
    });

    test("should return false if the tree has no apple", () => {
      tree.passGrowingSeason();
      expect(tree.hasFruits()).toBe(false);
    });
  });

  describe("pickAnFruits", () => {
    test("should return an apple from the tree", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      const apple = tree.pickAnFruits();
      expect(apple).toBeInstanceOf(Apple);
    });

    test("the returned apple should no longer be on the tree", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      const initialCount = tree.fruits.length;
      tree.pickAnFruits();
      expect(tree.fruits.length).toBe(initialCount - 1);
    });

    test("should raise an error if the tree has no apple", () => {
      expect(() => {
        tree.pickAnFruits();
      }).toThrow(new Error("This tree has no fruits"));
    });
  });
});