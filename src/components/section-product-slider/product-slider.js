import { MAIN_SLIDER_SETTINGS, THUMB_SLIDER_SETTING } from "./constans";

$(document).ready(() => {
  const $MAIN_SLIDER = $(".product-slide-photo");
  const $THUMB_SLIDER = $(".product-slide-thumbs");
  const SLICK_ACTIVE_CLASS = "slick-active";

  if ($MAIN_SLIDER.length && $THUMB_SLIDER.length) {
    $MAIN_SLIDER
      .on("init", () => $MAIN_SLIDER.fadeIn(1000))
      .slick(MAIN_SLIDER_SETTINGS);

    $THUMB_SLIDER
      .on("init", () => $THUMB_SLIDER.fadeIn(1000))
      .slick(THUMB_SLIDER_SETTING);

    $(".product-slide-thumbs .slick-slide").removeClass(SLICK_ACTIVE_CLASS);

    $(".product-slide-thumbs .slick-slide").eq(0).addClass(SLICK_ACTIVE_CLASS);

    $MAIN_SLIDER.on("beforeChange", function (
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      let SLIDE_NUMBER = nextSlide;
      $MAIN_SLIDER.removeClass(SLICK_ACTIVE_CLASS);
      $MAIN_SLIDER.eq(SLIDE_NUMBER).addClass(SLICK_ACTIVE_CLASS);
    });
  }
});
