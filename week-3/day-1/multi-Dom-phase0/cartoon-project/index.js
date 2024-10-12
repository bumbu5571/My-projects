const database = [
  {
    name: "Iron Man",
    bio: `Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics.`,
    path: "./img/iron-man.png",
  },
  {
    name: "Jake",
    bio: `Jake the Dog is a main character in the American television
     series Adventure Time created by Pendleton Ward.`,
    path: "./img/jake.png",
  },
  {
    name: "Mario",
    bio: `Mario is a fictional character in the Mario video game,
     owned by Nintendo and created by Miyamoto`,
    path: "./img/mario.png",
  },
  {
    name: "Scream",
    bio: `Scream is a 1996 American comedy slasher film directed by Wes Craven and written by Kevin Williamson.`,
    path: "./img/scream.png",
  },
  {
    name: "Homer Simpson",
    bio: `Homer Jay Simpson is a fictional character and the protagonist 
    of the American animated sitcom The Simpsons.`,
    path: "./img/simpson.png",
  },
  {
    name: "Stormtrooper",
    bio: `Stormtroopers, nicknamed "bucketheads"
     and—after the Battle of Endor—Remnant Stormtroopers.`,
    path: "./img/stormtrooper.png",
  },
];

const newDiv = document.createElement("div");
newDiv.className = "card";
const newImg = document.createElement("img");
newImg.src = database[0].path;
newDiv.append(newImg);
const childDiv = document.createElement("div");
childDiv.className = "card-body";
newDiv.append(childDiv);
const newH5 = document.createElement("h5");
newH5.innerText = database[0].name;
childDiv.append(newH5);
const newP = document.createElement("p");
newP.innerText = database[0].bio;
childDiv.append(newP);
document.body.append(newDiv);

database.forEach((item) => {
  const divElem = document.querySelector(".card");
  const allNameHeroesInBody = document.querySelectorAll("h5");
  let isHeroeInBody = false;

  for (let nameHeroe of allNameHeroesInBody) {
    isHeroeInBody = item.name === nameHeroe.innerText;
  }
  if (!isHeroeInBody) {
    let newElem = divElem.cloneNode(true);
    newElem.children[0].src = item.path;
    newElem.children[1].children[0].innerText = item.name;
    newElem.children[1].children[1].innerText = item.bio;
    document.body.append(newElem);
  }
});
