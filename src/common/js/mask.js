const phoneMask = '+7(000)000-00-00';

$(document)
    .ready(() => {
        const $phone = $('.js-mask-phone');
        if ($phone) {
            $phone.mask(phoneMask);
        }
    })
