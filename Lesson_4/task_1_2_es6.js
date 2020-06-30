"use strict";

/*
 * Задание 1.2 (es6)
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

class PostEs6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class Attached_postEs6 extends PostEs6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

//проверка
let post_es6 = new PostEs6('vasya', 'blabla', '23.01.01');
post_es6.edit('blabla-edited');

let attached_post_es6 = new Attached_postEs6('kolya', 'qweqwe', '11.11.11');
attached_post_es6.edit('qweqwe-edited');
attached_post_es6.makeTextHighlighted();
