//1
// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке. Также обраьботайте случай, если не было введено два параметра.
let fun1 = function(a, b) {
    if (typeof a === 'number' || typeof b === 'number') {
        return (a + b);
    } else if (a === undefined || b === undefined) {
        return 'Введите параметр'
    } else {
        return 'error'
    }
}
fun1();
console.log(fun1())

//2
//Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
// "Функция "square" не может быть вызвана без аргумента"
// Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error):
function square(a) {
    if (a === undefined) {
        console.error('Функция "square" не может быть вызвана без аргумента')
    } else {
        return (a * a)
    }
}
square()


//3
//Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число -  ...,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
let random = (x) => {
    let random = getRandomInteger(1, 11);
    if (x == random) {
        return 'Вы выиграли!'
    } else if (x > 10 || x < 1) {
        return `Нарушен диапазон чисел!`
    } else if (x !== random) {
        return `Вы не угадали, ваше число - ${x},  а выпало число ${random}`
    } else {
        return 'error'
    }
}
random(10)
console.log(random(10))


//4
//Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
let arr = [5, 4, 3, 8, 0];
let filterFor = (arr, a) => {
    let arr2 = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] >= a) {
            arr2.push(arr[i])
        }
    }
    return arr2
}
filterFor(arr, 7)
console.log(filterFor(arr, 7))


//5
//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
let arr2 = [2, 3, 4]
let copyArr = arr2.map((number) => number)
console.log(copyArr)


//6
//Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
let obj = { a: 10, b: 20, c: 'hello', d: 20 }
let func = (name) => {
    let result = 0
    for (let item in name) {
        if (typeof name[item] === 'number') {
            result += name[item]
        }
    }
    return result
}
func(obj)
console.log(func(obj))
