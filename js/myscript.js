$(document).ready(function() {
    new WOW().init();
    $('#home-slider').on('init', function(e, slick) {
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
    $('#home-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('#home-slider .slider__item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);    
    });
    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
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
});