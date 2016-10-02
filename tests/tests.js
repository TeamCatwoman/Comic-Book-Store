import { ComicBook } from '../scripts/models/comicBook.js';
import { data } from '../scripts/data/data.js';
import { requester } from '../scripts/requester.js';

mocha.setup('bdd');

const { expect, assert } = chai;

describe('Data Tests', function() {
    // describe('ComicBook tests', function() {
    //     let comicBook = new ComicBook('Batman', 'joker', 'dc', 1986, 25, 'DC', 'Bla', '../image/', '5454-121');

    //     it('Title should be set correctly', function() {
    //         expect(comicBook.title).to.equal('Batman');
    //     });

    //     it('Author should be set correctly', function() {
    //         expect(comicBook.author).to.equal('joker');
    //     });

    //     it('Publisher should be set correctly', function() {
    //         expect(comicBook.publisher).to.equal('dc');
    //     });

    //     it('Year should be set correctly', function() {
    //         expect(comicBook.year).to.equal(1986);
    //     });

    //     it('Category should be set correctly', function() {
    //         expect(comicBook.category).to.equal('DC');
    //     });

    //     it('Description should be set correctly', function() {
    //         expect(comicBook.description).to.equal('Bla');
    //     });
    // });

    describe('Get comics books', function() {
        const comicBook = {
            result: []
        };

        beforeEach(function() {
            sinon.stub(requester, 'get')
                .returns(new Promise((resolve, reject) => {
                    resolve(comicBook);
                }));
        });
        afterEach(function() {
            requester.get.restore();
        });

        it('expect get data.getComicBooks to return correct result', function(done) {
            data.getComicBooks()
                .then((actual) => {
                    expect(actual).to.eql(comicBook);
                })
                .then(done, done);
        });

        it('expect data.getComicBooks to make correct call with valid url', function(done) {
            data.getComicBooks()
                .then((comics) => {
                    const actual = requester.get
                        .firstCall
                        .args[0];

                    expect(actual).to.equal('https://api.everlive.com/v1/co50xbssvfni5o0s/ComicBook');
                })
                .then(done, done);
        });
    });

    describe('Get comic book by id', function() {
        const comicBook = {
            id: 15
        };

        beforeEach(function() {
            sinon.stub(requester, 'get')
                .returns(new Promise((resolve, reject) => {
                    resolve(comicBook);
                }));
        });
        afterEach(function() {
            requester.get.restore();
        });

        it('expect to data.getComicBookId to return correct result', function(done) {
            data.getComicBookById(15)
                .then((actual) => {
                    expect(actual.id).to.equal(15);
                })
                .then(done, done);
        });

        it('expect to data.getComicBookId to make correct call with valid url', function(done) {
            data.getComicBookById(15)
                .then((comic) => {
                    const actual = requester.get
                        .firstCall
                        .args[0];

                    expect(actual).to.equal('https://api.everlive.com/v1/co50xbssvfni5o0s/ComicBook/15');
                })
                .then(done, done);
        });
    });

    describe('Get user by id', function() {
        const user = {
            id: 9
        };

        beforeEach(function() {
            sinon.stub(requester, 'get')
                .returns(new Promise((resolve, reject) => {
                    resolve(user);
                }));
        });
        afterEach(function() {
            requester.get.restore();
        });

        it('expect to data.user to return correct result', function(done) {
            data.user(9)
                .then((actual) => {
                    expect(actual.id).to.equal(9);
                })
                .then(done, done);
        });

        it('expect to data.user to make correct call with valid url', function(done) {
            data.user(9)
                .then((user) => {
                    const actual = requester.get
                        .firstCall
                        .args[0];

                    expect(actual).to.equal('https://api.everlive.com/v1/co50xbssvfni5o0s/Users/9');
                })
                .then(done, done);
        });
    });

    describe('Get contacts', function() {
        const contact = {
            result: []
        };

        beforeEach(function() {
            sinon.stub(requester, 'get')
                .returns(new Promise((resolve, reject) => {
                    resolve(contact);
                }));
        });
        afterEach(function() {
            requester.get.restore();
        });

        it('expect to data.contacts to return correct result', function(done) {
            data.contacts()
                .then((actual) => {
                    expect(actual).to.equal(contact);
                })
                .then(done, done);
        });

        it('expect to data.contacts to make correct call with valid url', function(done) {
            data.contacts()
                .then((user) => {
                    const actual = requester.get
                        .firstCall
                        .args[0];

                    expect(actual).to.equal('https://api.everlive.com/v1/co50xbssvfni5o0s/contacts');
                })
                .then(done, done);
        });
    });

    describe('Get home stories', function() {
        const homeStory = {
            result: []
        };

        beforeEach(function() {
            sinon.stub(requester, 'get')
                .returns(new Promise((resolve, reject) => {
                    resolve(homeStory);
                }));
        });
        afterEach(function() {
            requester.get.restore();
        });

        it('expect to data.homePage to return correct result', function(done) {
            data.homePage()
                .then((actual) => {
                    expect(actual).to.equal(homeStory);
                })
                .then(done, done);
        });

        it('expect to data.homePage to make correct call with valid url', function(done) {
            data.homePage()
                .then((user) => {
                    const actual = requester.get
                        .firstCall
                        .args[0];

                    expect(actual).to.equal('https://api.everlive.com/v1/co50xbssvfni5o0s/HeroHistory');
                })
                .then(done, done);
        });
    });
});

