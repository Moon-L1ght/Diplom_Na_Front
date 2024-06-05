<template>
  <swiper
      :slides-per-view="7"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="slide-content">
        <img :src="slide.image" :alt="slide.title">
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

// import styles bundle
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';


export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slides: [
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        },
        {
          image: 'https://via.placeholder.com/150',
        }
      ]
    };
  },
  setup() {
    return {
      modules: [Navigation]
    };
  },
};
</script>

<style scoped>
.slide-content {
  text-align: center;
}

.image-slider .swiper-button-next:after, .swiper-button-prev:after {
  color: black;
}

</style>