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
        usernameSpan = $('#span-username');
    // start navigo
    //end navigo

    router.init();

    $('#root').on('click', '#btn-register-form', function (ev) {
        $('#root').addClass('blurred');
        $('#root').addClass('disabled-background');
    });
    $('#body').on('click', '#btn-register', function (ev) {
        $('#root').removeClass('blurred');
        $('#root').removeClass('disabled-background');
    });
    $('#body').on('click', '#btn-cancel', function (ev) {
        $('#root').removeClass('blurred');
        $('#root').removeClass('disabled-background');
    });

    //register form
    $('#container').on('click', '#btn-register', function (ev) {
        let username = $("#username-input").val(),
            email = $("#email-input").val(),
            age = $("#age-input").val(),
            password = $("#password-input").val();
        //debugger;
        let user = new User(username, age, email, password);

        let additionalInfo = {
            Email: user.email,
            Age: user.age
        };

        Everlive.$.Users.register(user.username, user.password, additionalInfo)
            .then(function (data) {
                alert(JSON.stringify(data));
            }, function (error) {
                alert(JSON.stringify(error));
            });
    });
    //end register form
    //login 
    $('#btn-login').on('click', function () {
        var username = $('#login-input').val();
        var password = $('#login-password').val();
        //debugger;
        Everlive.$.Users.login(username, password, function (data) {
            var accessToken = data.result.access_token;
            localStorage.setItem(USERNAME_STORAGE_KEY, username);
            localStorage.setItem(AUTH_KEY_STORAGE_KEY, accessToken);
            usernameSpan.text(username);
            loginForm.addClass('hidden');
            registerForm.addClass('hidden');
            logoutForm.removeClass('hidden');
            alert("Successfully logged the user in! Received access token: " + accessToken);
            console.log(data);
            console.log("Logged in");
        }, function (err) {
            alert("Unfortunately an error occurred: " + err.message);
        });


    });
    //login
    //logout
    $('#btn-logout').on('click', function () {
        Everlive.$.Users.logout(function () {
            localStorage.removeItem(AUTH_KEY_STORAGE_KEY);
            localStorage.removeItem(USERNAME_STORAGE_KEY);
            usernameSpan.text('');
            loginForm.removeClass('hidden');
            registerForm.removeClass('hidden');
            logoutForm.addClass('hidden');
            alert("Logout successful!");
        }, function (err) {
            alert("Failed to logout: " + err.message);
        });
    });
    //logout
});