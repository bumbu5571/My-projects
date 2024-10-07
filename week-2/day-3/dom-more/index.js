let btn = document.querySelector("#change");
const inputMessage = document.querySelector("#very-important-message");
const inputProperty = document.querySelector("#very-important-property");
const inputValue = document.querySelector("#very-important-value-prorerty");
const box = document.querySelector(".box");

btn.addEventListener("click", () => {
  if (inputMessage.value != "") box.innerText = inputMessage.value;

  box.style[inputProperty.value] = inputValue.value;
});
