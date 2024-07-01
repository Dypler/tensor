import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper1 = new Swiper('#swiper1', {
    slidesPerView: 5,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.my-swiper-button-next',
        prevEl: '.my-swiper-button-prev',
    },
});

const swiper2 = new Swiper('#swiper2', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.my-swiper-button-next-2',
        prevEl: '.my-swiper-button-prev-2',
    },
});