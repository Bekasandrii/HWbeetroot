/*1. Создать массив «Список покупок».
Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет.
Написать несколько функций для работы с таким массивом.
Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.
Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом,
необходимо увеличивать количество в существующей покупке, а не добавлять новую.
Покупка продукта. Функция принимает название продукта и отмечает его как купленный.*/

//Version 1

/*let ViewModel = function () {
    this.Items = ko.observableArray(["Молоко", "Хлеб", "Творог"]);
    this.BoughtItems = ko.observableArray(["Морковь","Яблоки"]);
    this.SelectedItems = ko.observableArray([]);
    this.SelectedBoughtItems = ko.observableArray([]);
    this.NewItem = ko.observable("");


    this.Buy = function () {
        if (this.SelectedItems().length > 0) {
            for (var i = 0; i < this.SelectedItems().length; i++) {
                this.BoughtItems.push(this.SelectedItems()[i]);
            }

            this.Items.removeAll(this.SelectedItems());
            this.SelectedItems([]);
        }
    }
    this.AddItems = function () {
        if (this.NewItem() != "") {
            this.Items.push(this.NewItem());
            this.NewItem("");
        }
    }

    this.DeleteItems = function () {
        if (this.SelectedBoughtItems().length > 0) {
            this.BoughtItems.removeAll(this.SelectedBoughtItems());
            this.SelectedBoughtItems([]);
        }
    }
};
ko.applyBindings(new ViewModel());*/

//Version 2

// let groceries = ['чай', 'шпроты', 'печенье', 'сахар', 'чипсы'];
// let shoppingList = '';
//
// for (var i = 0; i < groceries.length; i++) {
//     if (i >= 1) {
//         shoppingList += ', ';
//     }
//     shoppingList += groceries[i];
// }

//Version 3

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
    listBuy.sort((a, b) => {return Number(b.status) - Number(a.status)});
    listBuy.reverse()
    console.log(listBuy)
    // for (let i = 0; i < listBuy.length; i++ ){
    //     if (listBuy[i].status === 'no'){
    //         console.log(listBuy[i])
    //     }
    //
    // }
    // for (let i = 0; i < listBuy.length; i++ ){
    //     if (listBuy[i].status === 'yes'){
    //         console.log(listBuy[i])
    //     }
    // }

// }

console.log('Old Array', listBuy);
showList(listBuy);

function addFood(){
    let newProduct = new Product();
    debugger
    newProduct.name = prompt('Input a product name: ')
    let productExists = false;
    for (let i = 0; i < listBuy.length; i++ ){
        if (listBuy[i].name === newProduct.name){
           listBuy[i].quantity = listBuy[i].quantity +1;
            productExists = true;
        }
    }
    if (!productExists){
        newProduct.quantity = 1;
        let newItem = {
            name: '',
            quantity:'',
            status: true
        }
        console.log('New Product', newProduct);
        listBuy.push(newProduct);
    }
    console.log(listBuy)
}
addFood()


function boughtFood(){
    let boughtFood = {};
    boughtFood.name = prompt('Input a product name: ')
    for (i = 0; i < listBuy.length; i++ ){
        if (listBuy[i].name === boughtFood.name){
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

// function getit() {
//     let result = document.getElementById('demo');
//     let allitems = 0;
//     let itemCount = prompt("how many items do you need?");
//     let items = {};
//     for (i = 0; i < itemCount; i++) {
//         items[i] = {
//
//             name: prompt("Product Name"),
//             price: prompt("Product Price"),
//             qty: prompt("Product qty")
//
//         }
//     }
//
//     for (i = 0; i < itemCount; i++) {
//         var subtotal = 0;
//         var total = 0;
//         subtotal = items[i].price * items[i].qty;
//         total = subtotal * 1.05;
//         allitems = allitems + subtotal;
//         result.innerHTML += "Product: " + items[i].name + "<br/>";
//         result.innerHTML += "Total Qty: " + items[i].qty + "<br/>";
//         result.innerHTML += "Sub total: " + subtotal + "<br/>";
//         result.innerHTML += "Sub total: " + total + "<br/>";
//         if (i == (itemCount - 1)) {
//             result.innerHTML += "Sub total for all items: " + allitems + "<br/>";
//         }
//     }
// }

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
Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена.
Написать несколько функций для работы с ним^
Вывод на экран всех аудиторий;
Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;
Функция сортировки аудиторий по количеству мест;
Функция сортировки аудиторий по названию (по алфавиту).
*/