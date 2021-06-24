import Swiper from 'swiper';
import {
    Autoplay
} from 'swiper/js/swiper.esm';


$(document).ready(function () {
    if ($('.JS-picture-slider').length !== 0) {
        $('.JS-picture-slider').each(function() {

            var pictureSlider = new Swiper($(this).find('.swiper-container'), {
                slidesPerView: 1,
                spaceBetween: 0,
                loop: true,
                centeredSlides: true,

                navigation: {
                    nextEl: $(this).find('.swiper-button-next'),
                    prevEl: $(this).find('.swiper-button-prev')
                },
            });
        });
    }
});