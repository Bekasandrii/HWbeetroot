
/*Напиши всі можливі варіанти створення функцій.*/

// Option 1

/*console.log(nameOfFunction(2,4,6));

function nameOfFunction(a, f, h){
    let c = a + f + h
    return c;
}*/

// Option 2

/*let g;
g = 10;
console.log(g);
g = function  (a, f, h){
    let c = a + f + h
    return c;
}
console.log(g(2,4,7));

g = 10;
console.log(g)*/


// Option 3

/*let g = (a,b) => a + b;
console.log(g(10,12));
console.log(g)*/



/*Створи функцію, яка буде виводити кількість переданих їй аргументів.*/

/*function displayNumOfArg (...arr){
    let num = arr.length;
    console.log(num)
}
displayNumOfArg(4,4,4,4,4)*/



/*Напиши функцію, яка приймає 2 числа і повертає :
-1 - якщо перше число менше, ніж друге;
 1 - якщо перше число більше, ніж друге;
 0 - якщо числа рівні.*/

/*function compareTwoNumbers(number1, number2) {
    if (number1 < number2) {
        return -1;
    } else if (number1 > number2) {
        return 1;
    } else if (number1 === number2) {
        return 0;
    } else {
        return 'Неправильное значение'
    }
}
console.log (compareTwoNumbers(345, 500))*/

// Version 2 only if

/*function compareTwoNumbers(number1, number2) {
    if (number1 < number2) {
        return -1;
    } if (number1 > number2) {
        return 1;
    } if (number1 === number2) {
        return 0;
    }
        return 'Неправильное значение'
}
console.log(compareTwoNumbers(4,1));*/

/*Напиши функцію,
яка приймає три окремі цифри і перетворює їх в одне число.
Наприклад: цифри 1, 4, 9 перетворяться в число 149.*/


/*function uniteThreeNumbers(number1, number2, number3) {
    let result = "" + number1 + number2 + number3;
    return parseInt(result);
}
console.log(uniteThreeNumbers(1, 4, 3));
console.log(typeof(uniteThreeNumbers(1, 2, 3)));*/


/*Написать функцию,
которая вычисляет факториал переданного ей числа.
Факториал натурального числа – это число, умноженное на "себя минус один",
затем на "себя минус два", и так далее до 1.
Факториал n обозначается как n!    n! = n * (n - 1) * (n - 2) * ...*1*/


/*function factorial (n) {
    return (n !== 1) ? n * factorial(n - 1 ) : 1;
}
alert(factorial (4))*/


/*Написать функцию,
которая принимает три отдельные цифры и превращает их в одно число.
Например: цифры 1, 4, 9 превратятся в число 149.*/


// Version 1 string

/*function sum(getNumber1, getNumber2, getNumber3){
    return getNumber1 + getNumber2 + getNumber3;
}
let result = sum('1', '4','9');
alert( result );*/

// Version 2 number


/*function numberConversion(a,b,c) {
    let num;
    num = String(a) + String(b)  +String(c);
    return Number(num);
}
let result = numberConversion(1,4,9);
console.log(typeof(result),result)*/



/*Написать функцию, которая принимает длину и ширину прямоугольника и
вычисляет его площадь.
Если в функцию передали 1 параметр,
то она вычисляет площадь квадрата.*/

/*function shapeArea (a, b) {
    debugger
    console.log(Boolean(a));
    console.log(Boolean(b))
    if (b === undefined && a){  
        return a * a;
    }else if (a && b){
        return a * b;
    }else{
        return 'Enter a number';
    }

}
console.log(shapeArea(3, 6));*/


/* Написать функцию, которая проверяет, является ли переданное ей число совершенным.
Совершенное число – это число, равное сумме всех своих собственных делителей.*/

/*let a = parseInt(prompt('Введите число '));
let perfectNumber = function (a){
    let result = 0;
    for (let i = 1; i < a; i++){
        if (a % i === 0 ){
            result += i;
        }
    }
        if (result === a) {
            return `Введенное число ${a} является совершенным`;
        }else{
            return `Введенное число ${a} не является совершенным`;
        }
}
console.log(perfectNumber(a));*/


/*
Написать функцию,
которая принимает минимальное и максимальное значения для диапазона, и
выводит только те числа из диапазона, которые являются совершенными.
Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.*/

/*let numberOne = prompt('Введите минимальное значение диапазона ');
let numberTwo = prompt('Введите максимальное значение диапазона ');

let perfectNumber = function (a){
    let result = 0;
    for (let i = 1; i < a; i++){
        if (a % i === 0){
            result += i;
        }
    }
    return result === a; // Boolean : true or false
}

function range (start, finish){
    for (let i = start; i <= finish; i++){
        if (perfectNumber(i)){
            console.log(i);
        }
    }
}
range(numberOne, numberTwo);*/

/*Написать функцию, которая
принимает время (часы, минуты, секунды) и
выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были переданы,
то выводить их как 00.*/

/*function getTime (hours,minutes,seconds){
    return ""
}*/


/* Написать функцию, которая принимает часы, минуты и секунды и
возвращает это время в секундах.*/

/*function timeInSeconds (hours, minutes, seconds) {
    let result = hours * 3600 + minutes *60 + seconds;
    return result;
}
console.log(timeInSeconds(22,11,45))*/


    /*Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»*/