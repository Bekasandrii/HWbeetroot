/*========================== Завдання 1 ============================

Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
поле, що зберігає радіус кола;
get-властивість, яке повертає радіус кола;
set-властивість, що встановлює радіус кола;
get-властивість, яке повертає діаметр кола;
метод, що обчислює площу кола;
метод, що обчислює довжину кола.
Продемонструй роботу властивостей і методів.*/

/*class Circle {
    constructor (radius){
        this._radius = radius;
    }
    get getRadius (){
        return this._radius;
    }
    set setRadius (setRadius){
        this._radius = setRadius;
    }
    get getDiameter (){
        return this._radius * 2;
    }
    circleSquare (){
        return Math.PI * this._radius * 2;
    }
    circleLength (){
        return Math.PI * this._radius * 2;
    }
}

let circleUser = new Circle (20);
console.log(circleUser.getRadius)


console.log(circleUser.setRadius = 15);
console.log(circleUser.getRadius);
console.log(circleUser.getDiameter);
console.log(circleUser.circleSquare());
console.log(circleUser.circleLength());*/



/* =============================== Завдання 2 ===================================

Реалізуй клас, що описує канцелярський маркер. У класі повинні бути такі компоненти:

поле, яке зберігає колір маркера;
поле, яке зберігає кількість чорнил у маркері (у відсотках);
метод для вводу (приймає рядок і виводить текст відповідним кольором;
текст виводиться до тих пір, поки в маркері є чорнило;
один не пробільний символ — це 0,5% чорнил у маркері).
Реалізуй клас, що описує маркер, який можна перезаправляти.
Успадкуй цей клас від простого маркера і додай метод для заправки.
Продемонструй роботу написаних методів.*/

// Version 1

/*class Marker {
    constructor(color, quantity) {
       this.color = color;
       this.quantity = quantity;
    }
    print (text){
        let canPrint =[];
        for(let i = 0; i < text.length; i++){
            if(this.quantity > 0) {
                if (text[i] === ' ') {
                    canPrint.push(text[i]);
                } else if (text[i] !== ' ') {
                    canPrint.push(text[i]);
                    this.quantity = this.quantity - 1;
                }
            }
        }
        return canPrint.join('') + ' ' + ' color ' + this.color;
    }
}
const plainMarker = new Marker ('Green', 12);
console.log(plainMarker.print('Printing text'));

class FillMarker extends Marker {
    constructor(color, quantity) {
        super(color, quantity);
    }
    fill(refuelingLevel){
        this.quantity = this.quantity + refuelingLevel
    }
}
let fillMarker1 = new FillMarker('Blue', 32)
console.log (fillMarker1)

fillMarker1.fill(19);
console.log(fillMarker1)*/

//Version 2

/*class Marker {
    constructor(c, p) {
        this.c = c;
        this.p = p;
    }
    get markerProps() {
        return [this.c, this.p];
    }

    set markerProps(newProps) {
        [this.c, this.p] = [...newProps];
    }

    print(line) {
        let t = document.getElementById("content");
        for (let i = 0; i < line.length; i++) {
            if (this.p != 0) {
                if (line[i] == " ") {
                    this.p += 0.5;
                }
                t.innerHTML += line[i];
                t.style.color = this.c;
                this.p -= 0.5;
            } else {
                document.write("Marker is over");
                break;
            }
        }
    }
}

class FilledMarker extends Marker {
    fill(p) {
        if (p > 100) {
            p = 100;
        } else {
            this.p += p;
        }
    }
}

let marker = new FilledMarker("#838", 2);

marker.fill(31);

const l = `List of Software Inc. workers with names, positions, departments, salaries. Best Regards Jeremy Clarkson - HR Manager of the HR Department`;

marker.print(l);
document.body.setAttribute("style", "font-size: 18px; text-align: center;");*/


/* ========================= Завдання 3 =====================================

Реалізуй клас Employee, що описує працівника, і створи масив працівників банку.
Реалізуй клас EmpTable для генерації HTML-коду таблиці зі списком працівників банку.
Масив працівників необхідно передавати через конструктор,
а отримувати HTML-код за допомогою методу getHtml ().
Створи об'єкт класу EmpTable і виведи на екран результат роботи методу getHtml ().*/

//Version 1

