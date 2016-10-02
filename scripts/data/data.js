import { requester } from '../requester.js';

const APP_ID = 'co50xbssvfni5o0s',
    ACCESS_TOKEN = 'v0yhnv1ybqbskxn24rt6qbu3fmi3whmz';

let data = (function() {
    function getComicBooks() {
        return requester.get(`https://api.everlive.com/v1/${APP_ID}/ComicBook`);
    }

    function getComicBookById(id) {
        return requester.get(`https://api.everlive.com/v1/${APP_ID}/ComicBook/${id}`);
    }

    function homePage() {
        return requester.get(`https://api.everlive.com/v1/${APP_ID}/HeroHistory`);
    }

    function user(id) {
        return requester.get(`https://api.everlive.com/v1/${APP_ID}/Users/${id}`);
    }

    function contacts() {
        return requester.get(`https://api.everlive.com/v1/${APP_ID}/contacts`);
    }

    function getCategory(category) {

        let filter = { 'Category': category };

        let options = {
            headers: {
                "Authorization": ACCESS_TOKEN,
                "X-Everlive-Filter": JSON.stringify(filter)
            }
        };

        return requester.get(`https://api.everlive.com/v1/${APP_ID}/ComicBook`, options);

        // return new Promise((resolve, reject) => {
        //     $.ajax({
        //         url: url,
        //         type: "GET",
        //         headers: {

        //         },
        //         success: function(data) {
        //             resolve(data);
        //         },
        //         error: function(error) {
        //             reject(error);
        //         }
        //     });
        // });

    }

    return {
        getComicBooks,
        getComicBookById,
        homePage,
        user,
        contacts,
        getCategory
    };
})();

export { data };