const AppleTree = require("./apple-tree");
const OrangeTree = require("./orange-tree");
const PearTree = require("./pear-tree");
const TreeGrove = require("./tree-grove");
const fs = require("fs");

const grove = new TreeGrove();

grove.addTrees(OrangeTree, 5, 20);
grove.addTrees(OrangeTree, 20, 20);
grove.addTrees(OrangeTree, 37, 10);
grove.addTrees(OrangeTree, 50, 20);

grove.addTrees(AppleTree, 0, 10);
grove.addTrees(AppleTree, 5, 10);
grove.addTrees(AppleTree, 20, 20);
grove.addTrees(AppleTree, 37, 20);
grove.addTrees(AppleTree, 50, 5);

grove.addTrees(PearTree, 0, 10);
grove.addTrees(PearTree, 20, 10);
grove.addTrees(PearTree, 37, 20);
grove.addTrees(PearTree, 50, 10);

function createSeasonsReport(quantitySeason, nameGrove) {
  fs.writeFileSync(`./reports/Отчет-${quantitySeason}.txt`, ``);
  for (let i = 0; i < quantitySeason; i++) {
    const allOrange = nameGrove.searchTypeTree(OrangeTree);
    const allMatureOrange = nameGrove.searchAgeMaturityTree(allOrange);
    const midOrange = (
      allOrange.reduce((acc, el) => acc + el.typeFruit.diameter, 0) /
      allOrange.length
    ).toFixed(1);
    const allFetusOrange =
      allMatureOrange.length *
      ((allOrange[0].maxFruits + allOrange[0].minFruits) / 2);

    const allApple = nameGrove.searchTypeTree(AppleTree);
    const allMatureApple = nameGrove.searchAgeMaturityTree(allApple);
    const midApple = (
      allApple.reduce((acc, el) => acc + el.typeFruit.diameter, 0) /
      allApple.length
    ).toFixed(1);
    const allFetusApple =
      allMatureApple.length *
      ((allApple[0].maxFruits + allApple[0].minFruits) / 2);

    const allPear = nameGrove.searchTypeTree(PearTree);
    const allMaturePear = nameGrove.searchAgeMaturityTree(allPear);
    const midPear = (
      allPear.reduce((acc, el) => acc + el.typeFruit.diameter, 0) /
      allPear.length
    ).toFixed(1);
    const allFetusPear =
      allMaturePear.length *
      ((allPear[0].maxFruits + allPear[0].minFruits) / 2);

    fs.appendFileSync(
      `./reports/Отчет-${quantitySeason}.txt`,
      `
Сезон ${i + 1}
- Апельсиновые деревья: ${allOrange.length} деревьев (незрелые: ${
        allOrange.length -
        allMatureOrange.length -
        allOrange.filter((el) => el.isAlive).length
      }, зрелые: ${allMatureOrange.length}, погибли: ${
        allOrange.filter((el) => el.isAlive).length
      })
  Должно произвести ${allFetusOrange} Апельсинов, среднего диаметра: ${midOrange}.

- Яблони: ${allApple.length} деревья (незрелые: ${
        allApple.length -
        allMatureApple.length -
        allApple.filter((el) => el.isAlive).length
      }, зрелые: ${allMatureApple.length}, погибли: ${
        allApple.filter((el) => el.isAlive).length
      })
  Должно произвести ${allFetusApple} яблок, среднего диаметра: ${midApple}.
  
- Грушевые деревья: ${allPear.length} деревья (незрелые: ${
        allPear.length -
        allMaturePear.length -
        allPear.filter((el) => el.isAlive).length
      }, зрелые: ${allMaturePear.length}, погибли: ${
        allPear.filter((el) => el.isAlive).length
      })
  Должно произвести ${allFetusPear} груш, среднего диаметра: ${midPear}.\n`
    );
    nameGrove.passGrowingSeasonTrees();
  }
}
createSeasonsReport(10, grove);
