$(document).ready(() => {
  toggleHeaderBgOnScroll();
});
const HEADER = document.querySelector(".header-bottom");
const $HEADER_BOTTOM_CLASS = $(".header-bottom");
const HEADER_BOTTOM_OFFSET = $HEADER_BOTTOM_CLASS.offset().top; // offset().top
const HEADER_BOTTOM_HEIGHT = $HEADER_BOTTOM_CLASS.outerHeight(); // offset().top
const MAIN_CLASS = document.querySelector(".main");
const toggleHeaderBgOnScroll = () => {
  const onScroll = () => {
    if (
      document.body.scrollTop > HEADER_BOTTOM_OFFSET ||
      document.documentElement.scrollTop > HEADER_BOTTOM_OFFSET
    ) {
      HEADER.classList.add("header-fixed");
      MAIN_CLASS.style.paddingTop = `${HEADER_BOTTOM_HEIGHT}px`;
    } else {
      HEADER.classList.remove("header-fixed");
      MAIN_CLASS.style.paddingTop = "0";
    }
  };
  window.addEventListener("scroll", onScroll);
};
