//1
//В комментариях к каждой строке напишите, как работают эти округления.
Math.round(5.7, 5.8, 5.6) //Возвращает значение числа, округлённое до ближайшего целого.
Math.ceil(5.4, 5.5, 8.4) //Возвращает значение числа, округлённое к большему целому.
Math.floor(5.4, 5.5, 5.6) //Возвращает значение числа, округлённое к меньшему целому.

//2
//Выведите в консоль фразы в 2 строки:
// Сегодня 27.10.2022 (здесь будет ваша дата)
// 19 часов 20 минут (здесь будет ваше время)
let
    now = new Date()
hour = now.getHours()
minute = now.getMinutes()
let last = hour % 10
let last2 = minute % 10
if (last == 1 && last2 == 1) {
    console.log(`${hour} час ${minute} минута`)
} else if (last < 5 && last2 < 5) {
    console.log(`${hour} часа ${minute} минуты`)
} else if (last < 11 && last2 < 11) {
    console.log(`${hour} часов ${minute} минут`)
}
console.log('Сегодня ' + now.toLocaleDateString())
    // console.log(`${now.getHours()} час ${now.getMinutes()} минут`)
