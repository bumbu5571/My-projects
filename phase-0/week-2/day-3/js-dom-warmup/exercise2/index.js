let elems = document.querySelectorAll(".outer");
/* querySelectorAll возвращает псевдомассив который
содержит все элементы div(в виде объекта) с класоом outer */
let btn = document.querySelector(".btn"); // получили ссылку на кнопку с классом btn
btn.addEventListener("click", () => {
  for (let i = 0; i < elems.length; i++) {
    console.log(elems[i]);
  }

  let allDivOuter = document.querySelectorAll(".outer");
  for (let item of allDivOuter) {
    if (item.childElementCount == 2) continue;

    if (item.nextElementSibling == null) {
      let newP = document.createElement("P");
      newP.innerText = `Конец`;
      item.append(newP);
    } else {
      let newP = document.createElement("P");
      newP.innerText = `Я есть Грут`;
      item.append(newP);
    }
  }
});
