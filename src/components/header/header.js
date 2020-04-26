$(document).ready(() => {
    toggleHeaderBgOnScroll();
});
const HEADER = document.querySelector('.header-bottom');
const HEADER_TOP = $('.header-top').outerHeight();

const toggleHeaderBgOnScroll = () => {
    const onScroll = () => (document.body.scrollTop > HEADER_TOP || document.documentElement.scrollTop > HEADER_TOP
        ? HEADER.classList.add('header-fixed')
        : HEADER.classList.remove('header-fixed'));

    window.addEventListener('scroll', onScroll);
};
