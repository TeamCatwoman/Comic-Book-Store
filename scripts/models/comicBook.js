import { validator } from './validator.js';

let ComicBook = (function() {
    class ComicBook {
        constructor(title, author, publisher, year, price, category, description, imageSrc, id) {
            this.title = title;
            this.author = author;
            this.publisher = publisher;
            this.year = year;
            this.price = price;
            this.category = category;
            this.description = description;
            this.imageSrc = imageSrc;
            this.id = id;
        }

        get title() {
            return this._title;
        }

        set title(value) {
            validator.validateIfUndefinedOrNull(value, "title");
            validator.validateTypeOf(value, "title", "string");
            this._title = value;
        }

        get author() {
            return this._author;
        }

        set author(value) {
            validator.validateIfUndefinedOrNull(value, "author");
            validator.validateTypeOf(value, "author", "string");
            this._author = value;
        }

        get publisher() {
            return this._publisher;
        }

        set publisher(value) {
            validator.validateIfUndefinedOrNull(value, "publisher");
            validator.validateTypeOf(value, "publisher", "string");
            this._publisher = value;
        }

        get year() {
            return this._year;
        }

        set year(value) {
            validator.validateIfUndefinedOrNull(value, "year");
            validator.validateTypeOf(value, "year", "number");
            this._year = value;
        }

        get price() {
            return this._price;
        }

        set price(value) {
            validator.validateIfUndefinedOrNull(value, "price");
            validator.validateTypeOf(value, "price", "number");
            this._price = value;
        }

        get category() {
            return this._category;
        }

        set category(value) {
            validator.validateIfUndefinedOrNull(value, "category");
            validator.validateTypeOf(value, "category", "string");
            this._category = value;
        }

        get description() {
            return this._description;
        }

        set description(value) {
            validator.validateIfUndefinedOrNull(value, "description");
            validator.validateTypeOf(value, "description", "string");
            this._description = value;
        }

        get imageSrc() {
            return this._imageSrc;
        }

        set imageSrc(value) {
            validator.validateIfUndefinedOrNull(value, "imageSrc");
            validator.validateTypeOf(value, "imageSrc", "string");
            this._imageSrc = value;
        }

        get id() {
            return this._id;
        }

        set id(value) {
            validator.validateIfUndefinedOrNull(value, "id");
            validator.validateTypeOf(value, "id", "string");
            this._id = value;
        }
    }

    return ComicBook;
})();

export { ComicBook };