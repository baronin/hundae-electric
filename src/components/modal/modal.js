const KEY_CODE = {
    ESC: 27
};
const BODY = document.querySelector('body')
const MODAL = document.querySelector('.modal')
const MODAL_WINDOW = document.querySelector('.modal-window')
const MODAL_MASK = document.querySelector('.modal-mask')
const BTN_CLOSR = document.querySelector('.is-btn-close')
let previousActiveElement;

function openModal() {
    previousActiveElement = document.activeElement;

    Array.from(document.body.children).forEach(child => {
        if (child !== MODAL) child.inert = true;
    })

    MODAL.classList.add('is-opened');
    BODY.classList.add('is-hidden');
    MODAL_MASK.addEventListener('click', closeModal);
    MODAL_WINDOW.querySelectorAll('.is-btn-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    document.addEventListener('keydown', checkCloseModal);

    MODAL.querySelector('.is-btn-close').focus();
}

function checkCloseModal(e) {
    if (e.keyCode === KEY_CODE.ESC) closeModal();
}

function closeModal() {
    MODAL_MASK.removeEventListener('click', closeModal);
    MODAL_WINDOW.querySelectorAll('.is-btn-close').forEach(btn => {
        btn.removeEventListener('click', closeModal);
    });
    document.removeEventListener('keydown', checkCloseModal);

    Array.from(document.body.children).forEach(child => {
        if (child !== MODAL) child.inert = false;
    })

    MODAL.classList.remove('is-opened');
    BODY.classList.remove('is-hidden');

    previousActiveElement.focus();
}
const BTN = '.btn-outline-primary'
if ($(BTN)) {
    $(BTN).on("click", () => {
        openModal()
    });
}
