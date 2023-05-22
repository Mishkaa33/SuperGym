import Swiper from '../vendor/swiper';

const coachesSlider = document.querySelector('.coaches__content');
const feedbackSlider = document.querySelector('.feedback-swiper');

export const createCoachesSlider = () => {
  if (coachesSlider) {
    (() =>
      new Swiper('.coaches__content', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        centeredSlidesBounds: true,

        // Navigation arrows
        navigation: {
          nextEl: '.coaches-swiper-button-next',
          prevEl: '.coaches-swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      }))();
  }
};

export const createFeedbackSlider = () => {
  if (feedbackSlider) {
    (() =>
      new Swiper('.feedback-swiper', {
        // Optional parameters
        direction: 'horizontal',
        slidesPerView: 1,
        // Navigation arrows
        navigation: {
          nextEl: '.feedback-slider-button-next',
          prevEl: '.feedback-slider-button-prev',
        },
      }))();
  }
};

export const initSliders = () => {
  createFeedbackSlider();
  createCoachesSlider();
};
