//1
//Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li. Содержимое li - нажатая клавиша.
let inp = document.querySelector('in1')
inp.addEventListener('keyup', (event) => {
    let li = document.createElement('li')
    li.innerText = event.key
    document.querySelector('ul').appendChild(li)
})


//2
//Вставить в html тег input (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает любой символ в поле (или стирает любой символ из поля).
let input = document.querySelector('.in2')
input.addEventListener('keydown', (event) => {
    console.log(input.value)
})


//3
//Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).
let ul2 = document.querySelector('.ul2')
let form = document.querySelector('form')
form.addEventListener('submit', (event) => {
    event.preventDefault()
    let in3 = document.querySelector('.in3')
    let li2 = document.createElement('li')
    li2.innerText = in3.value
    ul2.appendChild(li2)
    in3.value = ''
})


//4
//Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Внутри select будут options - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму (событие submit), над двумя числами выполняется действие, выбранное в select (чтобы получить выбранный пользователем option, мы "забираем" значение  select.value). Результат отображается в div.

//не выбивает результат почему-то
let select = document.querySelector('select')
let form2 = document.querySelector('form2')
let in4 = document.querySelector('.in4')
let in5 = document.querySelector('.in5')
let result = document.querySelector('.result')

form2.addEventListener('submit', (event) => {
    event.preventDefault()
    result.innerText === eval(`${in4.value}${select.value}${in5.value}`)
})


//5
//Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки поворачивать кнопку на рандомный угол от -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.
let getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (182 - (-181)) + (-181);
}


let butt = document.querySelector('button')
butt.onmouseenter = function(event) {
    butt.style.background = getRandomColor();
}

butt.onmouseleave = function(event) {
    butt.style.transform = `rotate(${getRandomArbitrary()}deg)`
}
