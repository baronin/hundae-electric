const SLIDE_MAIN_CLASS = $('.product-slide-main');
const SLIDE_THMB_CLASS = $('.product-slide-thmb');
const SLICK_ACTIVE_CLASS = 'slick-active';
$(document).ready(() => {
    if ( SLIDE_MAIN_CLASS.length ) {
        let $slider = SLIDE_MAIN_CLASS
            .on('init', function(slick) {
                $('.product-slide-main').fadeIn(1000);
            })
            .slick({
                slidesToShow: 1,
                asNavFor: '.product-slide-thmb',
                lazyLoad: 'ondemand',
                arrows: false
            })

        let $slider2 = SLIDE_THMB_CLASS
            .on('init', function(slick) {
                SLIDE_THMB_CLASS.fadeIn(1000);
            })
            .slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                lazyLoad: 'ondemand',
                asNavFor: '.product-slide-main',
                dots: false,
                centerMode: false,
                arrows: false,
                focusOnSelect: true
            });

        $('.product-slide-thmb .slick-slide').removeClass(SLICK_ACTIVE_CLASS);

        $('.product-slide-thmb .slick-slide').eq(0).addClass(SLICK_ACTIVE_CLASS);

        SLIDE_MAIN_CLASS.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            let SLIDE_NUMBER = nextSlide;
            SLIDE_MAIN_CLASS.removeClass(SLICK_ACTIVE_CLASS);
            SLIDE_MAIN_CLASS.eq(SLIDE_NUMBER).addClass(SLICK_ACTIVE_CLASS);
        });
    }
})
