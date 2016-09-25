import { dataServer } from './dataServer.js';
import { router } from './routing.js';
import { register } from './signInUser.js';
import { User } from './user.js';

$(() => { // on document ready
  const root = $('#root'),
    navbar = root.find('#nav-login-form'),
    mainNav = navbar.find('#main-nav'),
    contentContainer = $('#container'),
    loginForm = $('#login'),
    logoutForm = $('#logout'),
    registerForm = $('#btn-register-form'),

    usernameSpan = $('#span-username'),
    usernameInput = $('#login-input'),
  // start navigo
  router.init();
  //end navigo

  // start login/logout
  // $('#btn-login').on('click', (ev) => {
  //   var user = {
  //     username: usernameInput.val() || 'anonymous',
  //     password: userPassword.val()
  //   };
  //   dataServer.users.login(user)
  //     .then((user) => {
  //       usernameInput.val('');
  //       usernameSpan.text(user.username);
  //       loginForm.addClass('hidden');
  //       registerForm.addClass('hidden');
  //       logoutForm.removeClass('hidden');
  //       logoutForm.css('color', 'white');
  //       $("#span-username").css('color', 'white');
  //     });
  // });

  // $('#btn-logout').on('click', (ev) => {
  //   dataServer.users.logout()
  //     .then(() => {
  //       usernameSpan.text('');
  //       loginForm.removeClass('hidden');
  //       registerForm.removeClass('hidden');
  //       logoutForm.addClass('hidden');
  //     });
  // });
  // end login/logout
});

//start register
// $('#btn-register').on('click', function() {
//   var user = {
//     username: $('#tb-user').val(),
//     password: $('#tb-pass').val()
//   };
//   dataServer.users.register(user);
//   console.log(user);
// });

$('#root').on('click', '#btn-register-form', function(ev) {
    $('#root').addClass('blurred');
    $('#root').addClass('disabled-background');
});

$('#container').on('click', '#btn-register', function(ev) {
    let username = $("#username-input").val(),
        email = $("#email-input").val(),
        age = $("#age-input").val(),
        password = $("#password-input").val();
    debugger;
    var everlive = new Everlive('co50xbssvfni5o0s');
    let user = new User(username, age, email, password);

    let additionalInfo = {
        Email: user.email,
        Age: user.age
    };

    everlive.Users.register(user.username, user.password, additionalInfo)
        .then(function(data) {
            alert(JSON.stringify(data));
            successfullLogin(user.username);
        }, function(error) {
            alert(JSON.stringify(error));
        });

    // $('#root').removeClass('blurred');
    // $('#root').removeClass('disabled-background');
    // $('#container').html(""); //TODO after successfull register go to home page
});

$('#btn-login').on('click', function() {
    var everlive = new Everlive('co50xbssvfni5o0s');

    var username = $('#login-input').val();
    var password = $('#login-password').val();
    debugger;
    everlive.authentication.login(username, password, function(data) {
        var accessToken = data.result.access_token;
        successfullLogin(username);
        alert("Successfully logged the user in! Received access token: " + accessToken);
        console.log("Logged in");

    }, function(err) {
        alert("Unfortunately an error occurred: " + err.message);
    });


});

$('#btn-logout').on('click', function() {
    let everlive = new Everlive('co50xbssvfni5o0s');

    everlive.authentication.logout()
        .then(function() {
            alert("Logout successful!");
        }, function(err) {
            alert("Failed to logout: " + err.message);
        });
});

function successfullLogin(username) {
    $('#login').addClass('hidden');
    $('#logout').removeClass('hidden');
    $('#btn-register-form').addClass('hidden');
    $('#span-username').html(username);

    $('#login-input').val("");
    $('#login-password').val("");
}

//end register