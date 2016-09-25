var dataServer = (function () {
    const kinvey_APP_ID = 'kid_B1uRP-BT',
        kinvey_APP_SECRET = 'f77256583e1147ff8e2d6edd6e2971f3',
        kinvey_URL = 'https://baas.kinvey.com/',
        USERNAME_STORAGE_KEY = 'username-key',
        AUTH_KEY_STORAGE_KEY = 'auth-key-key';

    // start users
    function userRegister(user) {
        let authBase64 =btoa(kinvey_APP_ID + ":" + kinvey_APP_SECRET);
        let registerURL = kinvey_URL + 'user/' + kinvey_APP_ID;
        let registerData = {
            username: user.username,
            password: user.password
        };
        var register = new Promise(function (resolve, reject) {
            $.ajax({
                url: registerURL,
                method: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(registerData),
                Authorization: "Basic " + authBase64,
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
        let authBase64 =btoa(kinvey_APP_ID + ":" + kinvey_APP_SECRET);
        let loginURL = kinvey_URL + 'user/' + kinvey_APP_ID + '/login';
        let loginData = {
            username: user.username,
            password: user.password
        };
        var login = new Promise(function (resolve, reject) {
            $.ajax({
                url: loginURL,
                method: "POST",
                headers:{"Authorization": "Basic "+authBase64},
                data: JSON.stringify(loginData),
                contentType: 'application/json',
                success: function (user) {
                    localStorage.setItem(USERNAME_STORAGE_KEY, user.username);
                    localStorage.setItem(AUTH_KEY_STORAGE_KEY, user.authtoken);
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