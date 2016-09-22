$(".navbar-nav").on("mouseover", function(event) {
    let target = event.target;
    $(target.parentElement).addClass("active");
});

$(".navbar-nav").on("mouseout", function(event) {
    let target = event.target;
    $(target.parentElement).removeClass("active");
});

$(".navbar-nav").on("click", function(event) {
    $("#container").html("");
});