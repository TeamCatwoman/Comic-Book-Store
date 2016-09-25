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
<<<<<<< HEAD
                    .then(function(data) {
                            let books = data;
                            Promise.all([books, tl.loadTemplate('miniBooksPreview')])
                                .then(([books, template]) => $('#container').html(template(books)))
                                .catch(console.log);
                        },
                        function(error) {
                            alert(JSON.stringify(error));
                        })
                    .then(() => {
                        $("#container-slider").removeClass('hidden');
                    });
=======
                    .then(function (data) {
                        let books = data;
                        Promise.all([books, tl.loadTemplate('miniBooksPreview')])
                            .then(([books, template]) => $('#container').html(template(books)))
                            .catch(console.log);
                    },
                    function (error) {
                        alert(JSON.stringify(error));
                    });


>>>>>>> origin/master
                // console.log(books.allBooks);
            })
            .on('about', () => {
                // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
                //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
                //     .catch(console.log);
            })
            .on('contact', () => {
<<<<<<< HEAD
                Promise.all([tl.loadTemplate('contactForm')])
                    .then((template) => $('#container').html(template))
                    .then(() => {
                        $("#container-slider").addClass('hidden');
                    })
=======
                var el = new Everlive('co50xbssvfni5o0s');
                var data = el.data('contacts');
                data.get()
                    .then(function (data) {
                     let contacts=data.result[0];
                     Promise.all([contacts,tl.loadTemplate('contactForm')])
                         .then(([contacts,template]) => $('#container').html(template(contacts)))
>>>>>>> origin/master
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
                    .then(function(comics) {
                        let data = comics.result;
                        Promise.all([data, tl.loadTemplate('details')])
                            .then(([data, template]) => $('#container').html(template(data)))
                            .catch(console.log);
                    }, function(error) {
                        alert(JSON.stringify(error));
                    })
                    .then(() => {
                        $("#container-slider").addClass('hidden');
                    });
            })
            .on('log-in', () => {
                // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
                //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
                //     .catch(console.log);
            })
            .on('log-out', () => {
                // Promise.all(['get the data', tl.loadTemplate('load the template by name')])
                //     .then(([data, template])=> $('#atach to DOM').html(template(data)))
                //     .catch(console.log);
            }).resolve();
    }
    return {
        init
    };

})();
export { router };