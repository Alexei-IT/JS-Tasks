let userNumber;
do {
    userNumber = Number(prompt('Введите число'))
} while (userNumber !== 1);
alert('Верно')

//1
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.

for (let i = 0; i < 3; i++) {
    alert(`number ${i}!`);
}
let i = 0
while (i < 2) {
    i += 1
    alert(`number ${i}!`);
}

//2
// Перепишите код с использованием тернарного оператора

let male = true;
let gender;
if (male) {
    gender = 'man';
} else {
    gender = 'woman'
}

gender = male ? gender = 'man' : gender = women


//3
// Задать массив логических значений (true/false). Например: const roles = [true, false, false, true, false]
// Каждое значение обозначает админ (true) или пользователь (false).
// Из этого массива сформировать массив объектов - roles, такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, role, которое равно admin, если значение в заданном массиве - true, и user, если значение в заданном массиве - false.
// Т.е. из
// [true, false, false]
// должно получиться
// [{ role: 'admin' }, { role: 'user' }, { role: 'user' } ]

let roles = [true, false, false, true, false]
let roles2 = [];
for (let i = 0; i < roles.length; i++) {
    if (roles[i] === true) {
        roles2.push({ role: 'admin' })
    } else if (roles[i] === false) {
        roles2.push({ role: 'user' })
    }
}


// 4
// оздайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.

// 1)
function findPositiveNumbers() {
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    for (let item of arr) {
        if (item > 0) {
            console.log(item)
        }
    }
}
findPositiveNumbers()

// 2)
function findPositiveNumbers() {
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    let arr2 = []
    for (let item of arr) {
        if (item > 0) {
            arr2.push(item)
        }
    }
    console.log(arr2)
}
findPositiveNumbers()

// 3)
function findPositiveNumbers() {
    let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
    let arr2 = []
    for (let item of arr) {
        if (item > 0) {
            arr2.push(item)
        }
    }
    return arr2
}
findPositiveNumbers()

// 4
let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]

function findPositiveNumbers(arr) {
    let arr2 = []
    for (let item of arr) {
        if (item > 0) {
            arr2.push(item)
        }
    }
    return arr2
}
findPositiveNumbers(arr)


// 5
// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']

function five(meaning, quantity) {
    let arrFive = []
    for (let i = 0; i < quantity; i++) {
        arrFive.push(meaning)
    }
    console.log(arrFive)
    return arrFive;
}
five('a', 20);


// 6
// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]

let arrTwo = [5, 4, 3, 8, 0]

function filterFor(arr, a) {
    let arr1 = []
    for (let i = 0; i < arrTwo.length; i++) {
        if (arrTwo[i] >= a) {
            arr1.push(arr[i])
        }
    }
    return arr1;
}
filterFor(arr, 10)
console.log(filterFor(arr, 10))


// 7
// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRGB() {
    console.log(` RGB  (${ getRandomInteger(0, 255)} , ${getRandomInteger(0, 255)} ,  ${getRandomInteger(0, 255)}) `)
}
getRandomRGB()


//8
// Написать функцию, которая выводит в консоль квадраты чисел из заданного диапазона (от min до max), где значения min и max передаются в функцию как параметры.
// Примеры вызова такой функции:
// getSquares(0, 100) - выведет квадраты чисел от 0 до 100
// getSquares(56, 87) - выведет квадраты чисел от 56 до 87

function pow(x, n) {
    for (let i = 0; i <= n; i++) {
        console.log(x ** 2)
        x++
    }
}
pow(2, 20)


//9
//Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.
//Для проверки, целое ли число, вам понадобится опеатор % (подумайте, остаток от деления на какое число подойдет для вашей цели)

function isInteger(x) {
    if (x % 1 == 0) {
        return "true";

    } else {
        return 'false'
    }
}
isInteger(-25.4);


// 10
// Написать функцию, которая принимает целое число n.   
// Внутри функции запустить цикл от 1 до n с шагом 0.5. На каждой итерации цикла выводить в консоль текущее число (i) и информацию о том, целое ли оно.

function whole(n) {
    let i;
    for (i = 1; i <= n; i += 0.5) {
        if (i % 1 == 0) {
            console.log(i + ' integer')
        } else {
            console.log(i + ' decimal')
        }
    }
}
whole(9.2)
