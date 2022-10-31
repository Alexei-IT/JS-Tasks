//1
//Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
// Вам понадобятся методы строк.
let ucFirst = (str) => {
    let upp = str[0].toUpperCase() + str.slice(1)
    return upp
}
ucFirst('hello')
console.log(ucFirst('hello'))


//2
//Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру.
let checkSpam = (str) => {
    str.toLowerCase()
    if (str.includes('badworld') || str.includes('xxx')) {
        return false
    } else {
        return true
    }
}
checkSpam('hello')

//3
//Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
//Обратите внимание: метод reverse существует только у массивов.
let rev = (string) => {
    let arr = string.split(' ')
    arr.reverse()
    return arr.join()
}
rev('привет,мир!')
console.log(rev('привет,мир!'))


//4 НЕ знаю как решить.
//Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly', 'GNF576746573fhdg4737dh4;Greenfield', 'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street', 'SYB4f65hf75f736463;Stalybridge', 'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];
let three = stations.map(item => {
    let sl = item.slice(0, 3)
    return sl
})
console.log(three)
let four = stations.map(item => {
    let point = item.indexOf(';') + 1
    let sl2 = item.slice(point)
    return sl2

})
let last = three.concat(four)
console.log(last)


//5
//Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
let unique = (arr) => {
    let arrNew = []
    for (let item of arr) {
        if (!arrNew.includes(item)) {
            arrNew.push(item)
        }
    }
    return arrNew
}
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
unique(strings)
console.log(unique(strings))


//6
// Женя и Юля изучают кошек. Каждая из них узнала у 10 владельцев кошек о возрасте их кошки и сохранила данные в массиве (по одному массиву для каждой девочки). На данный момент им просто интересно узнать, является ли кошка взрослой или котёнком.
// Кошка считается взрослой, если ей не менее 2 лет, и котёнком, если ей менее 2 лет.
// Создайте функцию verifyCats, которая принимает 2 массива возрастов кошек (catsJane и catsJulia) и выполняет следующие действия:
// 1. Женя выяснила, что владельцы первой и последней кошки на самом деле имеют собак, а не кошек! Поэтому удалите возраст собак из Жениного массива.
// 2. Создайте общий массив с данными Жени (исправленными) и Юли.
// 3. Для каждой кошки этого общего массива выведите в консоль текст:
// - если кошка взрослая -  Кошка № 1 взрослая, ей 6 лет
// - если котёнок - Кошка № 2 ещё котёнок
// 4. Вызовите функцию для двух наборов тестовых данных.
let verifyCats = (arr1, arr2) => {
    let noDogs = arr1.slice(1, arr1.length - 1)
    let all = arr2.concat(noDogs)
    all.forEach((item, index) => {
        if (item < 2) {
            console.log(`кошка №${index+1} еще котенок,ему ${item} год`)
        } else if (item < 5) {
            console.log(`кошка №${index+1} взрослая, ей ${item} года`)
        } else if (item >= 5) {
            console.log(`кошка №${index+1} взрослая, ей ${item} лет`)
        } else {
            console.log('error')
        }
    })
}
let arrZ1 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10]
let arrY1 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]
let arrZ2 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
let arrY2 = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
verifyCats(arrZ1, arrY1)
verifyCats(arrZ2, arrY2)


//7
// Определить массив, например let arr = [5, 4, 3, 8, 0];
// Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// запуск функции filterFor(arr, 10) дает результат []
// запуск функции filterFor(arr, 3.11) дает результат [4,5,8]
let arr1 = [5, 4, 3, 8, 0]
let filterFor = (arr, a) => {
    let arr2 = arr.filter(item => item >= a)
    return arr2
}
console.log(filterFor(arr1, 5))
const names = ['alla', 'oleg', 'yanna', 'kat', 'julia']
let sortedNames = names.sort()
console.log(sortedNames)


//8

// Создайте функцию getAverageHumanAge, которая принимает массив возрастов кошек (catAges) и выполняет следующие действия по порядку:
// 1. Рассчитывает человеческий возраст по следующей формуле: если возраст кошки <= 2 года, человеческий возраст = возраст кошки * 10. Если кошке больше 2 лет, человеческий возраст = возраст кошки * 7.
// 2. Исключает всех кошек младше 18 человеческих лет.
// 3. Возвращает средний человеческий возраст для всех взрослых кошек.
// Вызовите функцию для обоих наборов тестовых данных.
let getAverageHumanAge = (arr) => {
    let peopleAge = arr.map(item => item <= 2 ? item * 10 : item * 7)
    let old = peopleAge.filter(item => item >= 18)
    let last = old.reduce((acc, item) => {
        return amount = acc += item
    }, 0)
    return last / old.length
}
catAges = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2]
catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2]
console.log(getAverageHumanAge(catAges))
console.log(getAverageHumanAge(catAges2))
