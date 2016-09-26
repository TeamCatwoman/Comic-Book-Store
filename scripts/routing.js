import { dataServer } from './dataServer.js';
import { templateLoader as tl } from './template-loader.js';


let everlive = new Everlive('co50xbssvfni5o0s');
let comicBook = everlive.data('Comic');

var router = (() => {
    let navigo;

    function init() {
        navigo = new Navigo(null, false);

        navigo
            .on('home', () => {
                Promise.all([tl.loadTemplate('home')])
                    .then((template) => $('#container').html(template))
                    .then(() => {
                        $("#container-slider").removeClass('hidden');
                    })
                    .catch(console.log);
            })
            .on('comic', () => {
                comicBook.get()
                    .then(function (data) {
                        let books = data;
                        Promise.all([books, tl.loadTemplate('miniBooksPreview')])
                            .then(([books, template]) => $('#container').html(template(books)))
                            .catch(console.log);
                    },
                    function (error) {
                        alert(JSON.stringify(error));
                    })
                    .then(() => {
                        $("#container-slider").removeClass('hidden');
                    });
            })
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
                    .then(function (data) {
                        let contacts = data.result[0];
                        Promise.all([contacts, tl.loadTemplate('contactForm')])
                            .then(([contacts, template]) => $('#container').html(template(contacts)))
                            .catch(console.log);
                    },
                    function (error) {
                        alert(JSON.stringify(error));
                    });
            })
            .on('register', () => {
                //debugger;
                Promise.all([tl.loadTemplate('register')])
                    .then((template) => $('#container').html(template))
                    .then(() => {
                        $("#container-slider").removeClass('hidden');
                    })
                    .catch(console.log);
            })
            .on('details/:id', (params) => {
                comicBook.getById(params.id)
                    .then(function (comics) {
                        let data = comics.result;
                        Promise.all([data, tl.loadTemplate('details')])
                            .then(([data, template]) => $('#container').html(template(data)))
                            .catch(console.log);
                    }, function (error) {
                        alert(JSON.stringify(error));
                    })
                    .then(() => {
                        $("#container-slider").addClass('hidden');
                    });
            })
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
                Promise.all([tl.loadTemplate('gallery'), tl.loadTemplate('blueimpGallery')])
                    .then(([template1, template2])=> {
                        $("#comic-book-holder").addClass('hidden');                        
                        $("#container-slider").addClass('hidden');
                        $('#container-gallery').html(template1);
                        $('#blueimp-gallery').html(template2);
                    })
                    .catch(console.log);
            }).resolve();
    }
    return {
        init
    };

})();
export { router };