import { data } from '../data/data.js';
import { templateLoader as tl } from '../template-loader.js';
import { userData } from '../data/userData.js';

var handlebars = handlebars || Handlebars;

let controller = {
    home: () => {
        Promise.all([tl.loadTemplate('home')])
            .then((template) => $('#container').html(template))
            .then(() => {
                $("#container-slider").removeClass('hidden');
            })
            .catch(console.log);
    },
    comics: () => {
        data.get('ComicBook')
            .then((data) => {
                debugger;
                Promise.all([data, tl.loadTemplate('comicBooksPreview')])
                    .then(([data, template]) => $('#container').html(template(data)))
                    .catch(console.log);
            }, (error) => {
                alert(JSON.stringify(error));
            }).then(() => {
                $("#container-slider").removeClass('hidden');
            });
    },
    detailedComicBook: (id) => {
        data.getById('ComicBook', id)
            .then(function(comics) {
                debugger;
                let data = comics.Result;
                Promise.all([data, tl.loadTemplate('details')])
                    .then(([data, template]) => $('#container').html(template(data)))
                    .catch(console.log);
            }, function(error) {
                alert(JSON.stringify(error));
            })
            .then(() => {
                $("#container-slider").addClass('hidden');
            });
    },
    categories: (category) => {
        data.getByCategory('ComicBook')
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
    register: () => {
        Promise.all([tl.loadTemplate('register')])
            .then((template) => $('#container').html(template))
            .then(() => {
                $("#container-slider").removeClass('hidden');
            })
            .catch(console.log);
    },
    favorites: () => {
        let id = localStorage.getItem('current-id');
        userData.getById(id)
            .then((properties) => {
                return new Promise((resolve, reject) => {
                    let favoriteComics = properties.Result.Favourite;
                    let favorites = {
                        "count": 0,
                        "result": favoriteComics
                    };
                    resolve(favorites);
                });
            })
            .then(function(favorites) {
                Promise.all([favorites, tl.loadTemplate('favoriteComics')])
                    .then(([favorites, template]) => $('#container').html(template(favorites)))
                    .catch(console.log);
            })
            .then(() => {
                $("#container-slider").addClass('hidden');
            });
    }
};

export { controller };