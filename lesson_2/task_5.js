"use strict";


/*
 * Задание 5
 * Реализовать функцию с тремя параметрами:
 * function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения
 * аргументов, operation – строка с названием операции.
 * В зависимости от переданного значения операции (использовать switch) выполнить
 * одну из арифметических операций (использовать функции из задания 4) и вернуть
 * полученное значение.
 */


/**
 * выполняет вычисление OperationFoo(x, y)
 * @param {number} x первый операнд
 * @param {number} y второй операнд
 * @param {function} OperationFoo одна из функций задания 4 (sum, sub, mul или div)
 * @returns {number} результат OperationFoo(x, y)
 */

function mathOperation(x, y, OperationFoo) {
    return OperationFoo(x, y);
}

//проверка
console.log('\nЗадание 5');
console.log(mathOperation(1, 2, add) + ' - сложение');
console.log(mathOperation(1, 2, add_full) + ' - сложение');
console.log(mathOperation(1, 2, sub) + ' - вычитание');
console.log(mathOperation(1, 2, mul) + ' - умножение');
console.log(mathOperation(1, 0, div) + ' - деление');
console.log(mathOperation(1, 2, div) + ' - деление');
