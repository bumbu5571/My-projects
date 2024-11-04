const coffeeRecipes = [
  {
    head: "Имбирный латте",
    ing: `Ингредиенты:
Эспрессо или крепкий кофе – 1 чашка
Молоко – 200 мл
Имбирный сироп – 50 мл 
Сухой каркаде – 15 г`,
    articl: `Способ приготовления:
Налить кофе в большую емкость.
Отдельно взбить молоко и добавить в него.
Добавить сироп на основе имбиря, перемешать с помощью палочки.
Измельчить чай каркаде в пудру, которая сыпется на напиток сверху.
Сделать двойной эспрессо, используя кофемашину.
Добавить белый ром. Зажечь спичку и поднести к нему, чтобы поджечь.
Добавить кокосовый сироп во время горения смеси.
Потушить пламя за счет прикрытия айриш-стакана небольшим блюдцем.
Добавить кофе и украсить предварительно взбитыми сливками.`,
  },
  {
    head: "Пряный тыквенный латте",
    ing: `Ингредиенты:
Молоко (не ниже 3,5% жирности) – 2 стакана
Кофе (эспрессо) – 2 порции
Сахар – 2 ст. л.
Ваниль (экстракт) – 2 ст. л.
Имбирь (молотый)– 1 ч. л.
Мускатный орех (молотый)– 1 ч. л.
Корица (молотая) – 1 ч. л.
Перец (чёрный, молотый) – 1 ч. л.
Гвоздика (молотая) – 1 ч. л.
Тыква (пюре) – 4 ст. л.`,
    articl: `Способ приготовления:
На первом шаге подготавливается смесь из специй – имбиря, мускатного ореха, корицы, гвоздики, перца.
Далее берется сотейник средних размеров, куда вливается молоко, тыквенное пюре, сахар, экстракт ванили и смесь из предыдущего пункта.
Емкость отправляется на средний огонь, где ее нужно нагреть, но кипятить запрещено.
«Полуфабрикат» снимается с огня, взбивается с помощью погружного блендера, пока не появится пена.
Молочная смесь разделяется на 2, чтобы приготовить 2 порции напитка в кофемашине.
Вливается напиток в емкость для подачи на стол максимально аккуратно во избежание оседания нежной пенки.
На верх кладутся взбитые сливки и специи.`,
  },
  {
    head: `Капучино "Матча"`,
    ing: `Ингредиенты:
Эспрессо – 25 мл
Молоко – 150 мл
Сахарный сироп – 30 мл
Чай матча – 3 г`,
    articl: `Способ приготовления:
Добавить в сироп на основе сахара предварительно протертый чай и дать этой смеси настояться.
Приготовить порцию эспрессо.
Процедить сироп, залить в него кофе и «сдобрить» взбитым молоком.
`,
  },
  {
    head: `Кофейный алкоголь по-французски`,
    ing: `Ингредиенты:
Кофе «Американо» – 100 мл
Бренди – 1 ст. л.
Ванильный сахар – по вкусу
Сахарная пудра – 0,5 ст. л.
Цедра лимона – по вкусу
Измельченные орехи – по вкусу
Сметана – 1 ст. л.`,
    articl: `Способ приготовления:
Подогреть айриш-бокал и добавить в него бренди в количестве 1 ст. л.
Приготовить американо.
Налить его в бокал с бренди.
Добавить в столовую ложку сметаны половину столовой ложки пудры из сахара. Ингредиенты взбить, пока не образуется пена.
Выложить готовый продукт в бокалы, а затем насыпать на поверхность напитка орехи в измельченном виде.
`,
  },
  {
    head: `Кофе «Гречишный мед – ванильная карамель»`,
    ing: `Ингредиенты:
Эспрессо – 50 мл
Молоко – 150 мл
Гречишный мед – 20 г
Ванильная соль – 0,5 г`,
    articl: `Способ приготовления:
Смешать соль со стручковой ванилью.
Перемешать между собой эспрессо, подогретое молоко, мед, соль ванильную, пока не получится однородная масса.
`,
  },
  {
    head: `Ореховый раф с попкорном`,
    ing: `Ингредиенты:
Эспрессо – 40 г
Молоко коксовое – 100 мл
Молоко коровье – 100 мл
Сироп Макадами – 20 мл
Попкорн Карамельный – 10 г
Бадьян – 2 г`,
    articl: `Способ приготовления:
Подготовить одну порцию эспрессо, а к нему – сироп и взбитое молоко. Смесь перелить в кружку.
Отдельно наколоть на шпажку попкорн и положить на кружку.
`,
  },
  {
    head: `Кофе «Гранито кон Панна»`,
    ing: `Ингредиенты:
Двойной эспрессо – 1 порция
Миндальный сироп – 25 г
Шоколадный сироп – 25 г`,
    articl: `Способ приготовления:
Сиропы на основе миндаля и шоколада необходимо добавить в двойной эспрессо, затем перемешать их и вылить в максимально удобную емкость. Затем – поместить в морозильную камеру, выждать 2 часа.
Полученную массу достать, а потом разбить или разрезать, поместить в кружку для кофе.
Подавать с подогретым молоком, которое вливается в полученную массу.
`,
  },
  {
    head: `Коктейль «Хот Порт Флип»`,
    ing: `Ингредиенты:
ристретто – 15 мл
портвейн – 90 мл
бренди – 30 мл
яйцо – 1 шт.
сливки – 30 мл
тертый мускатный орех – щепотка`,
    articl: `Способ приготовления:
Взять сотейник небольших или средних размеров.
Смешать в нем портвейн, бренди, ристретто.
Отдельно взбить яйцо и сливки, пока не появится пена. Для этого необходимо воспользоваться миксером.
Кофейную смесь необходимо перелить в стакан из стекла.
Сверху останется положить приготовленную пену и посыпать мускатным орехом.
`,
  },
  {
    head: `Коктейль «Кафе-брюло»`,
    ing: `Ингредиенты:
Американо – 100 мл
бренди – 50 мл
«Куантро» – 25 мл
ваниль –1 палочка
сахар – 4 кубика
гвоздика – 5 шт.
цедра лимона – по вкусу
цедра апельсина – по вкусу`,
    articl: `Способ приготовления:
Взять небольшой сотейник, положить в него немного ванили (достаточно одной палочки), рафинада (подойдет 4 кубика), а затем налить бренди и ликер на основе апельсина «Куантро».
Смесь необходимо держать на огне в течение 2 минут, до кипения доводить не нужно.
Останется только разлить готовый напиток по чашкам. Указанных ингредиентов должно хватить на 3-4 порции.
`,
  },
  {
    head: `Венецианский кофе`,
    ing: `Ингредиенты:
на 1 порцию:
Эспрессо – 30 г
Бренди – 1 чашка
Сахар – по вкусу
Взбитые сливки – 1 чайная ложка`,
    articl: `Способ приготовления:
Бокал предварительно подогревается, в него вливается алкоголь, а следом – горячий кофе.
Далее останется положить сахар по вкусу и «укрыть» напиток взбитыми сливками.
`,
  },
  {
    head: `Цитрусовый раф на дегидрированной цедре`,
    ing: `Ингредиенты:
Апельсин – 1 шт.
Сливки 11% – 75 мл
Молоко – 25 мл
Сахар­ный сироп – 30 мл
Шот эспрессо – 50г`,
    articl: `Способ приготовления:
Необходимо очистить апельсин от кожуры, а затем порезать ее мелкими кусочками и высушить под прямыми лучами солнца или над плитой. Сухую заготовку измельчить в кофемолке, пока не получится пудра.
В отдельной емкости перемешать между собой молоко и сливки в пропорции 3 к 1. Добавить к ним сироп на основе сахара и ложечку пудры, приготовленной на предыдущем шаге. Полученную смесь взбить под форсункой.
Добавить кофе и взбить снова, пока на поверхности не появится легкая пенка.
Прежде чем подать горячий напиток на стол, нужно посыпать его пудрой из цитруса.
`,
  },
];
const phrasesTea = ["Чай — это вода для чайников","Почему пить чай, когда есть кофе, который действительно оживляет?",`— Почему у чая такой странный вкус?
— Потому что это кофе, придурок.`,"Чай — это просто кофе в отпуске","Чай — это мост в мир спокойствия, пока кофе ждет за углом"];
const phrasesBot = ["Ой ёй не я это начал !","Продолжишь и без рецепта останешся!","Ну я же просил не напоминать мне про это чай!", "Фии каки мы не воспитанные, тут общество КОФЕМАНОВ! про какой то там чай, мы не слышали!","Ля ты приципился со своими дурацкими вопросами!"];
const btn = document.querySelector("button");
const inputValue = document.querySelector("input");
const main = document.querySelector("main");
let count = 0;

