import { router } from './routing.js';
import { register } from './signInUser.js';
import { User } from './user.js';

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
        //debugger;
        let user = new User(username, age, email, password);

        let additionalInfo = {
            Email: user.email,
            Age: user.age,
            ComicBooks: []
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
                //alert(JSON.stringify(data));
            }, function(error) {
                noty({
                    theme: 'relax',
                    text: "Unfortunately an error occurred: " + err.message,
                    type: 'error',
                    timeout: 3000,
                    closeWith: ['click']
                });
                // alert(JSON.stringify(error));
            });
    });
    //end register form
    //login 
    $('#btn-login').on('click', function() {
        var username = $('#login-input').val();
        var password = $('#login-password').val();
        //debugger;
        Everlive.$.Users.login(username, password, function(data) {
            var accessToken = data.result.access_token;
            localStorage.setItem(USERNAME_STORAGE_KEY, username);
            localStorage.setItem(AUTH_KEY_STORAGE_KEY, accessToken);
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
            //alert("Successfully logged the user in! Received access token: " + accessToken);
            //console.log(data);
            //console.log("Logged in");
        }, function(err) {
            noty({
                theme: 'relax',
                text: "Unfortunately an error occurred: " + err.message,
                type: 'error',
                timeout: 3000,
                closeWith: ['click']
            });
            //alert("Unfortunately an error occurred: " + err.message);
        });

    });
    //login
    //logout
    $('#btn-logout').on('click', function() {
        Everlive.$.Users.logout(function() {
            localStorage.removeItem(AUTH_KEY_STORAGE_KEY);
            localStorage.removeItem(USERNAME_STORAGE_KEY);
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
            // alert("Logout successful!");
        }, function(err) {
            noty({
                theme: 'relax',
                text: "Failed to logout: " + err.message,
                type: 'error',
                timeout: 3000,
                closeWith: ['click']
            });
            // alert("Failed to logout: " + err.message);
        });
    });
    //logout

    //Add to favorites
    $('#container').on('click', '#add-favorite', function(ev) {
        let id = $(this).attr("data-id"),
            userId;

        let everlive = new Everlive('co50xbssvfni5o0s');
        let comicBook = everlive.data('ComicBook');

        Everlive.$.Users.currentUser()
            .then(function(data) {
                if (data.result === null) {
                    noty({
                        theme: 'relax',
                        text: "You are not logged in",
                        type: 'error',
                        timeout: 3000,
                        closeWith: ['click']
                    });
                    return;
                }

                userId = data.result.Id;

                comicBook.getById(id)
                    .then(function(comic) {
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