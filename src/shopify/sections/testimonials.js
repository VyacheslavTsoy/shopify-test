import Swiper, { Autoplay, Pagination, Navigation } from "swiper";
import Rater from "rater-js";

import "swiper/css";
import "swiper/css/autoplay";

const Testimonials = {
  onLoad() {
    this._init();
  },

  _init() {
    this.sliderWrapper = this.container.querySelector(".testimonials__list");

    this.sliderWrapper.querySelectorAll('.testimonials__item-rating').forEach((stars) => {
      const currentStars = new Rater({
        element: stars,
        max: 5,
        rating: +stars.dataset.rating,
        readOnly: true,
        starSize: 35
      })
    })

    if (window.innerWidth < 768) {
      if (!this.sliderWrapper) return;

      this.slider = new Swiper(this.sliderWrapper, {
        slidesPerView: 1,
        spaceBetween: 16,
        autoplay: 4000,
        autoHeight: true,
        loop: true,
        modules: [Autoplay, Pagination, Navigation],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          475: {
            slidesPerView: 2
          },
          767: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 32
          }
        }
      });
    }

  },

};

export default Testimonials;
