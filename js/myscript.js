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
        asNavFor: ".product-gallery"
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
});