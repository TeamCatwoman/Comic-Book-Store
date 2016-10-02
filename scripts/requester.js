const ACCESS_TOKEN = 'v0yhnv1ybqbskxn24rt6qbu3fmi3whmz';

let requester = {
    get: (url, options = {}) => {
        let permanentHeader = {
            headers: {
                "Authorization": ACCESS_TOKEN
            }
        };

        var headers = options.headers || permanentHeader.headers;
        return new Promise((resolve, reject) => {
            $.ajax({
                url: url,
                type: "GET",
                headers: headers,
                success: function(data) {
                    resolve(data);
                },
                error: function(error) {
                    reject(error);
                }
            });
        });
    }
};

export { requester };