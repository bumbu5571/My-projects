**Нельзя менять index.html и index.css файлы** :warning: 

1) По клику на кнопку Style, добавьте новую кнопку с `id="jsstyled"` и с текстом Styled со стилями:  
   `background-color: green;`  
   `color: white;`  
   `font-size: 20px;`  
2) Поменяйте стили кнопки Style по клику на кнопку Styled на:
   - размер шрифта кнопки на 14px
   - цвет фона на белый
   - цвет текста на черный

    
*В файле index.js*: 
1) Кнопку получить можно через ```let btn = document.querySelector('#jsstyle')```
2) Добавить новую кнопку в body можно через `document.body.appendChild(elem);`
3) Поменять стили можно через объект style. Н-р: ```elem.style.color = "black" (если в перем-ой -> elem.style[input1] = input2)```
4) Для клика можно испоьзовать ```btn.addEventListener('click', () => {})```.
5) Кнопка Styled должна добавляться ТОЛЬКО после клика на кнопку Style
