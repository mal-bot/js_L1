'use strict'
// 1. получить элемент с классом .wrap и сохранить
// его в переменную
let divEl = document.querySelector('.wrap');
// 2. получить тег span, сохранить в переменную
let spanEl = divEl.querySelector('span');
// 3. получить тег button, сохранить в переменную
let buttonEl = document.querySelector('button');
// 4. на кнопку показа модального окна назначить обработку
// события клика
buttonEl.addEventListener('click', function () {
    // 4.1 при клике функция обработчик у элемента с
    // классом .wrap должна удалять классы rollOut и hidden,
    // элементу с классом .wrap добавить классы animated и rollIn
    divEl.classList.remove('hidden', 'animate__fadeOutRight');
    divEl.classList.add('animate__animated', 'animate__fadeInLeft');
})
// 5. назначить обработку клика по тегу span
spanEl.addEventListener('click', function () {
    // 5.1 при клике у элемента с классом .wrap удалите
    // класс rollIn и добавьте класс rollOut
    divEl.classList.remove('animate__fadeInLeft');
    divEl.classList.add('animate__fadeOutRight');
    // 5.2 используя setTimeout через секунду элементу
    // .wrap добавьте класс .hidden
    //Сделал по другому
    //добавляем лисенер события окончания анимации и скрываем div
    divEl.addEventListener('animationend', function hideAfterAnimationAndRemoveListener() {
        divEl.classList.add('hidden');
        //это срабатывает, так как эта функция с именем и находится в области видимости ремува
        divEl.removeEventListener('animationend', hideAfterAnimationAndRemoveListener)
    });
})
