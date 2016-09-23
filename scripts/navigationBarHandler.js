$(".navbar-nav").on("mouseover", function(event) {
    let target = event.target;
    $(target.parentElement).addClass("active");

    if ($(target.parentElement).hasClass("dropdown")) {
        $(target).next().css("display", "block");
    }
});

$(".navbar-nav").on("mouseout", function(event) {
    let target = event.target;
    $(target.parentElement).removeClass("active");
});

$(".dropdown-menu").on("mouseover", function(event) {
    let target = event.target;
    // debugger;
    $(target.parentElement).addClass("active");
    $(this).css("display", "block");
});


$(".dropdown-menu").on("mouseout", function(event) {
    let target = event.target;
    $(this).css("display", "none");
});

$(".navbar-nav").on("click", function(event) {
    $("#container").html("");
});