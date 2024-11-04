const someInput = document.querySelector(".value-user");
const btnInput = document.querySelector(".add-value");
const form = document.querySelector("form");
const main = document.querySelector("main");
const olLeft = document.querySelectorAll(".value")[0];
const olRight = document.querySelectorAll(".value")[1];
const bntClear = document.querySelector(".clear-list");
let userData;

function translitText(text) {
  let result = "";

  const replaceSymbol = {
    А: "A",
    Б: "B",
    В: "V",
    Г: "G",
    Д: "D",
    Е: "E",
    Ё: "JO",
    Ж: "ZH",
    З: "Z",
    И: "I",
    Й: "JJ",
    К: "K",
    Л: "L",
    М: "M",
    Н: "N",
    О: "O",
    П: "P",
    Р: "R",
    С: "S",
    Т: "T",
    У: "U",
    Ф: "F",
    Х: "KH",
    Ц: "C",
    Ч: "CH",
    Ш: "SH",
    Щ: "SHH",
    Ъ: '"',
    Ы: "Y",
    Ь: "\u0027",
    Э: "EH",
    Ю: "JU",
    Я: "JA",
    а: "a",
    б: "b",
    в: "v",
    г: "g",
    д: "d",
    е: "e",
    ё: "jo",
    ж: "zh",
    з: "z",
    и: "i",
    й: "jj",
    к: "k",
    л: "l",
    м: "m",
    н: "n",
    о: "o",
    п: "p",
    р: "r",
    с: "s",
    т: "t",
    у: "u",
    ф: "f",
    х: "kh",
    ц: "c",
    ч: "ch",
    ш: "sh",
    щ: "shh",
    ъ: '"',
    ы: "y",
    ь: "\u0027",
    э: "eh",
    ю: "ju",
    я: "ja",
  };

  for (let i = 0; i < text.length; i++) {
    replaceSymbol[text[i]] == undefined
      ? (result += text[i])
      : (result += replaceSymbol[text[i]]);
  }
  return result;
}
positionBtn();
function positionBtn() {
  btnInput.style.position = "absolute";
  btnInput.style.left =
    someInput.offsetLeft +
    someInput.offsetWidth -
    btnInput.offsetWidth -
    8 +
    "px";
  btnInput.style.top =
    someInput.offsetTop +
    someInput.offsetHeight / 2 -
    btnInput.offsetHeight / 2 -
    10 +
    "px";
}

function addValueLeft() {
  const newLi = document.createElement("li");
  /*   newLi.innerText =
    someInput.value.length > 16
      ? someInput.value.substring(0, 14) + "\u2026"
      : someInput.value; // Простой вариант подсказки
  newLi.setAttribute("title", someInput.value); */

  newLi.innerText =
    someInput.value.length >= 14
      ? someInput.value.substring(0, 14) + "\u2026"
      : someInput.value;

  const newSpan = document.createElement("span");
  newSpan.className = "number";
  newSpan.innerText = olLeft.children.length + 1;
  newLi.prepend(newSpan);

  const svg = document.querySelector(".clear-value");
  const newSvg = svg.cloneNode(true);
  newLi.append(newSvg);

  const help = document.createElement("span");
  help.className = "help";
  help.innerText = someInput.value;
  help.hidden = true;
  newLi.append(help);

  olLeft.append(newLi);
  localStorage.setItem(newSpan.innerText + "left", newLi.outerHTML);
}

function addValueRight() {
  const newLi = document.createElement("li");
  let translT = translitText(someInput.value);

  /*  newLi.innerText =
    translT.length > 16 ? translT.substring(0, 14) + "\u2026" : translT; // Простой вариант подсказки
  newLi.setAttribute("title", translT); */

  newLi.innerText =
    translT.length >= 14 ? translT.substring(0, 14) + "\u2026" : translT;

  const newSpan = document.createElement("span");
  newSpan.className = "number";
  newSpan.innerText = olRight.children.length + 1;
  newLi.prepend(newSpan);

  const svg = document.querySelector(".clear-value");
  const newSvg = svg.cloneNode(true);
  newLi.append(newSvg);

  const help = document.createElement("span");
  help.className = "help";
  help.innerText = translT;
  help.hidden = true;
  newLi.append(help);

  olRight.append(newLi);
  localStorage.setItem(newSpan.innerText + "right", newLi.outerHTML);
}

function addValue() {
  if (someInput.value === "") return;
  addValueLeft();
  addValueRight();
  someInput.value = "";
  userData = Object.keys(localStorage);
}

function removeValue(value) {
  const number = value.parentElement.parentElement.children[0].innerText;
  const span = document.querySelectorAll(".number");
  span.forEach((elem) =>
    elem.innerText === "1"
      ? false
      : elem.innerText === number
      ? elem.parentElement.remove()
      : false
  );

  localStorage.clear();

  const spanLeft = olLeft.querySelectorAll(".number");
  for (let i = 1; i < spanLeft.length; i++) {
    spanLeft[i].innerText = i + 1;
  }

  const spanRight = olRight.querySelectorAll(".number");
  for (let i = 1; i < spanRight.length; i++) {
    spanRight[i].innerText = i + 1;
  }

  for (let i = 2; i <= spanLeft.length; i++) {
    localStorage.setItem(i + "left", olLeft.children[i - 1].outerHTML);
    localStorage.setItem(i + "right", olRight.children[i - 1].outerHTML);
  }
  userData = Object.keys(localStorage);
}

main.addEventListener("click", (event) => {
  if (event.target.tagName === "circle") removeValue(event.target);
  if (event.target.tagName === "path") removeValue(event.target);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  addValue();
});

bntClear.addEventListener("click", () => {
  const allValueLeft = document.querySelectorAll(
    ".left li:not(.left li:first-of-type)"
  );
  const allValueRight = document.querySelectorAll(
    ".right li:not(.right li:first-of-type)"
  );

  allValueLeft.forEach((elem) => elem.remove());
  allValueRight.forEach((elem) => elem.remove());
  localStorage.clear();
});

main.addEventListener("mouseover", (event) => {
  if (
    event.target.tagName === "LI" &&
    event.target.childNodes[1].length >= 15
  ) {
    for (let elem of event.target.children) {
      if (elem.className === "help") {
        elem.hidden = false;

        elem.style.width = elem.parentElement.offsetWidth * 0.65 + "px";
        elem.style.left = elem.parentElement.offsetLeft + 30 + "px";
        elem.style.top =
          elem.parentElement.offsetTop -
          elem.parentElement.offsetHeight / 3 -
          parseInt(getComputedStyle(elem).height) +
          "px";
      }
    }
  }
});

main.addEventListener("mouseout", (event) => {
  if (event.target.tagName === "LI") {
    for (let elem of event.target.children) {
      if (elem.className === "help") elem.hidden = true;
    }
  }
});

window.addEventListener("resize", positionBtn);

userData = Object.keys(localStorage);
userData.sort((a, b) => a.localeCompare(b));
for (let i = 2; i <= userData.length; i++) {
  if (localStorage.getItem(i + "left") === null) break;
  olLeft.insertAdjacentHTML("beforeend", localStorage.getItem(i + "left"));
  olRight.insertAdjacentHTML("beforeend", localStorage.getItem(i + "right"));
}
