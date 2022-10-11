// 1 с помощью логического И в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно./с помощью логического ИЛИ в условии проверьте, находится ли переменная n в диапазоне чисел от 0 до 100 включительно.
let n = 100;
console.log(n)
    if (100 >= n >= 0) {
        console.log('true');
    } else {
        console.log('false')
    }



if (n <= 100 || n < 0) {
    console.log('true');
} else {
    console.log('false')
}




// 2 Вывести в консоль через шаблонные строки заработную плату всех работников в таком формате:Заработная плата ххх составляет ххх рублей.

const engineers = {
    Den: 1000,
    Matt: 5000,
    Steve: 2000
}

for (let property in engineers) {
    console.log(`Заработная плата ${property} составляет ${engineers[property]} рублей`)
}



// 3 Создать массив из 5 элементов.Используя цикл for, вывести каждый второй элемент массива в консоль.
let five = ['one', 'two', 'three', 'four', 'five'];
console.log(five)
for (let i = 1; i < five.length; i += 2) {
    console.log(five[i])
}


// 4 Вывести в консоль значения всех элементов массива и соответствующие им индексы в таком виде:
// Индексу 0 соответствует число 42
// Индексу 1 соответствует число 65
// и т.д.
let numbers4 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
console.log(numbers4)

for (let i = 0; i < numbers4.length; i++) {

    console.log(`Индексу  ${i}  Соответствует число ${numbers4[i]}`)
}

// 5 Добавить в каждый объект дополнительное поле usersAnswer со значением null.
// Решение должно работать для массива любой длины.
let questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
for (let item of questions) {
    item.usersAnswer = 'null'
    console.log(item)
}
console.log(questions)

// 6
// 1)Вывести в консоль все элементы массива, используя 2 разных цикла: for-of и for со счетчиком
let numbers3 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

for (item of numbers3) {
    console.log(item)
}

// 2)Посчитать и вывести в консоль сумму элементов в массиве.
let numbers2 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]

let sum = 0;

for (i = 0; i < numbers2.length; i++) { sum += numbers2[i] }
console.log(sum)

// 3) Посчитать и вывести в консоль сумму четных элементов в массиве.
let numbers1 = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70]
let sum2 = 0

// 4)Найти и вывести в консоль максимальное число массива.
let result = 0
for (i = 0; i < numbers1.length; i++) {
    if (numbers1[i] % 2 == 0) {


        result = sum2 += numbers1[i]

    } else {

    }

}
console.log(result)


// 5)Определить и вывести в консоль индекс максимального числа массива (или индексы, если число встречается более одного раза). Само максимальное число мы уже нашли в прошлой части задачи, повторно его искать не нужно.
let numbers = [42, 65, 49, 68, 56, 47, 70, 42, 51, 35, 58, 63, 40, 70];
let max = numbers[0];

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i]

    }
}
for (i = 0; i < numbers.length; i++) {
    if (max == numbers[i]) {
        console.log(i)
    }
}



// 7 Определить массив let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0]
// Создать новый массив из элементов массива arr, но в новом должны содержаться только положительные элементы.
let arr1 = [5, 4, 3, -3, -10, -1, 8, -20, 0];
let newArr = [];
for (item of arr1) {
    if (item > 0) {
        newArr.push(item)
    }
}
console.log(newArr)


// 8 Определить массив, например let nums = [5, 4, 3, 8, 0] и переменную let limit = 5;
// Создать новый пустой массив. В цикле наполнить его элементами nums, но в новом должны содержаться элементы, больше и равные (>=) значению переменной limit.
let nums = [5, 4, 3, 8, 0];
let limit = 5;

let arr = [];
for (item of nums) {
    if (item >= limit) {
        arr.push(item)
    }
}
console.log(arr)

// 9 Пройти в цикле по массиву и вывести имена всех пользователей, возраст которых больше 15.
const users = [{ name: 'Vasya', age: 23 }, { name: 'Olya', age: 12 }, { name: 'Anna', age: 22 }, { name: 'Alex', age: 18 }, { name: 'Valery', age: 8 }]
for (item of users) {

    for (let property in item) {
        if (item['age'] < 15) {
            console.log(item['name'])
        }

    }
}


// 10* 1) В цикле сформировать массив объектов с ключами word (само слово), length (длина слова):
// [{word:'морковь', length: 7}, {word:'баклажан', length: 8} и т.п.]
// Вывести этот массив в консоль.
// Подсказка: длину строки можно определить с помощью метода .length. Например, для переменной let string = 'text' это будет string.length (результат //- 4, т.к. слово text состоит из 4 символов)
// 2) Пройтись по полученному массиву объектов и вывести в консоль строки вида "слово - длина_слова", например "картошка - 8"
let vegetables = ["морковь", "баклажан", "репа", "топинамбур"];
let veg2 = [];
for (let i = 0; i < vegetables.length; i++) {

    veg2.push({ name: vegetables[i], length: vegetables[i].length })
}
console.log(veg2)

for (let i = 0; i < veg2.length; i++) {
    console.log(`${veg2[i].name} - ${veg2[i].name.length}`)
}
