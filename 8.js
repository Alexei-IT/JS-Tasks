//1
//Выведите в консоль строку:
// С помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)
console.log(
    `C помощью браузера ${navigator.userAgent} я открыл страничку ${location}`
)

//2
//Вывести в консоль каждое из имен (содержимое каждого li).
for (let i of document.querySelectorAll('li')) {
    console.log(i.innerText)
}


//3
let all = document.querySelectorAll('li')
for (let i = 0; i < all.length; i++) {
    //помогите 
    all[i].innerText = i
    console.log(all[i].innerText)
}


//4
//Создать с помощью js абзац (тег p). Добавить в него контент. Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.
let p = document.createElement('p')
p.innerText = 'How are you?'
p.style.fontSize = '36px'
p.style.fontWeight = 'bold'
document.body.appendChild(p)


//5
// Написать в html тег заголовка с текстом "Сегодня:" 
// После заголовка подготовить в html пустой параграф. С помощью js добавить в него сегодняшнюю дату.
let date = new Date().toLocaleDateString()
document.querySelector('.date').innerText = date


//6
//Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое. Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое. Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.
let fun = (tagName, color, about) => {
    let tag = document.createElement(tagName)
    tag.style.color = color
    tag.innerText = about
    return tag
}
console.log(fun('div', 'pink', 'hello!'))
console.log(fun('span', 'yellow', 'Good morning!'))
document.body.appendChild(fun('div', 'pink', 'hello!'))
document.body.appendChild(fun('span', 'yellow', 'Good morning!'))


//7
//Вставить в страницу (в html документ) тег <select>. С помощью js (в цикле) добавить в этот select опции (option) под годы от 1960 по 2020.
let sel = document.createElement('select')
for (let i = 1960; i < 2021; i++) {
    let opt = document.createElement('option')
    sel.appendChild(opt)
    opt.innerText += i
}
document.body.appendChild(sel)


//8
//Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.
let arr = [{ name: "Женя", order: true }, { name: "Кристина", order: true }, { name: "Павел", order: false }, { name: "Виолетта", order: false }, { name: "Костя", order: true }];
let ul = document.createElement('ul')
let st
for (let i of arr) {
    let li = document.createElement('li')
    ul.appendChild(li)
    st = i.order == true ? 'оплатил' : 'отменил'
    li.innerText = `Клиент ${i.name} ${st} заказ `
}
document.body.appendChild(ul)

//9
//1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
//  c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
//3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY
let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/', 'https://yandex.ru/'];
let div = document.createElement('div')
div.style.background = 'pink'
div.style.padding = '20px'
for (let item of linksArr) {
    let a = document.createElement('a')
    a.href = item
    a.target = "_blank"
    div.appendChild(a)
    a.innerText = item
}
document.body.appendChild(div)


//10
//Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
let tops = document.querySelectorAll('.forRemove')
for (let item of tops) {
    item.remove()
}


//11
//Создать в html таблицу (table).
// C помощью js заполнить таблицу информацией из массива, в одной колонке будут имена, во второй возраст. Имена должны быть красного цвета, age - синего.
const users = [{ name: 'Mark', age: 12 }, { name: 'Olga', age: 30 }, { name: 'Tom', age: 25 }]
    // let table = (point) => {
for (let i = 0; i < users.length; i++) {
    let tr = document.createElement('tr')
    let tdName = document.createElement('td')
    let tdAge = document.createElement('td')
    tr.appendChild(tdName)
    tr.appendChild(tdAge)
    tdName.innerText = users[i].name
    tdAge.innerText = users[i].age
    tdName.style.background = 'red'
    tdAge.style.background = 'blue'
    document.querySelector('table').appendChild(tr)
}
