// code here

/* let ul = document.querySelector('ul');
let one = ul.querySelector('.first');
one.innerText = "1" */

let oneList = document.querySelector("ul").querySelectorAll("li");
for (let i = 0; i < oneList.length; i++) {
  oneList[i].textContent = i + 1;
}

let newLi = document.createElement("li");
newLi.className = "fourth";
newLi.innerText = "Четвёртый";
document.querySelector("ul").append(newLi);


document.querySelector("ol").children[2].remove()

let newLi2 = document.createElement("li");
newLi2.className = "new";
newLi2.innerText = "Новый";
document.querySelector("ol").append(newLi2);
