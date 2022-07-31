1
if (first === 'hidden') {
    alert('visible')
} else {
    alert('hidden')
}




2
let point = 2;
if (point === 0) {
    alert(1);
} else if (point < 0) {
    alert(point = 'less then zero');
} else {
    alert(point = 2 * 10)
}




3
let result = 2;
let user = Number(prompt('Какое число??'));
if (user < 5) {
    result = 0;
} else {
    result = 1;
}
console.log(result);




4
let one = Number(prompt('Введите первое число'));
let two = Number(prompt('Введите второе число'));
let result1 = 'Большее число - ' + one;
let result2 = 'Большее число - ' + two;
let result3 = 'Числа равны: ' + one + '=' + two;

if (one > two) {
    alert(result1);
    console.log(result1);
} else if (one < two) {
    alert(result2);
    console.log(result2);
} else if (one === two) {
    alert(result3);
    console.log(result3);
}




5
let num1 = Number(prompt('Первое число'));
let num2 = Number(prompt('Второе число'));

if (Number(num1) % Number(num2) == 0) {
    alert('Числа кратны')

} else {
    console.log(alert('Числа не кратны'))
}




6

let middleBall = Number(prompt('Ваш средний балл?'));

if (middleBall <= 4) {
    alert('Двоечник');
    console.log('Двоечник')
} else if (middleBall < 9) {
    alert('можно лучше');
    console.log('можно лучше')
} else if (middleBall < 11) {
    alert("Отлично");
    console.log('Отлично')
}





7
let testBall = Number(prompt('Ваш балл за экзамен(от 0 до 100)'));
let projBall = Number(prompt('Количество выполненных проектов'));

let ball3 = (100)
if (testBall > 90) {
    console.log(100);
    alert(100);


} else if (projBall > 10) {
    console.log(100);
    alert(100);
} else if (testBall > 75) {
    console.log(90);
    alert(90);
} else if (projBall > 4) {
    console.log(90);
    alert(90);
} else if (testBall > 50) {
    console.log(75);
    alert(75);
} else if (projBall > 1) {
    console.log(75);
    alert(75);
} else {
    console.log(0);
    alert(0);
}




8
let days = Number(prompt('На сколько дней желаете арендовать авто?\nПри аренде на 3 дня и более ваша скидка составит 20$\nПри аренде на 7 дней и более ваша скидка составит 70$'));
let prize = 40;

if (7 > days > 2) {
    alert((days * Number(prize) - 20) + '$');
} else if (days >= 7) {
    alert((days * Number(prize) - 70) + '$');
} else if (days < 3) {
    alert(prize * days)
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

    if (Number(point) % 15 === 0) {
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
