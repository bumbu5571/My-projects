/* const OrangeTree = require("./orange-tree");
const Orange = require("./orange"); */

const orange = new Orange();
const tree = new OrangeTree(0,0);
const reportsBlock = document.getElementById("reports");

// Let seasons pass until the tree is ready to bear fruit.
while (!tree.isMature()) {
  tree.passGrowingSeason();
}

// Report yearly harvest information for the lifetime of the tree.
while (!tree.isDead()) {
  tree.passGrowingSeason();
  let harvestedOranges = [];

  while (tree.hasOranges()) {
    harvestedOranges.push(tree.pickAnOrange());
  }

  let averageOrangeDiameter = (harvestedOranges.reduce((acc,el) => acc + el.diameter, 0) / harvestedOranges.length).toFixed(2);
  // averageOrangeDiameter = Need to calculate the average diameter for the harvest.

  const report = document.createElement("div");
  report.innerHTML = `
      <b>HARVEST_REPORT</b>
      <br/>
      YEAR ${tree.age} REPORT
      <br/>
      Height: ${tree.height} feet.
      <br/>
      Harvest: ${harvestedOranges.length} oranges with an average
      <br/>
      diameter of  ${averageOrangeDiameter} inches.
      <br/>
      <br/>
      -----------------------
      <br/>
      <br/>
    `;
  reportsBlock.appendChild(report);
}

const lastReport = document.createElement("div");
lastReport.innerHTML = "<h2>Alas, the tree, she is dead!</h2>";
reportsBlock.appendChild(lastReport);