class Employee {  // Реалізуй клас Employee, що описує працівника
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    };

    // set fullName(lastName) {
    //     [this._firstName, this._lastName] = lastName.split(' ');
    // }
    // get fullName2() {
    //     return `${this._firstName} ${this._lastName}`;
    // }

};

let employee1 = new Employee('Dmytro', 'Yaroslavovych');
let employee2 = new Employee('Vasyl', 'Ivanovych');
let employee3 = new Employee('Oleg', 'Viktorovych');
let arrEmployee = [employee1, employee2, employee3] //створи масив працівників банку.
console.log(arrEmployee);



class EmpTable { // Реалізуй клас EmpTable
    constructor(arrEmployee) { //Масив працівників необхідно передавати через конструктор
        this._arrEmployee = arrEmployee;
    }

    get getHtml() { //генерації HTML-коду таблиці зі списком працівників банку.
        let filling = ``;

        for (let i = 0; i < this._arrEmployee.length; i++) {
            filling = filling + `<tr> <td> ${i + 1} </td> <td> ${this._arrEmployee[i]._firstName} </td>  <td>${this._arrEmployee[i]._lastName} </td></tr>`;
        }
        let info = `<table> ${filling}  </table>`
        return info;
    }
    // info = `<table> ${filling}  </table>`
    // return info;
}



let table = new EmpTable(arrEmployee);
console.log(table.getHtml)//отримувати HTML-код за допомогою методу get

//Version 2

/*const mainDiv = document.getElementById("content");

const tableDiv = document.createElement("div");
tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Employee {
    constructor(name, position, department, salary) {
        this.name = name;
        this.position = position;
        this.department = department;
        this.salary = salary;
    }
}
const arrEmp = [
    new Employee("John Doe", "Manager", "Sales", 5000),
    new Employee("Bill Freeman", "Manager", "Sales", 5000),
    new Employee("Uno Dirck", "Manager", "Sales", 5000),
    new Employee("Erick Rapid", "Manager", "Sales", 5000),
    new Employee("Chris Rea", "Manager", "Sales", 5000),
    new Employee("Tommy Lee", "Manager", "Sales", 5000),
    new Employee("Jeck Ward", "DevOps Engineer", "DevOps", 3500),
    new Employee(
        "Rick Depper",
        ".Net Senior Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee("Neo Matrix", "Team Lead", "Desktop Solutions", 5000),
    new Employee(
        "Trinity Matrix",
        ".Net Senior Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee(
        "Rick Grouy",
        ".Net Junior Developer",
        "Desktop Solutions",
        1000
    ),
    new Employee(
        "George McCalister",
        ".Net Junior Developer",
        "Desktop Solutions",
        1000
    ),
    new Employee(
        "Fred Durst",
        ".Net Junior Developer",
        "Desktop Solutions",
        1000
    ),
    new Employee(
        "Piter Parker",
        ".Net Middle Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee(
        "Bro Somebody",
        ".Net Senior Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee(
        "Merlin Mysterier",
        ".Net Middle Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee(
        "Harry Potter",
        ".Net Senior Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee(
        "Norton Commander",
        ".Net Middle Developer",
        "Desktop Solutions",
        4000
    ),
    new Employee("Elon Musk", ".Net Senior Developer", "Desktop Solutions", 4000)
];
class EmpTable {
    constructor(arr) {
        this.arr = arr;
    }
    getHtml() {
        const table = document.getElementById("content__table");
        const array = this.arr;
        const head = document.createElement("tr");
        head.setAttribute("style", "font-size: 18px;");
        const th1 = document.createElement("th");
        th1.textContent = "Name";
        const th2 = document.createElement("th");
        th2.textContent = "Position";
        const th3 = document.createElement("th");
        th3.textContent = "Department";
        const th4 = document.createElement("th");
        th4.textContent = "Salary ($)";
        head.append(th1);
        head.append(th2);
        head.append(th3);
        head.append(th4);
        table.append(head);
        for (let i in array) {
            let tr = document.createElement("tr");
            table.append(tr);
            for (let j in array[i]) {
                let td = document.createElement("td");
                td.textContent = array[i][j];
                tr.append(td);
                td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
            }
        }
        table.setAttribute("border", "2");
        table.setAttribute("bordercolor", "brown");
        table.setAttribute("width", "60%");
        table.setAttribute("style", "margin: auto; background-color: lightgrey;");
    }
}
const tableObj = new EmpTable(arrEmp);
tableObj.getHtml();
*/