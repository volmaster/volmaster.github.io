//Fixed navbar

$(window).scroll(function () {
    if ($(this).scrollTop() > 300) { // Set position from top to add class
        $('.navbar').addClass("scroll")
    } else {
        $('.navbar').removeClass("scroll")
    }
});

$("button.navbar-toggle").on("click", function () {
    $("#main-navbar").toggleClass("nav-bg");
});


// When we click on the LI


$(".navbar-nav a").on('click', function () {
    // If this isn't already active
    $(this).parent().hasClass("active");
    // Remove the class from anything that is active
    $("li.active").removeClass("active");
    // And make this active
    $(this).parent().addClass("active");

});


//Nav scroll

$("a.services").click(function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $("#services-section").offset().top
    }, 1200);
});

$('a[href^="#"]').on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1200);
    }
});

//MixUp
var $port = $('.portfolio');

$($port).mixItUp({
    selectors: {
        target: '.portfolio-block'
    },
    pagination: {
        limit: 8
    }
});


//Magnific Popup

$($port).magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
        enabled: true
    },
    image: {
        titleSrc: 'title'
    }
});

var btn = $('.more');
var port = $('.hide');


$(btn).on("click", function () {
    if (port.hasClass('hide')) {
        $(port).removeClass('hide');
        $(port).addClass('portfolio-block graphic').css({"display": "inline-block"});
        $(btn).text('Hide');
    } else {
        $(port).addClass('hide');
        $(port).removeClass('portfolio-block graphic').css({"display": "inline-block"});
        $(btn).text('Load More');
    }
});

//Animations

wow = new WOW({
    mobile: false
});
wow.init();

//Preloader

$(window).load(function() {
    $("#loading").fadeOut(2000);
})