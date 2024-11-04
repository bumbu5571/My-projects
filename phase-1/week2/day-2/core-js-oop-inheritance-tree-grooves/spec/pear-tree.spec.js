const PearTree = require("../pear-tree");
const Pear = require("../pear");

describe("PearTree", () => {
  let tree;

  beforeEach(() => {
    tree = new PearTree(0, 0);
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
      expect(tree.height).toBe(2.5);
    });

    test("should cause the tree to produce pears", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.fruits.length).toBeGreaterThanOrEqual(175);
      expect(tree.fruits.length).toBeLessThanOrEqual(225);
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
      for (let i = 0; i < 41; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.isDead()).toBe(true);
    });
  });

  describe("hasFruits", () => {
    test("should return true if pears are on the tree", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.hasFruits()).toBe(true);
    });

    test("should return false if the tree has no pears", () => {
      tree.passGrowingSeason();
      expect(tree.hasFruits()).toBe(false);
    });
  });

  describe("pickAnFruits", () => {
    test("should return an orange from the tree", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      const pear = tree.pickAnFruits();
      expect(pear).toBeInstanceOf(Pear);
    });

    test("the returned orange should no longer be on the tree", () => {
      for (let i = 0; i < 5; i++) {
        tree.passGrowingSeason();
      }
      const initialCount = tree.fruits.length;
      tree.pickAnFruits();
      expect(tree.fruits.length).toBe(initialCount - 1);
    });

    test("should raise an error if the tree has no pears", () => {
      expect(() => {
        tree.pickAnFruits();
      }).toThrow(new Error("This tree has no fruits"));
    });
  });
});
