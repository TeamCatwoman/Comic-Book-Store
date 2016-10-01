let data = (function() {
    const APP_ID = 'co50xbssvfni5o0s',
        ACCESS_TOKEN = 'v0yhnv1ybqbskxn24rt6qbu3fmi3whmz';

    function getById(typeName, id) {
        return new Promise((resolve, reject) => {
            let url = `http://api.everlive.com/v1/${APP_ID}/${typeName}/${id}`;
            $.ajax({
                url: url,
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

    function get(typeName) {
        return new Promise((resolve, reject) => {
            let url = `http://api.everlive.com/v1/${APP_ID}/${typeName}`;
            $.ajax({
                url: url,
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

    function getByCategory(typeName, category) {
        let filter = { 'Category': category };
        return new Promise((resolve, reject) => {
            let url = `http://api.everlive.com/v1/${APP_ID}/${typeName}`;
            $.ajax({
                url: url,
                type: "GET",
                headers: {
                    "Authorization": ACCESS_TOKEN,
                    "X-Everlive-Filter": JSON.stringify(filter)
                },
                success: function(data) {
                   // debugger;
                    resolve(data);
                },
                error: function(error) {
                   // debugger;
                    reject(error);
                }
            });
        });
    }

    return {
        get,
        getById,
        getByCategory
    };
})();

export { data };