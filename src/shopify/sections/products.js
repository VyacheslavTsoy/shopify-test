import Swiper, { Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/autoplay";

const Products = {
  onLoad() {
    this._init();
  },

  _init() {

    if (window.innerWidth < 768) {
      this.sliderWrapper = this.container.querySelector(".products__list");
      if (!this.sliderWrapper) return;

      this.slider = new Swiper(this.sliderWrapper, {
        slidesPerView: 1,
        spaceBetween: 16,
        autoplay: true,
        modules: [Autoplay, Pagination],
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
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

export default Products;
