/*1. Створи об'єкт, що описує автомобіль
(виробник,
модель,
рік випуску,
середня швидкість,
обсяг паливного бака,
середня витрата палива на 100 км.,
водії), і
наступні функції для роботи з цим об'єктом:
Висновок на екран з інформацією про автомобіль.
Додавання водія, який має право керувати автомобілем.
Заправка автомобіля.
Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.
Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину,
а також потрібно перевіряти чи має право водій керувати даним автомобілем
(ім'я водія функція приймає другим аргументом).
Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки,
якщо палива не вистачить потрібно вивести повідомлення,
про це і запропонувати заправити автомобіль.
.*/

/*let auto = {
    manufacturer: 'Germany',
    model: 'Audi RS Q8',
    year: 2021,
    averageSpeed: 150,
    gasInTank: 70,
    averageConsumption: 7,
    drivers: {
        driver1: 'Ivan',
        driver2:'Sasha',
    }
}

//F1
function displayInfo(car){
    let info =
        car.manufacturer + '\n'
        + car.model + '\n'
        + car.year + '\n'
        + car.averageSpeed + '\n'
        + car.gasInTank + '\n'
        + car.averageConsumption;
    return info;
}
console.log(displayInfo(auto));

//F2
function addNewDriver (car,driver) {
    auto.drivers.driver3 = driver;
}
addNewDriver (auto, 'Nataliia');
console.log(auto.drivers.driver3);

//F3
function addGas (car, gas){
    car.gasInTank = car.gasInTank + gas;
}
console.log(auto.gasInTank + 'litres');
addGas (auto, 20);
console.log(auto.gasInTank);

//F4
function timeForTravel (car, distance) {
    let time = distance / car.averageSpeed;
    let totalTime;
    if (time<4){
        totalTime = time;
        return totalTime;
    } else {
        let t = (time - time % 4) / 4;
        totalTime = t +time;
    }
    return totalTime;
}
console.log(timeForTravel(auto, 400));*/


/*2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и
следующие функции для работы с этим объектом:
Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби.*/

/*function fraction(nominator,denominator){
    return {nominator:nominator, denominator:denominator};
}
let firstNumber = fraction(5,10);
let secondNumber = fraction(2,15);

//F1
function addFraction(obj1, obj2){
    let resultTopNumber = obj1.nominator + obj2.nominator;
    let resultBottomNumber = obj1.denominator + obj2.denominator;
    console.log(`${resultTopNumber}/${resultBottomNumber}`);
}
addFraction(firstNumber,secondNumber);

//F2
function subFraction(obj1, obj2){
    let resultTopNumber = obj1.nominator - obj2.nominator;
    let resultBottomNumber = obj1.denominator - obj2.denominator;
    console.log(`${resultTopNumber}/${resultBottomNumber}`);
}
subFraction(firstNumber,secondNumber);

//F3
function multiFraction(obj1, obj2){
    let resultTopNumber = obj1.nominator * obj2.nominator;
    let resultBottomNumber = obj1.denominator * obj2.denominator;
    console.log(`${resultTopNumber}/${resultBottomNumber}`);
}
multiFraction(firstNumber,secondNumber);*/


/*3. Создать объект, описывающий время (часы, минуты, секунды), и
следующие функции для работы с этим объектом:
Функция вывода времени на экран;
Функция изменения времени на переданное количество секунд;
Функция изменения времени на переданное количество минут;
Функция изменения времени на переданное количество часов.
Учтите, что в последних 3-х функциях,
при изменении одной части времени, может измениться и другая.
Например, если ко времени «20:30:45» добавить 30 секунд, то
должно получиться «20:31:15», а не «20:30:75».*/

// let time = {
//     hours: 1,
//     minutes: 1,
//     seconds: 1,
//     days: 0,
//
//     show() {
//         alert(`${this.days}:${this.hours}:${this.minutes}:${this.seconds}`);
//     },
//
//     changeSeconds(sec) {
//         let h = sec / 3600;
//         this.hours += Math.floor(h);
//         let m = (sec - Math.floor(h) * 3600) / 60;
//         this.minutes += Math.floor(m);
//         this.seconds += sec - Math.floor(h) * 3600 - Math.floor(m) * 60;
//
//         let d = 0;
//         if (this.seconds >= 60) {
//             this.seconds %= 60;
//             this.minutes += Math.floor(this.seconds / 60);
//         }
//         if (this.minutes >= 60) {
//             this.minutes %= 60;
//             this.hours += Math.floor(this.minutes / 60);
//         }
//         if (this.hours > 23) {
//             this.hours %= 24;
//             this.days = Math.floor(this.hours / 24);
//         }
//         return time;
//     },
//
//     changeMinutes(min) {
//         let h = min / 60;
//         this.hours += Math.floor(h);
//         this.minutes += min - Math.floor(h) * 60;
//         if (this.minutes >= 60) {
//             this.minutes %= 60;
//             this.hours += Math.floor(h / 60);
//         }
//         if (this.hours > 23) {
//             this.hours %= 24;
//             this.days = Math.floor(this.hours / 24);
//         }
//         return time;
//     },
//
//     changeHours(hour) {
//         this.hours = (this.hours + hour) % 24;
//         let d = 0;
//         if (this.hours > 23) {
//             this.days = Math.floor(this.hours / 24);
//         }
//         return time;
//     }
// };
//
// time.hours = +prompt("Enter hours", 0);
// time.minutes = +prompt("Enter minutes", 0);
// time.seconds = +prompt("Enter seconds", 0);
//
// time.show();
// console.log(time.changeSeconds(3600));
// time.show();
// console.log(time.changeMinutes(1400));
// time.show();
// console.log(time.changeHours(45));
// time.show();
