<template>
  <main class="container my-5">
    <div class="row">
      <div class="col-md-3 list-group list-group-flush d-flex flex-column">
        <a href="#" class="list-group-item list-group-item-action">
          The current link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A second link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A third link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A fourth link item
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          A disabled link item
        </a>
      </div>
      <div class="col-md-9">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <ol class="carousel-indicators clear-dots my-auto">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" style="background-color: #000000"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" style="background-color: #3c3c3c"></li>
          </ol>
          <div class="carousel-inner" style="height: 253px;">
            <div class="carousel-item active">
              <div class="d-block w-100" style="height: 230px; background-color: #ccc;"><img src="../../../Img/Logo.png" alt="Logo" class="img-fluid"></div>
            </div>
            <div class="carousel-item">
              <div class="d-block w-100" style="height: 230px; background-color: #ccc;">КОНТЕНТ</div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </a>
        </div>
        <h2 class="my-4">Спецпредложения</h2>
        <div class="">
          <Slider />
        </div>

      </div>
      <div class="col-md-12">
        <div class="mt-4">
          <Slider_Brands />
        </div>
        <div class="mt-4">
          <h2>Новости</h2>
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

export default {
  components: {
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
.carousel-inner {
  height: 300px;
}

.list-group {
  max-height: none; /* Ограничиваем максимальную высоту */
  overflow-y: auto; /* Добавляем вертикальную прокрутку */
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