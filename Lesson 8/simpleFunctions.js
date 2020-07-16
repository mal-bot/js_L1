"use strict";
/**
 * переводит радианы в градусы
 * @param {float} rad значение угла в радианах
 * @returns {float} угол в градусах
 */
function rad2deg(rad) {
    let deg = rad * 180 / Math.PI;
    deg = deg % 360;
    return deg;
}

/**
 * переводит градусы в радианы
 * @param {float} deg значение угла в градусах
 * @returns {float} угол в радианах
 */
function deg2rad(deg) {
    return deg * Math.PI / 180;
}

/**
 * вычисляет длину волны для указанной частоты
 * @param {float} frequency частоты в ГГц
 * @returns {float} длина волны в метрах
 */
function calcWaveLength(frequency) {
    const lightSpeed = 299792458;
    return lightSpeed / (frequency * Math.pow(10, 9));
}