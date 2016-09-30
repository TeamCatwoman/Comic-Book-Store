let userData = (function() {
    const APP_ID = 'co50xbssvfni5o0s',
        ACCESS_TOKEN = 'v0yhnv1ybqbskxn24rt6qbu3fmi3whmz';

    function getById(id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `http://api.everlive.com/v1/${APP_ID}/Users/${id}`,
                type: "GET",
                headers: {
                    "Authorization": ACCESS_TOKEN
                },
                success: function(data) {
                    resolve(data);
                },
                error: function(error) {
                    reject(error);
                }
            });
        });
    }

    function login(user) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: "POST",
                url: `http://api.everlive.com/v1/${APP_ID}/oauth/token`,
                contentType: "application/json",
                data: JSON.stringify(user),
                success: function(data) {
                    resolve(data);
                },
                error: function(error) {
                    reject(error);
                }
            });
        });
    }

    function logout() {
        return new Promise((resolve, reject) => {
            let url = `http://api.everlive.com/v1/${APP_ID}/oauth/logout`;
            $.ajax({
                type: "GET",
                url: url,
                headers: {
                    "Authorization": ACCESS_TOKEN
                },
                success: function(data) {
                    resolve(data);
                },
                error: function(error) {
                    reject(error);
                }
            });
        });
    }

    function get() {
        return new Promise((resolve, reject) => {
            let url = `http://api.everlive.com/v1/${APP_ID}/Users/me`;
            $.ajax({
                type: "GET",
                url: url,
                headers: {
                    "Authorization": "ACCESS_TOKEN"
                },
                success: function(data) {
                    resolve(data);
                },
                error: function(error) {
                    reject(error);
                }
            });
        });
    }

    return {
        get,
        login,
        getById,
        logout
    }
})();

export { userData };