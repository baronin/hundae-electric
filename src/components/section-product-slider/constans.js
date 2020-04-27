const MAIN_SLIDER_SETTINGS = {
  slidesToShow: 1,
  asNavFor: ".product-slide-thumbs",
  lazyLoad: "ondemand",
  arrows: false,
};

const THUMB_SLIDER_SETTING = {
  slidesToShow: 3,
  slidesToScroll: 1,
  lazyLoad: "ondemand",
  asNavFor: ".product-slide-photo",
  dots: false,
  centerMode: false,
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

export { MAIN_SLIDER_SETTINGS, THUMB_SLIDER_SETTING };
