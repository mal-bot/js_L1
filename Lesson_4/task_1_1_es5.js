"use strict";

/*
 * Задание 1.1 (es5)
 * Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), 
 * конструктор Product, который принимает параметры name и price, 
 * сохраните их как свойства объекта. Также объекты типа Product должны
 * иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
 */


function ProductEs5(name, price) {
    this.name = name;
    this.price = price;
}

ProductEs5.prototype.make25PercentDiscount = function () {
    this.price *= 0.75;
}

//проверка
let product_es5 = new ProductEs5('product', 1000.1);
product_es5.make25PercentDiscount();
