$(document).ready(() => {
  $(".product-images").slick({
    slidesToShow: 1,
    asNavFor: ".product-images-dotted",
    arrows: false,
  });
  $(".product-images-dotted").slick({
    slidesToShow: 3,
    asNavFor: ".product-images",
    focusOnSelect: true,
    arrows: false,
  });
});
