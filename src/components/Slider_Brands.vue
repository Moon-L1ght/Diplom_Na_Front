<template>
  <swiper
      :slides-per-view="6"
      :space-between="0"
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

import {Autoplay, Navigation} from 'swiper/modules';
import {auto} from "@popperjs/core";


export default {
  methods: {
    auto() {
      return auto
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      slides: [
        {
          image: 'Img/Brands/Alpine.webp',
        },
        {
          image: 'Img/Brands/Alphard.webp',
        },
        {
          image: 'Img/Brands/Aria.webp',
        },
        {
          image: 'Img/Brands/Audionova.webp',
        },
        {
          image: 'Img/Brands/Aura.webp',
        },
        {
          image: 'Img/Brands/Braim.webp',
        },
        {
          image: 'Img/Brands/Colt.webp',
        },
        {
          image: 'Img/Brands/DB.webp',
        },
        {
          image: 'Img/Brands/Dego.webp',
        },
        {
          image: 'Img/Brands/Dl.webp',
        },
        {
          image: 'Img/Brands/Edge.webp',
        },
        {
          image: 'Img/Brands/Gladen.webp',
        },
        {
          image: 'Img/Brands/Hannibal.webp',
        },
        {
          image: 'Img/Brands/Incar.webp',
        },
        {
          image: 'Img/Brands/Infinity.webp',
        },
        {
          image: 'Img/Brands/Kicker.webp',
        },
        {
          image: 'Img/Brands/Kicx.webp',
        },
        {
          image: 'Img/Brands/LoudSound.webp',
        },
        {
          image: 'Img/Brands/Machete.webp',
        },
        {
          image: 'Img/Brands/Manmade.webp',
        },
        {
          image: 'Img/Brands/Nakamichi.webp',
        },
        {
          image: 'Img/Brands/Nertz.webp',
        },
        {
          image: 'Img/Brands/Pioneer.webp',
        },
        {
          image: 'Img/Brands/Pride.webp',
        },
        {
          image: 'Img/Brands/Prology.webp',
        },
        {
          image: 'Img/Brands/Steg.webp',
        },
        {
          image: 'Img/Brands/Teyes.webp',
        },
        {
          image: 'Img/Brands/Ural.webp',
        },
      ]
    };
  },
  setup() {
    return {
      modules: [Navigation, Autoplay]
    };
  },
};
</script>

<style scoped>
.mySwiper {
  background-color: #ffffff;
}
.slide-content {
  text-align: center;
}
img {
  height: 50px;
  width: 159px;
}

.image-slider .swiper-button-next:after, .swiper-button-prev:after {
  color: black;
}

</style>