const KEY_CODE = {
  ESC: 27,
};
const BODY = document.querySelector("body");
const MODAL = document.querySelector(".modals");
const MODAL_WINDOW = document.querySelector(".modals-window");
const MODAL_MASK = document.querySelector(".modals-mask");
const BTN_CLOSR = document.querySelector(".is-btn-close");
let previousActiveElement;

function openModal() {
  previousActiveElement = document.activeElement;

  Array.from(document.body.children).forEach((child) => {
    if (child !== MODAL) child.inert = true;
  });

  MODAL.classList.add("is-opened");
  BODY.classList.add("is-hidden");
  MODAL_MASK.addEventListener("click", closeModal);
  MODAL_WINDOW.querySelectorAll(".is-btn-close").forEach((btn) => {
    btn.addEventListener("click", closeModal);
  });
  document.addEventListener("keydown", checkCloseModal);

  MODAL.querySelector(".is-btn-close").focus();
}

function checkCloseModal(e) {
  if (e.keyCode === KEY_CODE.ESC) closeModal();
}

function closeModal() {
  MODAL_MASK.removeEventListener("click", closeModal);
  MODAL_WINDOW.querySelectorAll(".is-btn-close").forEach((btn) => {
    btn.removeEventListener("click", closeModal);
  });
  document.removeEventListener("keydown", checkCloseModal);

  Array.from(document.body.children).forEach((child) => {
    if (child !== MODAL) child.inert = false;
  });

  MODAL.classList.remove("is-opened");
  BODY.classList.remove("is-hidden");

  previousActiveElement.focus();
}

const BTN = ".btn-outline-primary"; // TODO this need fix
if (MODAL) {
  $(BTN).on("click", () => {
    openModal();
  });
}

const INPUT_CLASS = $(".input");

const floatInputLabel = () => {
  if ($("form > input")) {
    INPUT_CLASS.on("focusin", function () {
      $(this)
        .parent()
        .find(".label-placeholder")
        .not(".error")
        .addClass("active");
    });

    INPUT_CLASS.on("focusout", function () {
      if (!this.value) {
        $(this)
          .parent()
          .find(".label-placeholder")
          .not(".error")
          .removeClass("active");
      }
    });
  }
};

floatInputLabel();