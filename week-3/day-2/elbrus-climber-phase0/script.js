const btn = document.querySelector(".repeat");
btn.hidden = true;
const divAllMarker = document.querySelectorAll(".marker");
const climber = document.querySelector(".climber");
const win = document.querySelector(".win");
const y = getComputedStyle(climber).bottom;
let timeUp;

document.addEventListener("keydown", (event) => {
  if (parseInt(climber.style.bottom) <= -150) {
    timeUp = setInterval(() => {
      climber.style.bottom = parseInt(climber.style.bottom) - 5 + "px";
    }, 50);
    setTimeout(() => {
      if (confirm("Начать заново ?")) location.reload();
      btn.hidden = false;
    }, 3000);
  } else {

    climber.style.bottom = y;

    if (event.code === "KeyZ") {
      if (!(climber.parentNode.nextElementSibling.className === "win")) {
        climber.parentNode.nextElementSibling.append(climber);
        timeUp = setInterval(() => {
          climber.style.bottom = parseInt(climber.style.bottom) - 5 + "px";
        }, 500);
        setTimeout(() => {
          if (climber.parentNode.previousElementSibling.tagName === "DIV")
            climber.parentNode.previousElementSibling.remove();
        }, 1000);
      } else {
        climber.hidden = true;
        climber.parentNode.nextElementSibling.append(climber);
        win.style.display = "inline";
        setTimeout(() => {
          if (confirm("Начать заново ?")) location.reload();
          btn.hidden = false;
        }, 1000);
      }
    }
    if (event.code === "KeyX") {
      climber.parentNode.previousElementSibling.tagName === "IMG"
        ? false
        : climber.parentNode.previousElementSibling.append(climber);
    }
  }
});

btn.addEventListener("click", () => {
  location.reload();
});
