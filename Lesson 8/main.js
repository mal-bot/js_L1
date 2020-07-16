"use strict"
//создаем объект спутника
const satellite = new Satellite();
//создаем объекты передающей и приемной земной станции
const txStation = new GroundStation('tx');
const rxStation = new GroundStation('rx');

// добавляем лисенеры клика на все кнопки и вызывает функцию calculate при клике
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        calculate(event);
    });
})

/**
 * В зависимости от родителя, в котором был произведен клик по кнопке "рассчитать",
 * производит вычисление в соответствующем блоке
 * @param {*} event событие клика
 */
function calculate(event) {
    if (event.target.parentNode.id === "coordinatesBlock") {
        calcDistanceBlock();
    }
    else if (event.target.parentNode.id === "LossBlock") {
        calcLossBlock();
    }
}

/**
 * Функция считывает, вычисляет и выводит результаты блока coordinatesBlock (первого)
 */

function calcDistanceBlock() {
    //считываем данные относящиеся к передающей станции
    readInputData.call(txStation, 'coordinatesBlock');
    //считываем данные относящиеся к приемной станции
    readInputData.call(rxStation, 'coordinatesBlock');
    //считываем данные относящиеся к спутнику
    readInputData.call(satellite, 'coordinatesBlock');
    //рассчитываем данные для вывода на страницу
    txStation.calcElevation();
    txStation.calcDistanceToSatellite();
    rxStation.calcElevation();
    rxStation.calcDistanceToSatellite();
    //выводим данные на страницу
    renderOutputData.call(txStation, 'coordinatesBlock');
    renderOutputData.call(rxStation, 'coordinatesBlock');
}

/**
 * Функция считывает, вычисляет и выводит результаты блока LossBlock (второго)
 */

function calcLossBlock() {
    // вычисляем блок coordinatesBlock, на случай, если в нем не был произведен рассчет
    calcDistanceBlock();
    //считываем данные относящиеся к станциям
    readInputData.call(txStation, 'LossBlock');
    readInputData.call(rxStation, 'LossBlock');
    //рассчитываем данные для вывода на страницу
    txStation.calcClearSkyLoss();
    txStation.calcSphericalLoss();
    txStation.calcTotalLoss();
    rxStation.calcClearSkyLoss();
    rxStation.calcSphericalLoss();
    rxStation.calcTotalLoss();
    //выводим данные на страницу
    renderOutputData.call(txStation, 'LossBlock');
    renderOutputData.call(rxStation, 'LossBlock');
}

