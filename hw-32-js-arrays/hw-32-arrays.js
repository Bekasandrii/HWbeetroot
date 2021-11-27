/*1. Создать массив «Список покупок».
Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.
Написать несколько функций для работы с таким массивом.
Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

// Class version

/*class ShopItem {
    constructor(name,quantity,isBought,price) {
        this.name = name;
        this.quantity = quantity;
        this.isBought = isBought;
        this.price = price;
    }
    getSum(){
        return this.quantity * this.price;
    }
};

let shoppingList = [
    new ShopItem ('Banana', 5, true, 15.99),
    new ShopItem ('Cocoa', 1, false, 8.35),
    new ShopItem ('Kiwi', 17, true, 99),
    new ShopItem ('Meat', 34, true, 14),
    new ShopItem ('Bread', 53, true, 28),
];

// Функция для сортировки списка продуктов
function compareNumbers(a,b){
    return a.isBought - b.isBought;
}
shoppingList.sort(compareNumbers);

// shoppingList.sort((a,b) => a.isBought - b.isBought);

console.log(shoppingList);

// Функция принимает название продукта и отмечает его как купленный
let buyProduct = function (massive, name){
    return massive.map(function(item,index,array){
        // console.log('item',array[index]);
        if(item.name === name){
            item.isBought = true;
        }
        return item;

    });
};
let outputBuyProduct =  buyProduct(shoppingList,'Cocoa');
console.log(outputBuyProduct);*/




//Version 2

/*class Product {
    constructor(name, quantity, status) {
        this.name = name;
        this.quantity = quantity;
        this.status = status ?? false;
    }
}
let listBuy = [
    new Product('Audi Q8', 1, true),
    new Product('Pampers', 6, false),
    new Product('Apartment in Europe', 2, true),
   ];



function  showList(listBuy) {
    listBuy.sort((a, b) => {
        return Number(b.status) - Number(a.status)
    });
    listBuy.reverse()
    console.log(listBuy)
    for (let i = 0; i < listBuy.length; i++ ){
        if (listBuy[i].status === 'no'){
            console.log(listBuy[i])
        }

    }
    for (let i = 0; i < listBuy.length; i++ ){
        if (listBuy[i].status === 'yes'){
            console.log(listBuy[i])
        }
    }

}

    console.log('Old Array', listBuy);
    showList(listBuy);

    function addFood() {
        let newProduct = new Product();
        debugger
        newProduct.name = prompt('Input a product name: ')
        let productExists = false;
        for (let i = 0; i < listBuy.length; i++) {
            if (listBuy[i].name === newProduct.name) {
                listBuy[i].quantity = listBuy[i].quantity + 1;
                productExists = true;
            }
        }
        if (!productExists) {
            newProduct.quantity = 1;
            let newItem = {
                name: '',
                quantity: '',
                status: true
            }
            console.log('New Product', newProduct);
            listBuy.push(newProduct);
        }
        console.log(listBuy)
    }

    addFood()


    function boughtFood() {
        let boughtFood = {};
        boughtFood.name = prompt('Input a product name: ')
        for (i = 0; i < listBuy.length; i++) {
            if (listBuy[i].name === boughtFood.name) {
                listBuy[i].status = 'yes';
            }

        }
        console.log(listBuy)
    }
    boughtFood()*/

/*2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:
Распечатка чека на экран;
Подсчет общей суммы покупки;
Получение самой дорогой покупки в чеке;
Подсчет средней стоимости одного товара в чеке.*/

let list = [
    { name: "Apple", count: 5, price: 9.99 },
    { name: "Orange", count: 3, price: 5.99 },
    { name: "Coconut", count: 2, price: 15.99 },
    { name: "Meat", count: 1, price: 10.0 }
];






/*3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и текст, и
выводит этот текст с помощью document.write() в тегах <p></p>,
добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.*/


/*let arr = [
    {
    styleName: 'color',
    styleValue: 'red'
    },
    {
    styleName: 'font-size',
    styleValue: '16px'
    },
    {
    styleName: 'text-aline',
    styleValue: 'center'
    },
    {
    styleName: 'text-decoration',
    styleValue: 'none'
    }

]
*/
/*4. Создать массив аудиторий академии.
Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и
названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним^
Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту).
*/

const academyAuditorium = [
    {name:'101',seats:'10',faculty:'Ballroom Choreography'},
    {name:'102',seats:'15',faculty:'Classical Choreography'},
    {name:'103',seats:'20',faculty:'Folk Choreography'},
    {name:'104',seats:'10',faculty:'Modern Choreography'},
    {name:'201',seats:'15',faculty:'Directing'},
    {name:'202',seats:'20',faculty:'Vocal'},
    {name:'203',seats:'10',faculty:'Musical'},
    {name:'204',seats:'15',faculty:'Circus'},

];

// Вывод на экран всех аудиторий
function allAuditorium(){
    return academyAuditorium;
}
console.log(allAuditorium())

//Вывод на экран аудиторий для указанного факультета;

function showFacultyRooms (academyAuditorium, faculty) {
    let show = [];
    for (let i in academyAuditorium) {
        if (academyAuditorium[i].faculty === faculty) {
            show.push(academyAuditorium[i].name);
        }
    }
    return `All classrooms of ${faculty} faculty are: ${show.join("; ")}.`;
}
console.log (showFacultyRooms())