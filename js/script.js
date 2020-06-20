new WOW().init();

$(window).on('load', function () {
    $("#loader").fadeOut();
    // setTimeout(function () {
    //     $("#loader").fadeOut();
    // }, 1500);
});
jQuery(document).ready(function ($) {
    $(window).on('load resize scroll', function () {
        var header = $('header.mainHeader nav.navbar');
        var header_Height = header.outerHeight() + 10;
        if (getScrollTop() > header_Height) {
            $('body').addClass('headerSticky');
            $(header).addClass('sticky');
        } else {
            $('body').removeClass('headerSticky');
            $(header).removeClass('sticky');
        }
    });
    function getScrollTop() {
        if (typeof pageYOffset != 'undefined') {
            return pageYOffset;
        } else {
            var B = document.body;
            var D = document.documentElement;
            D = (D.clientHeight) ? D : B;
            return D.scrollTop;
        }
    }
});

var owl = $('.mainslider.owl-carousel');
owl.owlCarousel({
    nav: false,
    dots: true,
    loop: true,
    margin: 1,
    items: 1,
    navText: ['', ''],
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false
});
