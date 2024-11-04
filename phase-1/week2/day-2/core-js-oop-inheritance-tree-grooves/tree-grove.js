class TreeGrove {
  constructor() {
    this.trees = [];

  }

  addTrees(name, age, quantity) {
    for (let i = 0; i < quantity; i++) {
      this.trees.push(new name(age));
    }
  }

  searchTypeTree(typeTree) {
    return this.trees.filter((el) => el instanceof typeTree);
  }

  searchAgeMaturityTree(array) {
    return array.filter((el) => el.isMature() && !el.isAlive);
  }

  passGrowingSeasonTrees() {
    this.trees.map((el) => el.passGrowingSeason());
  }
}

module.exports = TreeGrove;
