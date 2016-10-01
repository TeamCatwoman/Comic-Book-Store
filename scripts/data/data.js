import { requester } from '../requester.js';

const APP_ID = 'co50xbssvfni5o0s',
    ACCESS_TOKEN = 'v0yhnv1ybqbskxn24rt6qbu3fmi3whmz';

let data = (function() {
    function getComicBooks() {
        return requester.get(`http://api.everlive.com/v1/${APP_ID}/ComicBook`);
    }

    function getComicBookById(id) {
        return requester.get(`http://api.everlive.com/v1/${APP_ID}/ComicBook/${id}`);
    }

    function homePage() {
        return requester.get(`http://api.everlive.com/v1/${APP_ID}/HeroHistory`);
    }

    function user(id) {
        return requester.get(`http://api.everlive.com/v1/${APP_ID}/Users/${id}`);
    }

    function contacts() {
        return requester.get(`http://api.everlive.com/v1/${APP_ID}/contacts`);
    }

    return {
        getComicBooks,
        getComicBookById,
        homePage,
        user,
        contacts
    };
})();

export { data };