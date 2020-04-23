const formValidationOptions = {
    rules: {
        name: {
            required: true,
            minlength: 2,
            maxlength: 16,
        },
        phone: {
            required: true,
            minlength: 16,
            maxlength: 16,
        },
        email: {
            required: true,
            email: "Поле обязательно для заполнения",
        }
    },
    messages: {
        name: {
            required: 'Поле обязательно для заполнения',
            minlength: 'Имя должно содержать более одной буквы',
            maxlength: 'Имя должно содержать не более 16 букв',
        },
        phone: {
            required: 'Поле обязательно для заполнения',
            minlength: 'Номер должен содержать не менее 11 цифр',
            maxlength: 'Номер должен содержать не более 11 цифр',
            number: 'Введите только номер телефона: +7(000) 000 00 00',
        },
        email: {
            required: "Поле обязательно для заполнения",
            email: "Поле обязательно для заполнения",
        }
    },
};

$(document)
    .ready(() => {
        const $form = $('.form');
        if ($form) {
            $('.js-clear').click(() => {
                $('input').val('');
            })
            $form.validate(formValidationOptions);
        }
    })
