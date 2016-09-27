(function() {
    let everlive = new Everlive('co50xbssvfni5o0s');
    let comicBook = everlive.data('ComicBook');
    console.log(comicBook);
    // let comic = {
    //     Title: 'Batman',
    //     Author: 'Joker',
    //     Year: '2000',
    //     ImageSrc: 'https://s-media-cache-ak0.pinimg.com/originals/cb/72/02/cb720221d3b97df5f64c2644465ccb25.jpg',
    //     Publisher: 'DC',
    //     Description: 'Some descriptio'
    // };

    // Creating Objects
    // comicBook.create(comic).
    // then(function() {
    //     console.log("Comic book created");
    // });

    // we get all the comic books -> even the ones added from the site
    // $("#comics").on("click", function() {
    //     comicBook.get()
    //         .then(function(data) {
    //                 showAllComics(data);
    //             },
    //             function(error) {
    //                 alert(JSON.stringify(error));
    //             });

    //     function showAllComics(data) {
    //         let img = $("<img />"),
    //             paragraph = $("<p />"),
    //             elements = data.result,
    //             div = $("<div />");

    //         for (let i = 0; i < data.count; i += 1) {
    //             let newImg = img.clone(true),
    //                 par = paragraph.clone(true);

    //             newImg.attr("src", elements[i].ImageSrc);
    //             par.html(`title: ${elements[i].Title}, Author: ${elements[i].Author}`);

    //             div.append(newImg);
    //             div.append(par);
    //         }

    //         $("#container").append(div);
    //     }
    // });
})();