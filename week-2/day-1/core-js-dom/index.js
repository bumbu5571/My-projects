let fishList = document.getElementById("fish-list").querySelectorAll('li');

for (let i = 0; i < fishList.length; i++ ) {
    let btn = document.createElement("button");
    btn.innerText = "Купить";
    btn.className = "light";
    btn.style.cssText = `
        margin: 1em;
        border-radius: 5px;
    `;
    fishList[i].append(btn);

    btn.addEventListener("click", () => {
        alert(`Вы хотите купить ${"\u{1F41F}"} ${fishList[i].querySelector("span").innerText} ?`)
    })
}
