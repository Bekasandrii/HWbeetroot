/*1. Создать объект, описывающий автомобиль
(производитель, модель, год выпуска, средняя скорость), и
следующие функции для работы с этим объектом:
Функция для вывода на экран информации об автомобиле;
Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью.
Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.*/


/*let myCar = {
    vendor: 'Audi',
    model: 'RS Q8',
    year: 2021,
    averageSpeed: 200,
}
console.log(myCar)

function myCarInfo(vendor, model, year, averageSpeed) {
    return {
         vendor: vendor,
         model: model,
         year: year,
         averageSpeed: averageSpeed,
    };
}
let carInfo = myCarInfo('Audi', 'RS Q8',2021, 200);
myCarInfo()*/




/*let MyCar = new car("Ford", "Escort", 1997,50);

function car(vendor, model, year,averageSpeed) {
    this.vendor = vendor;
    this.model = model;
    this.year = year;
    this.averageSpeed = averageSpeed;
}
function screen () {
    document.write("<h1>test</h1>");
    document.write(MyCar.vendor);
    document.write(MyCar.model);
   document.write(MyCar.year);
    document.write(MyCar.averageSpeed);
}
screen()

function distance() {
    let result = distance / car.mediumAverageSpeed;
    let relax = 0;
    result = Math.trunc(result) + (((result - (Math.trunc(result))) * 60) / 100)
    for (let hour = 1; hour <= result; hour++) {
        if (hour % 5 === 0) {
            relax++;
            result++;
        }
    }
    result = result.toFixed(2).split(".");
    if (relax === 0) {
        document.write('Чтобы пройти эту дистанцию: ${distance} km. Вам нужно - ${result[0]}h. ${result[1]}m. И вам не понадобится отдых.');
    } else {
        document.write('Чтобы пройти эту дистанцию: ${distance} km. Вам нужно - ${result[0]}h. ${result[1]}m. <br>${relax}h. Вы потратили на отдых.');
        car.print();
        car.TimeFromDistance(800);
    }
}*/


/*Version 2*/


/*2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и
следующие функции для работы с этим объектом:
Функция сложения 2-х объектов-дробей;
Функция вычитания 2-х объектов-дробей;
Функция умножения 2-х объектов-дробей;
Функция деления 2-х объектов-дробей;
Функция сокращения объекта-дроби.*/

// const rat = rational.make(5, 4);
// rational.numer(rat);
// rational.denom(rat);

function Fraction(nominator,denominator){
    return {nominator:nominator, denominator:denominator};
}
let firstNumber = Fraction(5,10);
let secondNumber = Fraction(2,15);

function multiFraction(obj1,obj2){
    let resultUpNumber = obj1.nominator * obj2.nominator;
    let resultDownNumber = obj1.denominator * obj2.denominator;
    alert(`${resultUpNumber}/${resultDownNumber}`);
}
multiFraction(firstNumber,secondNumber);


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