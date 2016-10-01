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
            this._title = value;
        }

        get author() {
            return this._author;
        }

        set author(value) {
            this._author = value;
        }

        get publisher() {
            return this._publisher;
        }

        set publisher(value) {
            this._publisher = value;
        }

        get year() {
            return this._year;
        }

        set year(value) {
            this._year = value;
        }

        get category() {
            return this._category;
        }

        set category(value) {
            this._category = value;
        }

        get description() {
            return this._description;
        }

        set description(value) {
            this._description = value;
        }

        get imageSrc() {
            return this._imageSrc;
        }

        set imageSrc(value) {
            this._imageSrc = value;
        }

        get id() {
            return this._id;
        }

        set id(value) {
            this._id = value;
        }
    }

    return ComicBook;
})();

export { ComicBook };