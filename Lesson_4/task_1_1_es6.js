"use strict";

/*
 * Задание 1.1 (es6)
 * Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), 
 * конструктор Product, который принимает параметры name и price, 
 * сохраните их как свойства объекта. Также объекты типа Product должны
 * иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.
 */

class ProductEs6 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price *= 0.75
    }
}

//проверка
let product_es6 = new ProductEs6('product', 1000.1);
product_es6.make25PercentDiscount();
