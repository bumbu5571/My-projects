# Html-Generator

## Введение

Тебе предстоит создать свой генератор html на js. Для этого пригодятся твои навыки работы с `prototype`. Так же вспомни или ознакомься с `arguments`, `toString()`, `reduceRight()`.

## Releases
### Release 0. Template
Начнём! Тебе предоставляется функция-конструктор `Template`, однако пока что она ничего не умеет. Сделай так, чтобы с её помощью генерировался html-код:
```js
const tmpl = new Template();
console.log(tmpl.div('hello')); // выводит в консоль "<div>hello</div>"
console.log(tmpl.p('world')); // выводит в консоль "<p>world</p>"
console.log(tmpl.span('elbrus')); // выводит в консоль "<span>elbrus</span>"
console.log(tmpl.h1('bootcamp')); // выводит в консоль "<h1>bootcamp</h1>"
```

### Release 1. Chaining

Слышали про Chaining? Меньше слов, больше дел. Сделай, чтобы работало вот так:

```js
const tmpl = new Template();

console.log(tmpl.div().h1('Elbrus-Bootcamp')); 
// "<div><h1>Elbrus-Bootcamp</h1></div>"
console.log(tmpl.div().p().b('Chaining'));
// "<div><p><b>Chaining</b></p></div>"
```

### Release 2. Multiple arguments
Что делать, если в метод передаётся несколько аргументов? Всё просто! Их надо объединить.
```js
const tmpl = new Template();

console.log(tmpl.div().h1('Elbrus', '-Bootcamp'));
// "<div><h1>Elbtus-Bootcamp</h1></div>"
```

### Release 3. Reuse
Не забудь оставить возможность сохранять цепочку методов в переменную, чтобы потом можно было их переиспользовать!
```js
const tmpl = new Template();

const boldText = tmpl.b;
console.log(boldText('bold'));   // "<b>bold</b>"
const block = tmpl.div;
console.log(block().p('paragraph')); // "<div><p>paragraph</p></div>"

const h1InDiv = tmpl.div().h1;
console.log(h1InDiv('Awesome')); // "<div><h1>Awesome</h1></div>"
console.log(h1InDiv.span('That is awesome!')); // "<div><h1><span>That is awesome!</span></h1></div>"
```

### Release 4. Nesting
Сделайте так, чтобы вызовы методов `Template` можно было вкладывать друг в друга.
```js
const tmpl = new Template();
console.log(
  tmpl.div(
    tmpl.h1('Awesome HTML-Generator'), 
    tmpl.p(`Paragraph with a ${ tmpl.span('span') }.`)
  )
);
// returns "<div><h1>Title</h1><p>Paragraph with a <span>span</s
```

### Release 5. Formatting
Наконец-то, последний релиз! Теперь просто настройте форматтирование. Чтобы ваши методы возвращали читабельный результат с отступами.
```js
const tmpl = new Template();

console.log(
  tmpl.html(
    tmpl.head(
      tmpl.title('Best template processor')
    ),
    tmpl.body(
      tmpl.div(
        `${tmpl.div().p('Hello')}\n<hr/>\n${tmpl.div().p().b('World')}`,
      )
    )
  )
);
```

Должно выводить в консоль:

```html
<html>
  <head>
    <title>
      Best template processor
    </title>
  </head>
  <body>
    <div>
      <div>
        <p>
          Hello
        </p>
      </div>
      <hr/>
      <div>
        <p>
          <b>
            World
          </b>
        </p>
      </div>
    </div>
  </body>
</html>
```
