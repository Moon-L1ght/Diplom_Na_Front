<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-md-3 list-group list-group-flush d-flex flex-column mb-5">
        <router-link to="/category" class="list-group-item list-group-item-action">
          Динамики
        </router-link>
        <router-link to="/category" class="list-group-item list-group-item-action">
          Мультимедиа
        </router-link>
        <router-link to="/category" class="list-group-item list-group-item-action">
          Вибро-шумоизоляция
        </router-link>
        <router-link to="/category" class="list-group-item list-group-item-action">
          Приборы и датчики
        </router-link>
        <router-link to="/category" class="list-group-item list-group-item-action">
          Кабель и комплектующие
        </router-link>
        <router-link to="/category" class="list-group-item list-group-item-action">
          Усилители и процессоры
        </router-link>
        <router-link to="/category" class="list-group-item list-group-item-action">
          Короба и подиумы
        </router-link>
      </div>
      <div class="col-md-9">
        <div class="slider-Brands">
          <Slider_Banners />
        </div>
        <h2 class="my-4">Спецпредложения</h2>
        <div class="">
          <Slider />
        </div>

      </div>
      <div class="col-md-12 mt-5">
        <div class="d-flex justify-content-center align-content-center slider-brands">
          <Slider_Brands class="my-3" />
        </div>
        <div class="mt-5">
          <h2 class="mb-4">Новости</h2>
          <News />
        </div>
        <div class="mt-4 text-center">
          <h2>Информация о сайте/компании</h2>
        </div>
        <div class="mt-4 fw-light font-size">
          В нашем интернет-магазине Автомастерская вы можете найти различные сборки аудиосистем, получить советы по
          настройке, послушать на специальном стенде, а также приобрести лучшие компоненты для музыки в ваш автомобиль.
          Сабвуферы, динамики, усилители, магнитолы, кабели, корпуса для сабвуферов по вашим размерам, наконечники и
          дистрибьюторы питания, защитные сетки (гриль) — все это ждет вас в магазине автозвука №1 Автомастерская.
        </div>
        <div class="mt-4 fw-light font-size">
          У нас огромный выбор аудиокомпонентов от таких производителей, как Alphard (Альфард), Pride (Прайд), Hannibal
          (Ганнибал), Audio Extreme (АудиоЭкстрим), Deaf Bonce (Деаф Бонце), Avatar (Аватар), Kicx (Кикс), Ground Zero
          (Граунд Зиро), Pioneer (Пионер), Alpine (Альпайн), ACV, SWAT (Сват), EDGE (Эдж), Sound Stream (Саунд Стрим),
          Mosconi (Москони), Gladen (Гладен), Momo (Момо), Kenwood (Кенвуд), JVC, JBL, Infinity, Sundown Audio (Сандаун
          Аудио), Skar (Скар), Kingz Audio (Кингз Аудио), Shumoff (Шумофф), STP (СТП), MTX (МТХ), Focal (Фокал), Faital
          Pro (Файтал), Audison (Аудисон), Tchernov Audio (Чернов Аудио), DAXX (Дакс), Audio Nova (Аудио Нова), Dynamic
          State (Динамик Стейт), Cadence (Каденс), Dragster (Драгстер), Ural (Урал), Aria (Ария).
        </div>
        <div class="mt-4 fw-light font-size">
          Создайте свою аудиосистему вместе с Автомастерская! Живи громко! О том, как купить, оплатить и возможные
          способы доставки сабвуферов, магнитол, кабелей и других компонентов автоакустики, вы можете узнать в разделе
          "Как купить".
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Slider from '../Slider.vue'
import Slider_Brands from '../Slider_Brands.vue';
import News from '../News.vue';
import Slider_Banners from "@/components/Slider_Banners.vue";

export default {
  components: {
    Slider_Banners,
    Slider,
    Slider_Brands,
    News,
  },
  name: 'Content',
  data() {
    return {
      items: ['123123123', '123123123', '123123123', '123123123', '123123123'],
    };
  },
}
</script>

<style scoped>
.slider-brands {
  background-color: #ffffff
}
.carousel-inner {
  height: 300px;
}

.list-group {
  max-height: none; /* Ограничиваем максимальную высоту */
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
}

.list-group-item {
  min-height: 45px;
}

.clear-dots {
  list-style-type: none;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.font-size {
  font-family: Arial;
  color: #969696;
  font-size: small;
}
</style>