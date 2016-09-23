var dataServer = (function () {
    const USERNAME_STORAGE_KEY = 'username-key',
        AUTH_KEY_STORAGE_KEY = 'auth-key-key';

    // start users
    function userRegister(user) {
        var register = new Promise(function (resolve, reject) {
            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA256(user.password).toString()
            };

            $.ajax({
                url: 'api/users WE NEED SERVER TO WORK',
                method: 'POST',
                data: JSON.stringify(reqUser),
                contentType: 'application/json',
                success: function (user) {
                    localStorage.setItem(USERNAME_STORAGE_KEY, user.username);
                    localStorage.setItem(AUTH_KEY_STORAGE_KEY, user.authKey);
                    resolve(user);
                }
            });
        });
        return register;
    }

    function userLogin(user) {
        var login = new Promise(function (resolve, reject) {
            var reqUser = {
                username: user.username,
                passHash: CryptoJS.SHA1(user.password).toString()
            };
         // before encrypt   console.log(user);
         //after encrypt   console.log(reqUser);
            $.ajax({
                url: 'api/auth WE NEED A SERVER TO WORK',
                method: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify(reqUser),
                success: function (user) {
                    localStorage.setItem(USERNAME_STORAGE_KEY, user.username);
                    localStorage.setItem(AUTH_KEY_STORAGE_KEY, user.authKey);
                    resolve(user);
                }
            });
        });
        return login;
    }

    function userLogout() {
        var logout = new Promise(function (resolve, reject) {
            localStorage.removeItem(AUTH_KEY_STORAGE_KEY);
            localStorage.removeItem(USERNAME_STORAGE_KEY);
            resolve();
        });

        return logout;
    }

    function userGetCurrent() {
        return Promise.resolve(localStorage.getItem(USERNAME_STORAGE_KEY) || 'anonymous');
    }
    // end users

    return {
        users: {
            register: userRegister,
            login: userLogin,
            logout: userLogout,
            current: userGetCurrent
        }
    };
})();

export { dataServer };