describe('ComicBook Tests', function() {
    describe('Valid Parameters: ComicBook properties test', function() {
        let comicBook = new ComicBook('Batman', 'joker', 'dc', 1986, 25, 'DC', 'Bla', '../image/', '5454-121');

        it('Title should be set correctly', function() {
            expect(comicBook.title).to.equal('Batman');
        });

        it('Author should be set correctly', function() {
            expect(comicBook.author).to.equal('joker');
        });

        it('Publisher should be set correctly', function() {
            expect(comicBook.publisher).to.equal('dc');
        });

        it('Year should be set correctly', function() {
            expect(comicBook.year).to.equal(1986);
        });

        it('Category should be set correctly', function() {
            expect(comicBook.category).to.equal('DC');
        });

        it('Description should be set correctly', function() {
            expect(comicBook.description).to.equal('Bla');
        });
    });

    // describe('Invalid Parameters: ComicBook', function() {
    //     const parameters = {
    //         VALID: {
    //             VALID_TITLE: 'Batman',
    //             VALID_AUTHOR: 'John',
    //             VALID_PUBLISHER: 'DC',
    //             VALID_YEAR: 1930,
    //             VALID_PRICE: 50,
    //             VALID_CATEGORY: 'DC Comics',
    //             VALID_DESCRIPTION: 'Description',
    //             VALID_SRC: '../img/batman.jpg',
    //             VALID_ID: '5489-785'
    //         }
    //     };


    //     it('Title should be set correctly', function() {
    //         let comicBook = new ComicBook(undefined, parameters.VALID.VALID_AUTHOR, parameters.VALID.VALID_PUBLISHER,
    //             parameters.VALID.VALID_YEAR, parameters.VALID.VALID_PRICE, parameters.VALID.VALID_CATEGORY, parameters.VALID.VALID_DESCRIPTION,
    //             parameters.VALID.VALID_SRC, parameters.VALID.VALID_ID);
    //         console.log(comicBook);
    //         expect(comicBook.title).to.throw(Error);
    //     });

    //     it('Author should be set correctly', function() {
    //         expect(comicBook.author).to.equal('joker');
    //     });

    //     it('Publisher should be set correctly', function() {
    //         expect(comicBook.publisher).to.equal('dc');
    //     });

    //     it('Year should be set correctly', function() {
    //         expect(comicBook.year).to.equal(1986);
    //     });

    //     it('Category should be set correctly', function() {
    //         expect(comicBook.category).to.equal('DC');
    //     });

    //     it('Description should be set correctly', function() {
    //         expect(comicBook.description).to.equal('Bla');
    //     });
    // });
});


mocha.run();