let data = (function() {
    let everlive = new Everlive('co50xbssvfni5o0s');
    let comicBook = everlive.data('ComicBook');
    // console.log(comicBook);

    let getFavoriteComics = function(idComics) {
        let favorites = [];

        idComics.forEach((id) => {
            comicBook.getById(id)
                .then((currentComicBook) => {
                    favorites.push({ currentComicBook });
                });
        });

        console.log(favorites);

        return favorites;
    };

    return {
        getFavoriteComics
    };

})();

export { data };