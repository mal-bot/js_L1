"use strict"
//task 1
/**
 * Берет градусы по Цельсию в форме ввода на странице 
 * и выводит под полем ввода градусы по Фаренгейту
 * (округляет до 2 знака после запятой)
 */
function celciusToFahrenheit() {
    let degCelcius = +document.getElementById("celcius").value;
    let text = "";
    if (isNaN(degCelcius) || (degCelcius < -273.15)) {
        text = "необходимо ввести число больше -273.15&deg;C";
    }
    else {
        let degFahrenheit = (9 / 5) * degCelcius + 32;
        text = degFahrenheit.toFixed(2) + "&deg;F";
    }
    document.getElementById("fahrenheit").innerHTML = text;
}
//task 2
/**
 * Выводит в консоль "Василий"
 */
function admin_name() {
    let admin, name = "Василий";
    admin = name;
    console.log(admin);
}
//task 3
/**
 * Выводит в консоль результаты выражений в теле функции
 */
function task_3() {
    console.log(10 + 10 + "10");
    console.log(10 + "10" + 10);
    console.log(10 + 10 + +"10");
    console.log(10 / -"");
    console.log(10 / +"2,5");
}