"use strict"

/**
 * Функция выполняет поиск узлов для считывания или записи данных
 * @param {string} blockId id блока, в котором надо прочитать или записать данные
 * @param {string} dataType входные или выходные данные (.input или .output)
 * @returns коллекцию узлов input
 */

function getDataNodes(blockId, dataType) {
    const blockEl = document.querySelector(`#${blockId}`);
    const dataTypeEl = blockEl.querySelector(dataType);
    const classNameEl = dataTypeEl.querySelector(`.${this.constructor.name}`);
    let data = null;
    if (this.constructor.name !== 'Satellite') {
        const typeEl = classNameEl.querySelector(`.${this.type}`);
        data = typeEl.querySelectorAll("input");
    } else {
        data = classNameEl.querySelectorAll("input");
    }
    return data;
}

/**
 * Функция считывает значение из полей input и сохраняет их как свойства объекта. 
 * названия свойств объектов соответствуют аттрибуту name инпута.
 * (должна вызываться через call() для объектов satellite, station, в перспективе еще каких нибудь)
 * @param {string} blockId id блока, в котором надо прочитать данные
 */

function readInputData(blockId) {
    const data = getDataNodes.call(this, blockId, '.input');
    data.forEach((element) => {
        if (element.type === 'checkbox') {
            this[element.name] = element.checked;
        } else {
            this[element.name] = +element.value;
        }
    });
}

/**
 * Функция записывает рассчитанные значения свойств объектов в поля input.
 * названия свойств объектов соответствуют аттрибуту name инпута.
 * (должна вызываться через call() для объектов satellite, station)
 * @param {string} blockId id блока, в котором надо прочитать данные
 */
function renderOutputData(blockId) {
    const data = getDataNodes.call(this, blockId, '.output');
    data.forEach((element) => {
        element.value = this[element.name].toFixed(2);
    });
}