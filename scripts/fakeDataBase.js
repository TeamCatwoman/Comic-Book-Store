
let books = (() => {

    const allBooks = [
        {
            id: 1,
            image: '../images/testImgs/1.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "J. K. Rowling",
            name: "Harry Potter",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 2,
            image: '../images/testImgs/2.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "Boncho B. J.",
            name: "Matrix",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 3,
            image: '../images/testImgs/3.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "T. Yoradanova",
            name: "The secret room",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 4,
            image: '../images/testImgs/4.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "C. Hristov",
            name: "Deadliest catch",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 5,
            image: '../images/testImgs/5.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "J. K. Rowling",
            name: "Harry Potter",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 6,
            image: '../images/testImgs/6.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "S. Segal",
            name: "How to beat Chuck Noris",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 7,
            image: '../images/testImgs/7.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "Chuck Noris",
            name: "Drinkin water from the tap",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 8,
            image: '../images/testImgs/8.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "J. K. Gotham",
            name: "Batman",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 9,
            image: '../images/testImgs/9.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "J. K. Superman",
            name: "Superman",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        }, {
            id: 10,
            image: '../images/testImgs/10.jpg',
            format: {
                cover: "hardback",
                pages: 300
            },
            dimensions: {
                width: 176,
                height: 236,
                thickness: 32,
                weight: 590
            },
            salesRank: Math.floor((Math.random() * 10) + 1),
            publicationDate: "31 jul 2016",
            publisher: "LITTLE BROWN",
            PublicationCityCountry: "London UK",
            language: "english",
            author: "C. Womam",
            name: "Catwoman",
            overview: 'The Eighth Story. Nineteen Years Later. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne. Based on an original new story by J.K. Rowling, Jack Thorne and John Tiffany, a new play by Jack Thorne, Harry Potter and the Cursed Child is the eighth story in the Harry Potter series and the first official Harry Potter story to be presented on stage. The play will receive its world premiere in London’s West End on 30th July 2016. It was always difficult being Harry Potter and it isn’t much easier now that he is an overworked employee of the Ministry of Magic, a husband, and father of three school-age children. While Harry grapples with a past that refuses to stay where it belongs, his youngest son Albus must struggle with the weight of a family legacy he never wanted. As past and present fuse ominously, both father and son learn the uncomfortable truth: sometimes, darkness comes from unexpected places.'
        },
    ];
    return {
        allBooks
    };

})();
export { books };