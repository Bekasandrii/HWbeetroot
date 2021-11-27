/*Запросить у пользователя его возраст и
определить, кем он является:
ребенком (0–2),
подростком (12–18),
взрослым (18_60) или
пенсионером (60– ...).*/

/*let age = prompt('How old are you?', 0);
if (age >= 0 && age < 12)
{
    console.log('You are a child');
}
else if (age >= 12 && age < 18)
{
    console.log('You are a teenager');
}
else if (age >= 18 && age < 60)
{
    console.log('You are an adult');
}
else if (age >= 60)
{
    console.log('You are an retired');
}*/

/*Запросить у пользователя число от 0 до 9 и
вывести ему спецсимвол,
который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/

/*let number = prompt('Enter the number from 0 to 9', 0);
switch(number) {
    case '0':
        console.log('0 is )');
        break;
    case '1':
        console.log('1 is !');
        break;
    case '2':
        console.log('2 is @');
        break;
    case '3':
        console.log('3 is #');
        break;
    case '4':
        console.log('4 is $');
        break;
    case '5':
        console.log('5 is %');
        break;
    case '6':
        console.log('6 is ^');
        break;
    case '7':
        console.log('7 is &');
        break;
    case '8':
        console.log('8 is *');
        break;
    case '9':
        console.log('9 is (');
        break;
}*/

/*Запросить у пользователя трехзначное число
и проверить, есть ли в нем одинаковые цифры.*/


/*let number = prompt('Введите трехзначное число')
if (number >= 100 && number <= 999) {
    if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]){
        alert(number + 'Есть одинаковые цифры')
    }else {
        alert('Нет одинаковых цифер')
    }
  }else {
    alert('Wrong')
}*/

// version 2

/*let threeNumberButton = document.getElementById('threeNumberButton');
threeNumberButton.onclick = function () {
    let inputValue = document.getElementById('threeNumber').value;
    let threeNumberResult = document.querySelector('.threeNumberResult');
    let resultFunction;
    let number = inputValue;

    let number = prompt('Enter the number from 100 to 999', 0);
    number = number + '';
    if (number[0] === number[1] || number[0] === number[2] || number[1] === number[2]) {
        alert('TRUE');
    } else
        alert('FALSE');
}*/

/*------------Task 4--------------*/

// let year = prompt('Enter any year', 0);
//  if (year %4 == 0 && year %100 !== 0)
//  {
//      alert('Leap year');
//  }
//  else
//      alert('Not Leap Year');


 /*Запросить у пользователя год и
 проверить, високосный он или нет.
 Високосный год либо кратен 400, либо кратен 4 и
 при этом не кратен 100.*/

/*let number = prompt('Enter the number from 0 to 9999');
number = number + '';
if (number === number.split('').reverse().join('')) {
    alert('Palindrome');
}else{
    alert('Not Palindrome');
}*/




 /*Написать конвертор валют.
 Пользователь вводит количество USD,
 выбирает, в какую валюту хочет перевести EUR, UAN или AZN,
 и получает в ответ соответствующую сумму.*/

/*let amount = prompt('Enter the amount of USD:', 0);
let currency = prompt('EUR = 1, UAH = 2, AZN = 3', 0);
switch(currency) {
    case '1':
        console.log(amount*0.89 + 'EUR');
        break;
    case '2':
        console.log(amount*25.90 + 'UAH');
        break;
    case '3':
        console.log(amount*1.69 + 'AZN');
        break;
}*/

/*Запросить у пользователя сумму покупки
и вывести сумму к оплате со скидкой:
от 200 до 300 – скидка будет 3%,
от 300 до 500 – 5%,
от 500 и выше – 7%.*/

/*let amount = prompt('Enter the value of purchase:');
if (amount >=200 && amount < 300)
    alert(amount/100*97 + '$ with 3% discount');
else if (amount >=300 && amount < 500)
    alert(amount/100*95 + '$ with 5% discount');
else if (amount >=500)
    alert(amount/100*93 + '$ with 7% discount');
*/

 /*Запросить у пользователя длину окружности и периметр квадрата.
 Определить, может ли такая окружность поместиться в указанный квадрат.*/

/*let circleLength = prompt('Enter the circle length:');
let squarePerimeter = prompt('Enter the Perimeter of the square:');
if (circleLength / 3.14 < squarePerimeter / 4)
    alert('Окружность помещается в квадрат');
else
    alert('Окружность не помещается в квадрат');*/

/*Задать пользователю 3 вопроса,
в каждом вопросе по 3 варианта ответа.
За каждый правильный ответ начисляется 2 балла.
После вопросов выведите пользователю количество набранных баллов.*/

/*let capital = prompt('What is the capital of Great Britain? 1 - London 2 - New York 3 - Paris');
let currency = prompt('What is the currency of the USA? 1 - USD 2 - UAH 3 - RMB');
let country = prompt('What is the most populated country? 1 - the USA 2 - Japan 3 - China');
let score = 1;
if (capital === 1) {
    alert(score + 1);
}else if (currency === 1) {
    alert(score + 1);
}else if (country === 3) {
    alert(score + 1);
}
alert('Your score is ' + score);*/

/*Запросить дату (день, месяц, год) и
вывести следующую за ней дату.
Учтите возможность перехода на следующий месяц, год, а также високосный год.*/

/*let date = prompt('Enter the date day-month-year ');
date = date.split('-');
let oldDate = new Date(date[2], date[1]-1, date[0]); //месяцы начинаются с 0 массивы
oldDate.setDate(oldDate.getDate()+1);
alert(oldDate);*/