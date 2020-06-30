"use strict";

/*
 * Задание 1
 * Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
 * мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
 * - единицы (в свойстве units)
 * - десятки (в свойстве tens)
 * - сотни (в свойстве hundereds)
 */

/**
 * Функция преобразует число в объект
 * @param {number} num число от 0 до 999 включительно
 * @returns {object} объект со свойствами единицы, десятки, сотни
 */
function convertNumberToObject(num) {
    if ((num >= 0 || num <= 999) && Number.isInteger(num)) {
        return {
            hundreds: Math.floor(num / 100),
            tens: Math.floor(num / 10) % 10,
            units: num % 10,
        }
    }
    console.log('в качестве аргумента функции numberToObject должно быть число.');
    return {}
}

//проверка
let n = new convertNumberToObject(45);
let n1 = new convertNumberToObject('rdf');
