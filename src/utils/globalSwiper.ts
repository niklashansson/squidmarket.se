import 'swiper/css';

import { Swiper } from 'swiper';
import { Navigation } from 'swiper/modules';

export const globalSwiper = function () {
  const listElements = Array.from(document.querySelectorAll('[swiper="component"]'));

  if (listElements.length === 0) return;

  // Make each instance unique
  const swiperInstances = listElements.map((component, i) => {
    const instance = component.querySelector('.swiper');
    if (!instance) return;
    instance.classList.add(`is-swiper-${i + 1}`);

    const btnNext = component.querySelector('.swiper-next');
    const btnPrev = component.querySelector('.swiper-prev');

    return {
      instance: instance,
      btnNext: btnNext,
      btnPrev: btnPrev,
    };
  });

  // Create swiper
  swiperInstances.forEach((component) => {
    newSwiper(component);
  });

  function newSwiper(component) {
    const options = component.instance.getAttribute('swiper-options') || 1;

    console.log(component);

    const optionVariants = [
      {
        modules: [Navigation],
        speed: 800,
        loop: false,
        grabCursor: true,
        spaceBetween: 24,
        centeredSlides: false,
        slidesPerView: 4,
        preventClicksPropagation: false,
        navigation: {
          nextEl: component.btnNext,
          prevEl: component.btnPrev,
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1.125,
            spaceBetween: 24,
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
          // when window width is >= 992px
          992: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
      },
    ];

    const swiper = new Swiper(component.instance, optionVariants[options - 1]);

    swiper.init();
  }
};
