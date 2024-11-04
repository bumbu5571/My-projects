const OrangeTree = require("../orange-tree");
const Orange = require("../orange");

// Test-Driven Development
describe("OrangeTree", () => {
  let tree;

  beforeEach(() => {
    tree = new OrangeTree(0, 0);
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

  // Убери 'x' из `xdescribe`, чтобы включить эти тесты.
  describe("passGrowingSeason", () => {
    test("should change the tree age", () => {
      tree.passGrowingSeason();
      expect(tree.age).toBe(1);
    });

    test("should make the tree grow", () => {
      // This should be more explicit. How much should the tree grow?
      tree.passGrowingSeason();
      expect(tree.height).toBe(2.5);
    });

    // If the tree is old enough to bear fruit
    test("should cause the tree to produce oranges", () => {
      for (let i = 0; i < 6; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.fruits.length).toBeGreaterThanOrEqual(100);
      expect(tree.fruits.length).toBeLessThanOrEqual(300);
    });
  });

  describe("isMature", () => {
    test("returns true if tree is old enough to bear fruit", () => {
      for (let i = 0; i < 6; i++) {
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
      for (let i = 0; i < 101; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.isDead()).toBe(true);
    });
  });

  describe("hasOranges", () => {
    test("should return true if oranges are on the tree", () => {
      for (let i = 0; i < 6; i++) {
        tree.passGrowingSeason();
      }
      expect(tree.hasOranges()).toBe(true);
    });

    test("should return false if the tree has no oranges", () => {
      tree.passGrowingSeason();
      expect(tree.hasOranges()).toBe(false);
    });
  });

  describe("pickAnOrange", () => {
    test("should return an orange from the tree", () => {
      for (let i = 0; i < 6; i++) {
        tree.passGrowingSeason();
      }
      const orange = tree.pickAnOrange();
      expect(orange).toBeInstanceOf(Orange);
    });

    test("the returned orange should no longer be on the tree", () => {
      for (let i = 0; i < 6; i++) {
        tree.passGrowingSeason();
      }
      const initialCount = tree.fruits.length;
      tree.pickAnOrange();
      expect(tree.fruits.length).toBe(initialCount - 1);
    });

    test("should raise an error if the tree has no oranges", () => {
      expect(() => {
        tree.pickAnOrange();
      }).toThrow(new Error("This tree has no oranges"));
    });
  });
});
