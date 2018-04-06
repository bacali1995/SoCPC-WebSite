;(function () {

    'use strict';

    // iPad and iPod detection
    var isiPad = function () {
        return (navigator.platform.indexOf("iPad") != -1);
    };

    var isiPhone = function () {
        return (
            (navigator.platform.indexOf("iPhone") != -1) ||
            (navigator.platform.indexOf("iPod") != -1)
        );
    };

    var dropDownMenu = function () {

        $(".drop-down-menu").hover(function () {
                $(this).addClass('active');
            },
            function () {
                $(this).removeClass('active');
            });

    };

    var loaderPage = function () {
         $(".loader-container").fadeOut("slow");
    };

    var goToTop = function () {

        $('.js-gotop').on('click', function (event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function () {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };


    var owlCarouselMain = function () {
        var owl = $('.owl-carousel-main');

        owl.owlCarousel({
            items: 1,
            mouseDrag: true,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            dots: false,
            autoHeight: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayHoverPause: true,
            navText: [
                "<i class='icon-chevron-left owl-direction'></i>",
                "<i class='icon-chevron-right owl-direction'></i>"
            ]
        });
        var owl2 = $('.owl-carousel-sponsor');

        owl2.owlCarousel({
            items: 3,
            mouseDrag: true,
            loop: true,
            margin: 40,
            responsiveClass: true,
            nav: true,
            dots: false,
            autoHeight: true,
            smartSpeed: 500,
            autoplay: true,
            autoplayHoverPause: true,
            navText: [
                "<i class='icon-chevron-left owl-direction'></i>",
                "<i class='icon-chevron-right owl-direction'></i>"
            ]
        });
        $(window).resize(function () {
            owl.trigger('refresh.owl.carousel');
        });
    };

    var offcanvasMenu = function () {
        $('#wrap').prepend('<div id="fh5co-offcanvas" />');
        $('#fh5co-offcanvas').append($('#fh5co-main-nav').clone());
    };


    var burgerMenu = function () {

        $('body').on('click', '.js-fh5co-nav-toggle', function (event) {
            var $this = $(this);

            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('fh5co-overflow offcanvas-visible');
                $this.removeClass('active');
            } else {
                $('body').addClass('fh5co-overflow offcanvas-visible');
                $this.addClass('active');
            }

            event.preventDefault();

        });

        $('#fh5co-offcanvas').css('height', $(window).height());

        $(window).resize(function () {
            $('#fh5co-offcanvas').css('height', $(window).height());
            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }
        });

        $(window).scroll(function () {
            if ($('body').hasClass('offcanvas-visible')) {
                $('body').removeClass('offcanvas-visible');
                $('.js-fh5co-nav-toggle').removeClass('active');
            }
        });

    };


    // Document on load.
    $(function () {

        dropDownMenu();
        owlCarouselMain();
        offcanvasMenu();
        burgerMenu();
        loaderPage();
        goToTop();

    });


}());

var validForm = function () {
    var name = document.forms['form']['name'].value;
    var email = document.forms['form']['email'].value;
    var message = document.forms['form']['message'].value;

    if (!name.match('^[a-zA-Z0-9 .\\-]+$')) {
        alert('Please enter a valid name.');
        return false;
    }

    if (!email.match('^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$')) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (message === '') {
        alert('Please enter a message.');
        return false;
    }
    return true;
};