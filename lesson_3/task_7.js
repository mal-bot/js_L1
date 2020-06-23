'use strict';


/*
 * Задание 7
 * Нарисовать горку с помощью console.log (используя цикл for), 
 * как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
 */

console.log('\nЗадание 7');
let x = '';
for (x; x.length < 20; console.log(x += 'X')) { }

//или так
x = '';
for (let i = 0; i < 20; i++) {
    console.log(x += "X");
}
