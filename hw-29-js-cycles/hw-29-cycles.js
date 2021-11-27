/*Подсчитать сумму всех чисел в
заданном пользователем диапазоне.*/

/*let number1 = Number(prompt('Введите число от 1 до 10'));
let number2 = Number(prompt('Введите число от 1 до 10'));
let sum = 0;

for (let i = number1; i < number2; i++) {
    console.log(i);
    sum = i + sum;
}
console.log('result', sum);
// console.log(`Сумма всех чисел диапазона ${sum}`);
*/



/*Запросить 2 числа и
найти только наибольший общий делитель.*/



// Version 1

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



// Version 2 Sample Correct

/*let num1 = 50;
let num2 = 175;


for(let index = 1; index <= num1; index++){
    if(num1 % index === 0 && num2 % index === 0 ){
        console.log(index)
    }
}*/


// Version 3 Correct

/*let number1 = prompt('Enter number 1');
let number2 = prompt('Enter number 2');

for (let index = 1; index <= number2; index++) {
    if(number1 % index === 0 && number2 % index === 0) {
        console.log(`Наибольший общий делитель ${index}`);
    }
};*/






/*Запросить у пользователя число и
вывести все делители этого числа.*/

/*let a = prompt('Enter number')
for (let index = 0; index <= a; index++) {
   if (a % index === 0) {
       console.log(index);
   }
}*/


/*Определить количество цифр в введенном числе.*/


// Version 1 Correct

/*let number = 354;
let totalQuantity = 0;
for (let i=1; number>=1; i++){
    number /= 10;
    totalQuantity = i;
}
console.log(`Количество цифр в введенном числе = ${totalQuantity}`);*/



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

//V2 Correct + Array


// 1 получил инпут в виде строки в которой числа разделены пробелами
// 2 строку преопразовал в массив split(" ") "1 2 3" -> ["1", "2", "3"]
// в цикле
// 3 строки который обозначают цифры приводим в типу даных число (целочисленное) parseInt "1" -> 1
//

/*let positiveNumberCount = 0, negativeNumberCount = 0, zeroNumberCount = 0, evenNumbers = 0, oddNumbers = 0;
let input10 = prompt('введите 10 чисел через пробел: ');
let strings = input10.split(" ");


for (let i = 0; i < strings.length; i++) {
    let num = parseInt(strings[i]);
    if (num > 0) {
        positiveNumberCount = positiveNumberCount + 1;
    } else if (num < 0) {
        negativeNumberCount++;
    } else if (num === 0) {
        zeroNumberCount++;
    }
   // debugger
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

// Version 3 Correct


/*let userNumber;

let minus = 0;
let plus = 0;
let zeros = 0 ;

let even = 0;
let odd = 0;

for(i = 0; i < 10;   i++ ){


    userNumber = Number(prompt('Number'));

    if (userNumber < 0){
        minus = minus + 1;
    } else if (userNumber > 0) {
        plus = plus + 1;
    } else {
        zeros = zeros + 1;
    }

    if (userNumber % 2 === 0) {
        even= even + 1 ;
    } else {
        odd = odd + 1;
    }


}


console.log('< 0 ' + minus);
console.log('> 0 ' +  plus);
console.log('0 '+ zeros);
console.log('even' + even);
console.log('odd ' + odd);

*/



/*Зациклить калькулятор.
Запросить у пользователя 2 числа и знак,
решить пример,
вывести результат и спросить, хочет ли он решить еще один пример.
И так до тех пор, пока пользователь не откажется.*/

//V1 switch/case

// Version 1

/*do {
    let number1 = Number(prompt('Enter first number'));
    let symbol = prompt('Enter symbol');
    let number2 = Number(prompt('Enter second number'));
    if (isNaN(number1) || isNaN(number2)) {
        alert('Incorrect number');
    }
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
    }
while (confirm('Repeat?')) ;*/

// Version 2

/*do {
    let number1 = parseInt(prompt('Enter first number')) ;
    let symbol = prompt('Enter symbol');
    let number2 = parseInt(prompt('Enter second number'));

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
} while (confirm('Repeat?'));*/

// Version 3 if/else

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
            alert('Incorrect symbol');
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

// Practice

let a;
let b;

for ( let i = 1;  i < 5 ; i = i + 1 ) {
    if (i === 1 ) {

        console.log('1 Молоко');

    } else if (i === 2) {

        console.log('2 Сир');

            } else if (i === 3) {

        console.log( '3 Масло');

                    } else {

        console.log('4 Йогурт');

    }
}
console.log();




