let elem = document.querySelector("#jsstyle");
console.log(elem);

elem.addEventListener("click", () => {
  console.log("clicked Style button");
  let btn = document.createElement("button");
  btn.id = "jsstyled";
  btn.innerText = "Кнопка";
  btn.style.cssText = `
    background-color: green;  
    color: white;  
    font-size: 20px;
  `;
  document.body.append(btn);

  let allBtnJsStyled = document.querySelectorAll("#jsstyled");

  for (let item of allBtnJsStyled) {
    item.addEventListener("click", () => {
      elem.style.cssText = `
    background-color: white;  
    color: black;  
    font-size: 14px;
  `;
    });
  }
});
