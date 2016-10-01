import { data } from '../data/data.js';
import { templateLoader as tl } from '../template-loader.js';
import { userData } from '../data/userData.js';
import { ComicBook } from '../models/comicBook.js';
import { HeroHistory } from '../models/heroHistory.js';

let Controller = (function() {
    class Controller {
        loadHomeTemplate() {
            data.homePage()
                .then((histories) => {
                    return new Promise((resolve, reject) => {
                        let listOfHistories = [];

                        histories.Result.forEach(function(currentHistory, index) {
                            let history;
                            if (index % 2 === 0) {
                                history = new HeroHistory(currentHistory.HeroName, currentHistory.History, currentHistory.Image, true);
                            } else {
                                history = new HeroHistory(currentHistory.HeroName, currentHistory.History, currentHistory.Image);
                            }

                            listOfHistories.push(history);
                        });

                        let historiesObject = {
                            "count": listOfHistories.length,
                            "result": listOfHistories
                        };

                        resolve(historiesObject);
                    });

                })
                .then((heroHistories) => {
                    Promise.all([heroHistories, tl.loadTemplate('home')])
                        .then(([heroHistories, template]) => $('#container').html(template(heroHistories)))
                        .catch(console.log);
                });
        }

        loadComicBooks() {
            data.getComicBooks()
                .then((data) => {

                    Promise.all([data, tl.loadTemplate('comicBooksPreview')])
                        .then(([data, template]) => $('#container').html(template(data)))
                        .catch(console.log);
                }, (error) => {
                    alert(JSON.stringify(error));
                }).then(() => {
                    $("#container-slider").removeClass('hidden');
                });
        }

        loadDetailedComicBook(id) {
            data.getComicBookById(id)
                .then(function(comics) {
                    let comic = new ComicBook(comics.Result.Title, comics.Result.Author, comics.Result.Publisher,
                        comics.Result.Year, comics.Result.Price, comics.Result.Category, comics.Result.Description,
                        comics.Result.ImageSrc, comics.Result.Id);

                    let data = comics.Result;
                    Promise.all([comic, tl.loadTemplate('detailedComicBook')])
                        .then(([comic, template]) => $('#container').html(template(comic)))
                        .catch(console.log);
                }, function(error) {
                    alert(JSON.stringify(error));
                })
                .then(() => {
                    $("#container-slider").addClass('hidden');
                });
        }

        loadCategories(category) {
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
        }

        loadRegister() {
            Promise.all([tl.loadTemplate('register')])
                .then((template) => $('#container').html(template))
                .then(() => {
                    $("#container-slider").removeClass('hidden');
                })
                .catch(console.log);
        }

        loadFavorites() {
            let id = localStorage.getItem('current-id');
            data.user(id)
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
                    console.log(favorites);
                    Promise.all([favorites, tl.loadTemplate('favoriteComics')])
                        .then(([favorites, template]) => $('#container').html(template(favorites)))
                        .catch(console.log);
                })
                .then(() => {
                    $("#container-slider").addClass('hidden');
                });
        }

        loadContacts() {
            Promise.all([tl.loadTemplate('contactForm')])
                .then((template) => $('#container').html(template))
                .then(() => {
                    $("#container-slider").addClass('hidden');
                });
            data.contacts()
                .then(function(data) {
                        let contacts = data.Result[0];
                        Promise.all([contacts, tl.loadTemplate('contactForm')])
                            .then(([contacts, template]) => $('#container').html(template(contacts)))
                            .catch(console.log);
                    },
                    function(error) {
                        alert(JSON.stringify(error));
                    });
        }
    }

    return Controller;
})();





export { Controller };