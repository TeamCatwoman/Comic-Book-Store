import { dataServer } from './data/dataServer.js';
import { data as comicData } from './data/data.js';
import { templateLoader as tl } from './template-loader.js';
import { Controller } from './utils/controller.js';

let everlive = new Everlive('co50xbssvfni5o0s');

new Everlive('co50xbssvfni5o0s');

var router = (() => {
    let navigo,
        controller;

    function init() {
        navigo = new Navigo(null, false);
        controller = new Controller();

        navigo
            .on('home', controller.loadHomeTemplate)
            .on('comic', controller.loadComicBooks)
            .on('about', () => {
                // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
                //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
                //     .catch(console.log);
            })
            .on('contact', controller.loadContacts)
            .on('register', controller.loadRegister)
            .on('details/:id', (params) => {
                controller.loadDetailedComicBook(params.id);
            })
            .on('marvel', () => {
                comicData.getByCategory('ComicBook', 'Marvel')
                    .then((data) => {
                        Promise.all([data, tl.loadTemplate('comicBooksPreview')])
                            .then(([data, template]) => $('#container').html(template(data)))
                            .catch(console.log);
                    }, (error) => {
                        alert(JSON.stringify(error));
                    }).then(() => {
                        $("#container-slider").removeClass('hidden');
                    });
            })
            .on('dc', () => {
                comicData.getByCategory('ComicBook', 'DC Comics')
                    .then((data) => {
                        Promise.all([data, tl.loadTemplate('comicBooksPreview')])
                            .then(([data, template]) => $('#container').html(template(data)))
                            .catch(console.log);
                    }, (error) => {
                        alert(JSON.stringify(error));
                    }).then(() => {
                        $("#container-slider").removeClass('hidden');
                    });
            })
            .on('favorites', controller.loadFavorites)
            .on('hot', () => {
                Promise.all([dataServer.get.book(), tl.loadTemplate('readOnline')])
                    .then(([data, template]) => {
                        $("#comic-book-holder").removeClass('hidden');
                        $("#container-slider").addClass('hidden');
                        $('#container').append("<div id='hot' />");
                        $("#hot").html(template(data[0]));
                    })
                    .catch(console.log);
            })
            .on('hot/read', () => {
                Promise.all([dataServer.images.get(), tl.loadTemplate('gallery')])
                    .then(([data, template]) => {
                        $("#comic-book-holder").addClass('hidden');
                        $("#container-slider").addClass('hidden');
                        $('#container').html(template(data));
                    })
                    .catch(console.log);
            })
            //.on(() => { router.navigate("/home") })
            .resolve();
    }
    return {
        init
    };

})();
export { router };