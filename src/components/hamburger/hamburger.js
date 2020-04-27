const $hamburger = $(".js-hamburger");
const $headerMenu = $(".header-menu");
const isOpenClass = "is-open";

if ($hamburger) {
  $hamburger.on("click", () => {
    $headerMenu.toggleClass(isOpenClass);
  });
}

$(window).resize(function () {
  if ($(window).width() <= 768) {
    $headerMenu.removeClass(isOpenClass);
  }
});
