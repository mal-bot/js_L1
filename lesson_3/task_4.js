"use strict";


/*
 * Задание 4
 * Перед вами находится массив с продуктами, сегодня распродажа и
 * вам нужно на каждый товар применить скидку 15%, можете 
 * использовать метод forEach https://mzl.la/1AOMMWX:
 */

console.log('\nЗадание 4');
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];
let discount = 15;
let initialProducts = JSON.parse(JSON.stringify(products));//копия для сравнения в консоли, чтоб не смотреть в условие
console.log(initialProducts);
products.forEach(function (item) {
    item.price = item.price * (1 - discount / 100);
});
console.log(products);
