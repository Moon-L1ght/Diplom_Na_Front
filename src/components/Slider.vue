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
  components: { Swiper, SwiperSlide },
  data() {
    return {
      cards: [
        {
          imageUrl: 'Img/Box2.webp',
          title: 'Конструкторы (распилы) коробов',
          description: 'Выгодные комплекты',
          price: 'от 1 260 ₽'
        },
        {
          imageUrl: 'Img/Slider.png',
          title: 'Вибро-шумоизоляция по акции',
          description: 'Вибро-шумоизоляция по акции',
          price: 'от 127 ₽'
        },
        {
          imageUrl: 'Img/cabels.webp',
          title: 'Различные кабеля по акции',
          description: 'Адаптеры штатных разъемов по акции',
          price: 'от 15 ₽'
        },
        {
          imageUrl: 'Img/Ysil.webp',
          title: 'Усилители со скидкой',
          description: 'Новые со скидкой',
          price: 'от 6 000 ₽'
        },
        {
          imageUrl: 'Img/Mag.jpg',
          title: 'Магнитолы со скидкой',
          description: '',
          price: 'от 8 000 ₽'
        },
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