// let registerNewUser = (function() {
//     $("#btn-register").on("click", function() {

//         let username = $("#username-input").val(),
//             email = $("#email-input").val,
//             age = $("#age-input").val,
//             password = $("#password-input").val;

//         var el = new Everlive('co50xbssvfni5o0s');

//         var attrs = {
//             Email: email,
//             Age: age
//         };

//         el.Users.register(username,
//             password,
//             attrs,
//             function(data) {
//                 alert(JSON.stringify(data));
//             },
//             function(error) {
//                 alert(JSON.stringify(error));
//             });
//     });
// })();

// export { registerNewUser };