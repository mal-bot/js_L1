"use strict";

/*
 * Задание 1.2 (es5)
 * Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
 * а) конструктор Post, который принимает параметры author, text, date и
 * сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit,
 * который будет принимать текст и записывать его в свойство text объекта.
 * б) конструктор AttachedPost, который принимает параметры author, text, date.
 * Проинициализируйте эти свойства с помощью конструктора Post,
 * чтобы не дублировать код. Также в конструкторе AttachedPost должно
 * создаваться свойство highlighted со значением false. Унаследуйте
 * в объектах типа AttachedPost методы из Post.
 * Объекты типа AttachedPost должны иметь метод makeTextHighlighted,
 * который будет назначать свойству highlighted значение true.
 */

function PostEs5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostEs5.prototype.edit = function (text) {
    this.text = text;
}

function Attached_postEs5(author, text, date) {
    PostEs5.call(this, author, text, date);
    this.highlighted = false;
}

Attached_postEs5.prototype = Object.create(PostEs5.prototype);
Attached_postEs5.prototype.constructor = Attached_postEs5;
Attached_postEs5.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

//проверка
let post_es5 = new PostEs5('vasya', 'blabla', '23.01.01');
post_es5.edit('blabla-edited');

let attached_post_es5 = new Attached_postEs5('kolya', 'qweqwe', '11.11.11');
attached_post_es5.edit('qweqwe-edited');
attached_post_es5.makeTextHighlighted();
