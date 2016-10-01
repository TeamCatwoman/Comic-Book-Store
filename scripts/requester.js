const ACCESS_TOKEN = 'v0yhnv1ybqbskxn24rt6qbu3fmi3whmz';

let requester = {
    get: (url) => {
        return new Promise((resolve, reject) => {
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
};

export { requester };