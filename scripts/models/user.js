let User = (function() {
    class User {
        constructor(username, age, email, password) {
            this.username = username;
            this.age = age;
            this.email = email;
            this.password = password;
        }

        get username() {
            return this._username;
        }

        set username(value) {
            this._username = value;
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

export { User };