<template>
<!--  <div class="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden swiper-container">-->
<!--    <div class="swiper-wrapper">-->
<!--      <div class="swiper-slide" v-for="(card, index) in cards" :key="index">-->
<!--        <div class="card" style="width: 18rem;">-->
<!--          <img :src="card.imageUrl" class="card-img-top" :alt="'Card ' + (index + 1)">-->
<!--          <div class="card-body">-->
<!--            <h5 class="card-title">{{ card.title }}</h5>-->
<!--            <p class="card-text">{{ card.description }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="swiper-pagination"></div>-->
<!--  </div>-->
  <swiper
      :slides-per-view="3"
      :space-between="10"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
  >
    <swiper-slide v-for="(card, index) in cards" :key="index">
      <div class="slide-content">
        <div class="card" style="width: 18rem;">
          <img :src="card.imageUrl" class="card-img-top" :alt="'Card ' + (index + 1)">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay, Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue";

export default {
  components: {Swiper, SwiperSlide},
  data() {
    return {
      cards: [
        {
          title: 'Card 1',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          title: 'Card 2',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          title: 'Card 3',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          title: 'Card 4',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          title: 'Card 5',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          title: 'Card 6',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          imageUrl: 'https://via.placeholder.com/150',
          title: 'Уцененные б/у',
          description: 'Уцененные б/у',
          price: 'от 80 840 ₽'
        },
        // Add more cards as needed
      ],
    };
  },
  setup() {
    return {
      modules: [Navigation, Autoplay],
    }
  }
};
</script>

<style scoped>

</style>