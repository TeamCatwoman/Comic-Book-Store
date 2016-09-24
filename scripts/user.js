let User = (function() {
    class User {
        constructor(name, age, email, password) {
            this.name = name;
            this.age = age;
            this.email = email;
            this.password = password;
        }

        get name() {
            return this._name;
        }

        set name(value) {
            this._name = value;
        }

        get age() {
            return this._age;
        }

        set age(value) {
            this._age = value;
        }

        get email() {
            return this._email;
        }

        set email(value) {
            this._email = value;
        }

        get password() {
            return this._password;
        }

        set password(value) {
            this._password = value;
        }
    }

    return User;
})();