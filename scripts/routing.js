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

        navigo.on({
            'home': controller.loadHomeTemplate,
            'comic': controller.loadComicBooks,
            'contact': controller.loadContacts,
            'register': controller.loadRegister,
            'details/:id': (params) => {
                controller.loadDetailedComicBook(params.id);
            },
            'marvel': () => {
                comicData.getCategory('Marvel')
                    .then((data) => {
                        Promise.all([data, tl.loadTemplate('comicBooksPreview')])
                            .then(([data, template]) => $('#container').html(template(data)))
                            .catch(console.log);
                    }, (error) => {
                        alert(JSON.stringify(error));
                    }).then(() => {
                        $("#container-slider").removeClass('hidden');
                    });
            },
            'dc': () => {
                comicData.getCategory('DC Comics')
                    .then((data) => {
                        Promise.all([data, tl.loadTemplate('comicBooksPreview')])
                            .then(([data, template]) => $('#container').html(template(data)))
                            .catch(console.log);
                    }, (error) => {
                        alert(JSON.stringify(error));
                    }).then(() => {
                        $("#container-slider").removeClass('hidden');
                    });
            },
            'favorites': controller.loadFavorites,
            'hot': () => {
                Promise.all([dataServer.get.book(), tl.loadTemplate('readOnline')])
                    .then(([data, template]) => {
                        $("#comic-book-holder").removeClass('hidden');
                        $("#container-slider").addClass('hidden');
                        $('#container').append("<div id='hot' />");
                        $("#hot").html(template(data[0]));
                    })
                    .catch(console.log);
            },
            'hot/read': () => {
                Promise.all([dataServer.images.get(), tl.loadTemplate('gallery')])
                    .then(([data, template]) => {
                        $("#comic-book-holder").addClass('hidden');
                        $("#container-slider").addClass('hidden');
                        $('#container').html(template(data));
                    })
                    .catch(console.log);
            }
        }).resolve();

        navigo.notFound(() => {
            Promise.all([tl.loadTemplate('pageNotFound')])
                .then(([template]) => {
                    $("#container-slider").addClass('hidden');
                    $('#container').html(template(template));
                })
                .catch(console.log);

        });
        // navigo
        //     .on('home', controller.loadHomeTemplate)
        //     .on('comic', controller.loadComicBooks)
        //     .on('contact', controller.loadContacts)
        //     .on('register', controller.loadRegister)
        //     .on('details/:id', (params) => {
        //         controller.loadDetailedComicBook(params.id);
        //     })
        //     .on('marvel', () => {
        //         comicData.getCategory('Marvel')
        //             .then((data) => {
        //                 Promise.all([data, tl.loadTemplate('comicBooksPreview')])
        //                     .then(([data, template]) => $('#container').html(template(data)))
        //                     .catch(console.log);
        //             }, (error) => {
        //                 alert(JSON.stringify(error));
        //             }).then(() => {
        //                 $("#container-slider").removeClass('hidden');
        //             });
        //     })
        //     .on('dc', () => {
        //         comicData.getCategory('DC Comics')
        //             .then((data) => {
        //                 Promise.all([data, tl.loadTemplate('comicBooksPreview')])
        //                     .then(([data, template]) => $('#container').html(template(data)))
        //                     .catch(console.log);
        //             }, (error) => {
        //                 alert(JSON.stringify(error));
        //             }).then(() => {
        //                 $("#container-slider").removeClass('hidden');
        //             });
        //     })
        //     .on('favorites', controller.loadFavorites)
        //     .on('hot', () => {
        //         Promise.all([dataServer.get.book(), tl.loadTemplate('readOnline')])
        //             .then(([data, template]) => {
        //                 $("#comic-book-holder").removeClass('hidden');
        //                 $("#container-slider").addClass('hidden');
        //                 $('#container').append("<div id='hot' />");
        //                 $("#hot").html(template(data[0]));
        //             })
        //             .catch(console.log);
        //     })
        //     .on('hot/read', () => {
        //         Promise.all([dataServer.images.get(), tl.loadTemplate('gallery')])
        //             .then(([data, template]) => {
        //                 $("#comic-book-holder").addClass('hidden');
        //                 $("#container-slider").addClass('hidden');
        //                 $('#container').html(template(data));
        //             })
        //             .catch(console.log);
        //     })
        //     .resolve();
    }
    return {
        init
    };

})();
export { router };