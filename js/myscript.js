$(document).ready(function () {
    new WOW().init();
    $('#home-slider').on('init', function (e, slick) {
        var $firstAnimatingElements = $('#home-slider .slider__item:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    $("#home-slider").slick({
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        arrows: false
    });
    $('#home-slider').on('beforeChange', function (e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('#home-slider .slider__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function () {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function () {
                $this.removeClass($animationType);
            });
        });
    }
    $("#home-video-slider").slick({
        centerMode: true,
        slidesToShow: 1,
        dots: true,
        speed: 500,
        arrows: false,
        fade: false,
    });
    $('.product-thumbnails').slick({
        dots: false,
        vertical: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        verticalSwiping: true,
        centerMode: true,
        centerPadding: 10,
        asNavFor: ".product-gallery",
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    vertical: false,
                    centerPadding: 10,
                }
            },
        ]
    });

    $(".product-gallery").slick({
        autoplay: false,
        arrows: false,
        asNavFor: ".product-thumbnails"
    });


    $("#slides-sonha").slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        asNavFor: '#slides-sonha-item',
    });
    $("#slides-sonha-item").slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        autoplay: true,
        arrows: true,
        asNavFor: '#slides-sonha',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    arrows: false
                }
            },
        ]
    });

    $('.slide-featured-product-thumbnails').slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        centerMode: true,
        asNavFor: ".slide-featured-product"
    });

    $(".slide-featured-product").slick({
        autoplay: false,
        arrows: false,
        asNavFor: ".slide-featured-product-thumbnails"
    });

    $(".news__slides").slick({
        slidesToShow: 1,
        dots: false,
        arrows: false,
    });

    $(".related-items").slick({
        slidesToShow: 3,
            dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
        ]
    });

    function initMap() {
        // The location of Uluru
        var uluru = { lat: -25.344, lng: 131.036 };
        // The map, centered at Uluru
        var map = new google.maps.Map(
            document.getElementById('map'), { zoom: 4, center: uluru });
        // The marker, positioned at Uluru
        var marker = new google.maps.Marker({ position: uluru, map: map });
    }

    $(".slide-news").slick({
        slidesToShow: 1,
        dots: false,
        arrows: true,
        // centerMode: true,
        prevArrow: $('.arrow__left'),
        nextArrow: $('.arrow__right'),
    });

    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 3500,
        step: 50,
        slide: function( event, ui ) {
            $( "#min-price").html(ui.values[ 0 ]);

            suffix = '';
            if (ui.values[ 1 ] == $( "#max-price").data('max') ){
                suffix = ' +';
            }
            $( "#max-price").html(ui.values[ 1 ] + suffix);
        }
    });


});