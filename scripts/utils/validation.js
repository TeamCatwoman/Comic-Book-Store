var validation = (function() {
    function validateEmail(email) {
        let letters = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(letters)) {
            noty({
                theme: 'relax',
                text: "E-mail must consist of letters and numbers, dot, symbol @ ",
                type: 'error',
                timeout: 3000,
                closeWith: 'animated bounceOutLeft'
            });
            return true;
        }
    }

    function validatePassword(password) {
        let letters = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

        if (!password.match(letters)) {
            noty({
                theme: 'relax',
                text: "Password must contain at least 6 characters, including UPPER/lowercase and numbers",
                type: 'error',
                timeout: 3000,
                closeWith: 'animated bounceOutLeft'
            });
            return true;
        }

    }

    function validateUsername(username) {
        let letters = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

        if (!username.match(letters)) {
            noty({
                theme: 'relax',
                text: "Username must consist of letters and numbers",
                type: 'error',
                timeout: 3000,
                closeWith: 'animated bounceOutLeft'
            });
            return true;
        }

        if (username.length < 3 || username.length > 20 || !username) {
            noty({
                theme: 'relax',
                text: "Username must be consist of min 3 symbols and max of 20 symbols",
                type: 'error',
                timeout: 3000,
                closeWith: 'animated bounceOutLeft'
            });
            return true;
        }

    }

    function validateAge(age) {
        if (age < 0 || age > 120 || !age) {
            noty({
                theme: 'relax',
                text: "Age must be a number between 0 and 120",
                type: 'error',
                timeout: 3000,
                closeWith: 'animated bounceOutLeft'
            });
            return true;
        }
    }

    function validateMessage(message) {
        let letters = /^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/;

        if (message.length < 20 || !message.match(letters)) {
            noty({
                theme: 'relax',
                text: "Message must be minimum 20 symbols of letters and numbers",
                type: 'error',
                timeout: 3000,
                closeWith: 'animated bounceOutLeft'
            });
            return true;
        }
    }
    return {
        email: validateEmail,
        username: validateUsername,
        password: validatePassword,
        age: validateAge,
        message: validateMessage
    };
}());
export { validation };