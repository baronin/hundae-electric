const $hamburger = $("#js-hamburger");
const $headerNav = $(".header-nav");
const $body = $("body");
const $hamburgerOpenClass = 'is-hamburger-open';
const $hamburgerToggleClass = 'js-hamburger-toggle';

if ($hamburger) {
    $hamburger.on("click", () => {
        $headerNav.toggleClass($hamburgerOpenClass);
        $body.toggleClass($hamburgerToggleClass);
    });
}

$(window).resize(function () {
    if($(window).width() <= 768){
        $($body).removeClass($hamburgerToggleClass);
        $($headerNav).removeClass($hamburgerOpenClass);
    };
});
