import { dataServer } from './dataServer.js';
import { router } from './routing.js';

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
    userPassword=$('#login-password');
   

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
$('#btn-register').on('click', function() {
  var user = {
    username: $('#tb-user').val(),
    password: $('#tb-pass').val()
  };
  dataServer.users.register(user);
  console.log(user);
});

$('#root').on('click', '#btn-register-form', function(ev) {
    $('#root').addClass('blurred');
    $('#root').addClass('disabled-background');
});
$('#container').on('click','#btn-register', function (ev) {  $('#root').removeClass('blurred');
  $('#root').removeClass('disabled-background');
  $('#container').html(""); //TODO after successfull register go to home page
});
//end register