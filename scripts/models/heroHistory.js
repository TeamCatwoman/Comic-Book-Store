let HeroHistory = (function() {
    class HeroHistory {
        constructor(hero, history, image, isRight) {
            this.hero = hero;
            this.history = history;
            this.image = image;
            this.isRight = isRight;
        }

        get hero() {
            return this._hero;
        }

        set hero(value) {
            this._hero = value;
        }

        get history() {
            return this._history;
        }

        set history(value) {
            this._history = value;
        }

        get image() {
            return this._image;
        }

        set image(value) {
            this._image = value;
        }

        get isRight() {
            return this._isRight;
        }

        set isRight(value) {
            this._isRight = value;
        }
    }

    return HeroHistory;
})();

export { HeroHistory };