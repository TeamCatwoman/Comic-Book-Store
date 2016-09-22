let container = $("#container"),
    form = $("<form />"),
    heading = $("<h2 />"),
    input = $("<input />").addClass("form-control"),
    label = $("<label />"),
    div = $("<div />"),
    button = $("<button />").addClass("btn btn-lg btn-block"),
    headingFive = $("<h5 />");

form.addClass("form-signin");
heading.addClass("form-signin-heading");


$(".navbar-right").on("click", function(event) {
    // debugger;
    container.html("");
    form.html("");
    heading.html("Sign in");
    form.append(heading);
    label.html("Email address");
    label.attr("id", "inputEmail");
    form.append(label.clone(true));
    form.append(input.clone(true));
    label.html("Password");
    label.attr("id", "inputPassword");
    form.append(label.clone(true));
    form.append(input.clone(true));

    headingFive.html("* Not registered yet? Sign in here!");
    form.append(headingFive);
    // button.html("Sign in");
    // form.append(button);

    container.append(form);
});