function randomRecipe() {
  let y = inputValue.offsetTop + inputValue.offsetHeight + 10;
  if (inputValue.value.match(/чай|tea/gi)) {
    let randomNumber = Math.round(Math.random() * 5);
    const spanBot = document.createElement("span");
    spanBot.className = "message-bot";
    const phraseBot = document.createElement("h1");
    phraseBot.innerText = phrasesBot[randomNumber];
    spanBot.append(phraseBot);
    const phraseTea = document.createElement("h1");
    phraseTea.innerText = phrasesTea[randomNumber];
    spanBot.append(phraseTea);
    main.append(spanBot);
    count += 1;
    if (count === 5) location.reload();
  }
  if (inputValue.value.match(/кофе|coffee/gi)) {
    const spanBot = document.createElement("span");
    spanBot.className = "message-bot";
    let randomNumber = Math.round(Math.random() * 10);
    const h2 = document.createElement("h2");
    h2.innerText = coffeeRecipes[randomNumber].head;
    spanBot.append(h2);
    const pIng = document.createElement("p");
    pIng.innerText = coffeeRecipes[randomNumber].ing;
    spanBot.append(pIng);
    const pArticl = document.createElement("p");
    pArticl.innerText = coffeeRecipes[randomNumber].articl;
    spanBot.append(pArticl);
    main.append(spanBot);
  }
  if (inputValue.value != "") {
    const spanUser = document.createElement("span");
    spanUser.className = "message-user";
    spanUser.innerText = inputValue.value;
    main.append(spanUser);
  }
  window.scrollTo(0, y);
  inputValue.value = "";
}

inputValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") randomRecipe();
});
btn.addEventListener("click", randomRecipe);