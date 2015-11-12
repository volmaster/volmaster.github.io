//Fixed navbar

$(window).scroll(function () {
    var navbar = $("#main-navbar");
    var logo = $(".logo");
    if ($(this).scrollTop() > 300) { // Set position from top to add class
        $(navbar).addClass("scroll");
        $(logo).addClass("logo-min");
    } else {
        $(navbar).removeClass("scroll");
        $(logo).removeClass("logo-min");
    }
});

$("button.navbar-toggle").on("click", function () {
    $("#main-navbar").toggleClass("nav-bg");
});

//Datepicker Widget

$(function () {
    $(".datepicker").datepicker();
});

//ScrollTo

$('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1200);
    }
});

$("button.black").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#reservations").offset().top
    }, 1500);
});

$("button.silver").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#menu").offset().top
    }, 1500);
});

//Animations

wow = new WOW({
    mobile: false
});
wow.init();

//Preloader

$(window).load(function() {
    $("#loading").fadeOut(2000);
});