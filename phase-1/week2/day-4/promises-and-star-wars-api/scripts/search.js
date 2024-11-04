// Методы, которые могут пригодиться:
// starWars.searchCharacters(query),
// starWars.searchPlanets(query),
// starWars.searchSpecies(query).
// starWars.getCharactersById(id),
// starWars.getPlanetsById(id),
// starWars.getSpeciesById(id)

// Тут ваш код.

const btn = document.querySelector("#byQueryBtn");

btn.addEventListener("click", async () => {
  const input = document.querySelector(".is-large");
  const divHeader = document.querySelector(".message-header p");
  const divBody = document.querySelector(".message-body");
  const divResult = document.querySelector("#result-container");
  const spinner = document.querySelector(".spinner");
  const selectSerch = document.querySelector("#byQuerySelect");

  let text = input.value;
  if (text !== "") {
    if (divResult.style.visibility !== "hidden")
      divResult.style.visibility = "hidden";

    spinner.style.visibility = "visible";
    let data = null;
    let planetId = "";
    let dataPlanet = null;
    let speciesId = "";
    let dataspecies = null;

    switch (selectSerch.value) {
      case "Characters":
        data = await starWars.searchCharacters(text);
        planetId = data.results[0].homeworld.match(/\d+/gm).join("");
        dataPlanet = await starWars.getPlanetsById(planetId);
        console.log(data.results[0].species[0])
        /* speciesId = data.results[0].species[0].match(/\d+/gm).join("");
        dataspecies = await starWars.getSpeciesById(speciesId); */
        break;

      case "Planets":
        data = await starWars.searchPlanets(text);
        break;

      case "Species":
        data = await starWars.searchSpecies(text);
        planetId = data.results[0].homeworld.match(/\d+/gm).join("");
        dataPlanet = await starWars.getPlanetsById(planetId);
        break;
    }
    console.log(data);
    let outText = "";

    for (let [key, val] of Object.entries(data.results[0])) {
      if (Array.isArray(val) && val.length > 0) {
        if (key === "species" && val !== null) {
          outText += `${key}: ${dataspecies.name}\n`;
        } else {
          outText += `${key}:\n${val
            .map((el) => "\u00A0\u00A0\u00A0\u00A0" + `${el}`)
            .join("\n")}\n`;
        }
      } else if (key === "homeworld" && val !== null) {
        outText += `${key}: ${dataPlanet.name}\n`;
      } else outText += `${key}: ${val}\n`;
    }

    spinner.style.visibility = "hidden";
    divResult.style.visibility = "visible";
    divHeader.innerText = data.results[0].name;
    divBody.innerText = outText;
    input.value = "";
  }
});