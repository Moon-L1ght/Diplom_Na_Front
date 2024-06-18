<!--<template>
  <div class="swiper mySwiper swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden swiper-container" >
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(card, index) in cards" :key="index">
        <div class="card" style="width: 18rem;">
          <img :src="card.imageUrl" class="card-img-top" :alt="'Card ' + (index + 1)">
          <div class="card-body">
            <h5 class="card-title">{{ card.title }}</h5>
            <p class="card-text">{{ card.description }}</p>
            <p class="card-text">{{ card.price }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import {Navigation} from 'swiper/modules';
import {SwiperSlide} from "swiper/vue";

export default {
  components: {SwiperSlide},
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

</style>-->
<template>
  <swiper
    :slides-per-page="3"
    :space-between="30"
    :loop="true"
    :navigation="true"
    :modules="modules"
    class="mySwiper"
  >
      <swiper-slide v-for="(card, index) in cards" :key="index">
        <div class="slide-content">
          <div class="card" style="width: 18rem; height: 100%;">
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
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from "swiper/modules";
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
      ]
    }
  },
  setup() {
    return {
      modules: [Navigation],
    }
  },
};

/*new Swiper('.swiper', {
  loop: true,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next'
  },
  autoplay: {
    delay: 3000,
  }
});*/
</script>

<style scoped>
.slide-content {
  text-align: center;
}

.image-slider .swiper-button-next:after, .swiper-button-prev:after {
  color: black;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<style>
.swiper-button-next:after, .swiper-button-prev:after {
  background-color: #aaaaaa;
  color: #36714b;
}
</style>