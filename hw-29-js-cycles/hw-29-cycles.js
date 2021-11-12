/*Подсчитать сумму всех чисел в
заданном пользователем диапазоне.*/

/*let number1 = Number( prompt("Введите число от 1 до 10"));
 console.log('number1', number1);
 let number2 = Number(prompt("Введите число от 1 до 10"));
 console.log('number2', number2);
 if (number1 > number2) {
     let number4 = number1;
     number1 = number2;
     number2 = number4;
 }
 let number3 = null;
 for ( let i = number1; i < number2; i++) {
     console.log(i);
     number3 = i + number3;
 }
 console.log('result', number3);*/


/*Запросить 2 числа и
найти только наибольший общий делитель.*/

//V1

/*let number1 = prompt('Enter number 1');
let number2 = prompt('Enter number 2');
let min = number1 < number2?number1:number2;
let arr1 = [];
for (let index = 0; index <= min; index++) {
    if ((0 === (number1 % index)) && (0 === (number2 % index))){
        arr1.push(index);
    }
}
console.log(arr1);
let s = Math.max.apply(null, arr1);
console.log (s);*/


//V2

/*let number1 = prompt("Enter number 1");
let number2 = prompt("Enter number 2");
for (let index = number1; index <= number1; index--) {
    if(number1 % index === 0 && number2 % index === 0) {
        alert(`${index}`);
        break;
    }
}*/

/*Запросить у пользователя число и
вывести все делители этого числа.*/

/*let a = prompt('Enter number')
for (let index = 0; index <= a; index++) {
   if (a % index === 0) {
       alert(`${index}`);
   }
}*/

/*Определить количество цифр в введенном числе.*/

/*let n = prompt('Enter number')
// alert(n.length) v1
let count = 0
for ( const nElement of n.split ('')){
   count++
}
alert(count)
*/

/*Запросить у пользователя 10 чисел и
подсчитать, сколько он ввел положительных,
отрицательных и нулей.
При этом также посчитать, сколько четных и нечетных.
Вывести статистику на экран.
Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем. V1
 */

//V1

/*let arr = prompt('введите 10 чисел через побел',).split` `;

let positive = [...arr].map(e => Math.sign(+e) ).filter(cur => + cur === 1).length,
    negative = [...arr].map(e => Math.sign(+e) ).filter(cur => + cur === -1).length,
    loyal = [...arr].map(e => Math.sign(+e) ).filter(cur => + cur === 0).length;

if(positive) alert('Положительных: ' + positive);
if(negative) alert('Отрицательных: ' + negative);
if(loyal) alert('Нулей: ' + loyal);*/

//V2


// 1 получил инпут в виде строки в которой числа разделены пробелами
// 2 строку преопразовал в массив split(" ") "1 2 3" -> ["1", "2", "3"]
// в цикле
// 3 строки который обозначают цифры приводим в типу даных число (целочисленное) parseInt "1" -> 1
//

/*let positiveNumberCount = 0, negativeNumberCount = 0, zeroNumberCount = 0, evenNumbers = 0, oddNumbers = 0;
let number10 = prompt('введите 10 чисел через пробел: ');
let strings = number10.split(" ");


for (let i = 0; i < strings.length; i++) {
    debugger
    let num = parseInt(strings[i]);
    if (num > 0) {
        positiveNumberCount = positiveNumberCount + 1;
    } else if (num < 0) {
        negativeNumberCount++;
    } else if (num === 0) {
        zeroNumberCount++;
    }
   debugger
    if (num % 2 === 0) {
        evenNumbers++;
        }
    else {
        oddNumbers++
    }
}
console.log('Количество положительных: ', positiveNumberCount );
console.log('Количество отрицательных: ', negativeNumberCount );
console.log('Количество нулей ', zeroNumberCount);
console.log('Четные числа ', evenNumbers);
console.log('Нечетные числа', oddNumbers);*/

/*Зациклить калькулятор.
Запросить у пользователя 2 числа и знак,
решить пример,
вывести результат и спросить, хочет ли он решить еще один пример.
И так до тех пор, пока пользователь не откажется.*/

//V1 switch/case

do {
    let number1 = parseInt(prompt('Enter first number')) ;
    let number2 = parseInt(prompt('Enter second number'));
    let symbol = prompt('Enter symbol');
    switch (symbol) {
        case '+':
            alert(number1 + number2);
            break;
        case '-':
            alert(number1 - number2);
            break;
        case '*':
            alert(number1 * number2);
            break;
        case '/':
            alert(number1 / number2);
            break;
    }
} while (confirm('Repeat?'));

//V2  if/else

/*do {
    let number1 = parseInt(prompt('Enter first number')) ;
    let number2 = parseInt(prompt('Enter second number'));
    if (isNaN(number1) || isNaN(number2)){
        alert('Incorrect number');
    }else {
        let symbol = prompt('Enter symbol');
        if (symbol === '+') {
            alert(number1 + number2);
        } else if (symbol === '-') {
            alert(number1 - number2);
        } else if (symbol === '*') {
            alert(number1 * number2);
        } else if (symbol === '/') {
            alert(number1 / number2);
        } else {
            alert('Incorrect symbol')
        }
    }
} while (confirm('Repeat?'));*/



/*Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10.
 */

/*for (let j = 2; j <= 9; j++) {
    for (let y = 1; y <= 10; y++) {
        console.log(j + '*' + y +'=' + (j*y))
    }

}*/







