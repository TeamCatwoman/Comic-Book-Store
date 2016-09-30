import { data } from './data.js';
import { templateLoader as tl } from './template-loader.js';

let controller = {
    home: () => {

    },
    comics: () => {
        data.get('ComicBook')
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
    detailedComicBook: (id) => {
        data.getById('ComicBook', id)
            .then(function(comics) {
                //debugger;
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
        //debugger;
        data.getByCategory("ComicBook", category)
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
};

export { controller };