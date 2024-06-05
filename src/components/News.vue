<template>
  <div class="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(card, index) in cards" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="card.imageUrl" class="card-img-top" :alt="'Card ' + (index + 1)">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';

export default {
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
        // Add more cards as needed
      ],
    };
  },
  mounted() {
    this.initSwiper();
  },
  methods: {
    initSwiper() {
      new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: true,
      });
    },
  },
  setup() {
    return {
      modules: [Navigation],
    }
  }
};
</script>

<style scoped>

</style>