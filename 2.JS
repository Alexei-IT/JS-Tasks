1
let first = 'hidden'
if (first === 'hidden') {
    first = 'visible'
    console.log('visible')
} else if (first = 'visible') {
    console.log('hidden')
}


2
let point = 2;
if (point === 0) {
    point = 1;
} else if (point < 0) {
    point = 'less then zero';
} else {
    point = 2 * 10
}
console.log(point)


3
let result = prompt('Введите число')
    (result < 5) ? result = 0 : result = 1;
console.log(result);


4
let one = Number(prompt('Введите первое число'));
let two = Number(prompt('Введите второе число'));


if (one > two) {

    console.log('Большее число - ' + one);
} else if (one < two) {
    console.log('Большее число - ' + two);

} else if (one === two) {

    console.log('Числа равны: ' + one + '=' + two);
}


5
let num1 = Number(prompt('Первое число'));
let num2 = Number(prompt('Второе число'));

if (Number(num1) % Number(num2) == 0) {
    console.log('Числа кратны')

} else {
    console.log('Числа не кратны')
}


6

let middleBall = Number(prompt('Ваш средний балл?'));

if (middleBall <= 4) {
    console.log('Двоечник');

} else if (middleBall < 9) {

    console.log('можно лучше')
} else if (middleBall < 11) {

    console.log('Отлично')
}



7
let testBall = Number(prompt('Ваш балл за экзамен(от 0 до 100)'));
let projBall = Number(prompt('Количество выполненных проектов'));

if (testBall > 90 || projBall > 10) {
    console.log(100)
} else if (testBall > 75 || projBall > 4) {
    console.log(90)
} else if (testBall > 50 || projBall > 1) {
    console.log(50)
} else {
    console.log(0)
}



8
let days = Number(prompt('На сколько дней желаете арендовать авто?\nПри аренде на 3 дня и более ваша скидка составит 20$\nПри аренде на 7 дней и более ваша скидка составит 70$'));
let prize = 40;

if (7 > days > 2) {
    console.log((days * Number(prize) - 20) + '$');
} else if (days >= 7) {
    console.log((days * Number(prize) - 70) + '$');
} else if (days < 3) {
    console.log(prize * days)
}



9
for (let i = 10; i < 21; i++) {
    alert(i);
    console.log(i)
}

10
for (let i = 0; i < 10; i += 2) {

    let t = Number(prompt('Число'));
    if (t == 10) {
        alert('Равно 10')
    } else {
        alert('Не равно 10')
    }
}

11
let limit = Number(prompt('Число'))
for (let i = 1; i <= limit; i++) {
    console.log(i ** 2)
}

12

for (let point = 1; point < 101; point++) {

    if (Number(point) % 5 || 3 === 0) {
        console.log('Fizzbuzz');
        console.log(point)

    } else if (Number(point) % 3 === 0) {

        console.log('Fizz')


    } else if (Number(point) % 5 === 0) {

        console.log('Buzz')

    } else {
        console.log(point)
    }

}
