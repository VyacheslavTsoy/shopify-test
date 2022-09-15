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
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        breakpoints: {
          475: {
            slidesPerView: 2
          },
          767: {
            slidesPerView: 3,
            spaceBetween: 60
          }
        }
      });
    }

  },

};

export default Products;
