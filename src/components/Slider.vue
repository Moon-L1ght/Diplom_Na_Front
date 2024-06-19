<template>
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
            <p class="card-text">{{ card.price }}</p>
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
        imageUrl: 'https://via.placeholder.com/150',
        title: 'Выигранные комплекты',
        description: 'Выгодные комплекты',
        price: 'от 80 840 ₽'
  },
    {
      imageUrl: 'https://via.placeholder.com/150',
          title: 'Тепло-шумоизоляция по акции',
        description: 'Тепло-шумоизоляция по акции',
        price: 'от 127 ₽'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
          title: 'Адаптеры штатных разъемов по акции',
        description: 'Адаптеры штатных разъемов по акции',
        price: 'от 20 ₽'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
          title: 'Новые со скидкой',
        description: 'Новые со скидкой',
        price: 'от 20 ₽'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
          title: 'Уцененные б/у',
        description: 'Уцененные б/у',
        price: 'от 80 840 ₽'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
          title: 'Выигранные комплекты',
        description: 'Выгодные комплекты',
        price: 'от 80 840 ₽'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
          title: 'Тепло-шумоизоляция по акции',
        description: 'Тепло-шумоизоляция по акции',
        price: 'от 127 ₽'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
          title: 'Адаптеры штатных разъемов по акции',
        description: 'Адаптеры штатных разъемов по акции',
        price: 'от 20 ₽'
    },
    {
      imageUrl: 'https://via.placeholder.com/150',
          title: 'Новые со скидкой',
        description: 'Новые со скидкой',
        price: 'от 20 ₽'
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

<style>
.swiper-button-next:after, .swiper-button-prev:after {
  opacity: 0.5;
  color: #36714b;
}

.swiper-button-next:hover:after, .swiper-button-prev:hover:after  {
  opacity: 1;
}
</style>