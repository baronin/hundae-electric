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
