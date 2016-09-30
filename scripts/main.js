import { router } from './routing.js';
import { User } from './models/user.js';
import { userData } from './data/userData.js';
import { data as comicData } from './data/data.js';

const USERNAME_STORAGE_KEY = 'username-key',
    AUTH_KEY_STORAGE_KEY = 'auth-key-key';
new Everlive('co50xbssvfni5o0s');

$(() => { // on document ready   
    const loginForm = $('#login'),
        logoutForm = $('#logout'),
        registerForm = $('#btn-register-form'),
        usernameSpan = $('#span-username'),
        favorites = $('#favorites');
    // start navigo
    //end navigo

    router.init();

    $('#root').on('click', '#btn-register-form', function(ev) {
        $('#root').addClass('blurred');
        $('#root').addClass('disabled-background');
    });
    $('#body').on('click', '#btn-register', function(ev) {
        $('#root').removeClass('blurred');
        $('#root').removeClass('disabled-background');
    });
    $('#body').on('click', '#btn-cancel', function(ev) {
        $('#root').removeClass('blurred');
        $('#root').removeClass('disabled-background');
    });

    //register form
    $('#container').on('click', '#btn-register', function(ev) {
        let username = $("#username-input").val(),
            email = $("#email-input").val(),
            age = $("#age-input").val(),
            password = $("#password-input").val();
        let user = new User(username, age, email, password);

        let additionalInfo = {
            Email: user.email,
            Age: user.age
        };

        Everlive.$.Users.register(user.username, user.password, additionalInfo)
            .then(function(data) {
                noty({
                    theme: 'relax',
                    text: 'Successfully register!',
                    type: 'success',
                    timeout: 2000,
                    closeWith: ['click']
                });
            }, function(error) {
                noty({
                    theme: 'relax',
                    text: "Unfortunately an error occurred: " + err.message,
                    type: 'error',
                    timeout: 3000,
                    closeWith: ['click']
                });
            });
    });
    //end register form
    //login 
    $('#btn-login').on('click', function() {
        var username = $('#login-input').val();
        var password = $('#login-password').val();

        Everlive.$.Users.login(username, password, function(data) {
            var accessToken = data.result.access_token;
            localStorage.setItem(USERNAME_STORAGE_KEY, username);
            localStorage.setItem(AUTH_KEY_STORAGE_KEY, accessToken);
            localStorage.setItem('current-id', data.result.principal_id);
            usernameSpan.text(username);
            loginForm.addClass('hidden');
            registerForm.addClass('hidden');
            logoutForm.removeClass('hidden');
            favorites.removeClass('hidden');
            noty({
                theme: 'relax',
                text: 'Successfully log in!',
                type: 'success',
                timeout: 2000,
                closeWith: ['click']
            });
        }, function(err) {
            noty({
                theme: 'relax',
                text: "Unfortunately an error occurred: " + err.message,
                type: 'error',
                timeout: 3000,
                closeWith: ['click']
            });
        });

    });
    //login
    //logout
    $('#btn-logout').on('click', function() {
        Everlive.$.Users.logout(function() {
            localStorage.removeItem(AUTH_KEY_STORAGE_KEY);
            localStorage.removeItem(USERNAME_STORAGE_KEY);
            localStorage.removeItem('current-id');
            usernameSpan.text('');
            loginForm.removeClass('hidden');
            registerForm.removeClass('hidden');
            logoutForm.addClass('hidden');
            favorites.addClass('hidden');
            noty({
                theme: 'relax',
                text: 'Successfully logged out!',
                type: 'success',
                timeout: 2000,
                closeWith: ['click']
            });
        }, function(err) {
            noty({
                theme: 'relax',
                text: "Failed to logout: " + err.message,
                type: 'error',
                timeout: 3000,
                closeWith: ['click']
            });
        });
    });
    //logout

    $('#container').on('click', '#add-favorite', function(ev) {
        let id = $(this).attr("data-id"),
            userId;

        let everlive = new Everlive('co50xbssvfni5o0s');
        let comicBook = everlive.data('ComicBook');

        userId = localStorage.getItem('current-id');
        if (userId === null) {
            noty({
                theme: 'relax',
                text: "You are not logged in",
                type: 'error',
                timeout: 3000,
                closeWith: ['click']
            });
            return;
        }

        userData.getById(userId)
            .then((data) => {
                comicData.getById("ComicBook", id)
                    .then((comic) => {
                        var attributes = {
                            "$push": {
                                "Favourite": comic
                            }
                        };

                        var filter = {
                            'Id': userId
                        };

                        Everlive.$.Users.rawUpdate(attributes, filter, function(data) {
                            noty({
                                theme: 'relax',
                                text: 'Successfully added to favorites!',
                                type: 'success',
                                timeout: 1000,
                                closeWith: ['click']
                            });
                        }, function(error) {
                            console.log(JSON.stringify(error));
                        });
                    }, function(error) {
                        noty({
                            theme: 'relax',
                            text: "You are not logged in: " + error.message,
                            type: 'error',
                            timeout: 3000,
                            closeWith: ['click']
                        });
                    });
            });
    });
});