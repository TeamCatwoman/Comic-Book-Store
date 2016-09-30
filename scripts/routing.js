import { dataServer } from './data/dataServer.js';
import { data as comicData } from './data/data.js';
import { templateLoader as tl } from './template-loader.js';
import { controller } from './utils/controller.js';

let everlive = new Everlive('co50xbssvfni5o0s');

new Everlive('co50xbssvfni5o0s');

var router = (() => {
    let navigo;

    function init() {
        navigo = new Navigo(null, false);

        navigo
            .on('home', controller.home)
            .on('comic', controller.comics)
            .on('about', () => {
                // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
                //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
                //     .catch(console.log);
            })
            .on('contact', () => {
                Promise.all([tl.loadTemplate('contactForm')])
                    .then((template) => $('#container').html(template))
                    .then(() => {
                        $("#container-slider").addClass('hidden');
                    });

                var data = everlive.data('contacts');
                data.get()
                    .then(function(data) {
                            let contacts = data.result[0];
                            Promise.all([contacts, tl.loadTemplate('contactForm')])
                                .then(([contacts, template]) => $('#container').html(template(contacts)))
                                .catch(console.log);
                        },
                        function(error) {
                            alert(JSON.stringify(error));
                        });
            })
            .on('register', controller.register)
            .on('details/:id', (params) => {
                controller.detailedComicBook(params.id);
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
            .on('favorites', controller.favorites)
            .on('hot', () => {
                Promise.all([dataServer.get.book(), tl.loadTemplate('online')])
                    .then(([data, template]) => {
                        $("#comic-book-holder").removeClass('hidden');
                        $("#container-slider").addClass('hidden');
                        $('#container').append("<div id='hot' />");
                        $("#hot").html(template(data[0]));
                    })
                    .catch(console.log);
            })
            .on('hot/read', () => {
                Promise.all([tl.loadTemplate('gallery')])
                    .then(([template]) => {
                        $("#comic-book-holder").addClass('hidden');
                        $("#container-slider").addClass('hidden');
                        $('#container').html(template);
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