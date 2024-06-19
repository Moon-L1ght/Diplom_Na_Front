<template>
  <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="paginationOptions"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides">
      <img :src="slide.image" :alt="'slide' + (index + 1)">
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import {Autoplay, Navigation, Pagination} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      slides: [
        {
          image: 'Img/Banner.png',
        },
        {
          image: 'Img/Brands/Alphard.webp',
        },
        {
          image: 'Img/Brands/Alpine.webp',
        },
        {
          image: 'Img/Brands/Alphard.webp',
        },
        {
          image: 'Img/Brands/Alpine.webp',
        },
        {
          image: 'Img/Brands/Alphard.webp',
        }
      ]
    }
  },
  setup() {
    const paginationOptions = {
      clickable: true,
      renderBullet: (index, className) => {
        return '<span class="' + className + ' custom-bullet"></span>';
      },
    };

    return {
      modules: [Pagination, Navigation, Autoplay],
      paginationOptions,
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Custom pagination styles */
:global(.swiper-pagination) {
  bottom: 10px !important;
  display: flex;
  justify-content: center;
}
:global(.custom-bullet) {
  width: 30px;
  height: 4px;
  background-color: #888;
  margin: 0 5px;
  border-radius: 2px;
  display: inline-block;
}
:global(.swiper-pagination-bullet-active.custom-bullet) {
  background-color: #333;
}
</style>
