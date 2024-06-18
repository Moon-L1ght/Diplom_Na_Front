<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">О магазине</h1>
    <h2 class="my-3">Магазин автозвука Автомастерская (Магнитолы, сабвуферы, усилители, динамики)</h2>
    <p class="mt-4">
      Мы рады приветствовать Вас на сайте нашей интернет-автомастерской. Автомастерская занимается не просто продажей
      автозвука, но и качественным подбором компонентов, установкой, настройкой систем любой сложности. Мы имеем богатый
      опыт в инсталляциях как повседневных, так и для автозвукового спорта. В другие города России есть возможность
      доставки по средствам транспортных компаний.
    </p>
    <p>
      В нашем магазине Вы можете выбрать аудио компоненты ведущих мировых и российских производителей. Собрать систему от
      начального до профессионального уровня. У нас вы получите качественную консультацию по подбору и установке, а так
      же сможете прослушать аудио компоненты. Также, при заказе комплектующих, у покупателя есть возможность
      записаться на установку заказанных комплектующих.
    </p>
    <div class="row my-5">
      <h3 class="mb-5">Почему мы?</h3>
      <div class="col-md-3 text-center">
        <img src="../../../Img/delivery.gif" class="img-fluid mb-3" alt="Доставка по России">
        <p>Доставка по России в кратчайшие сроки</p>
        <button href="#" class="btn btn-outline-secondary"><router-link to="" class="text-reset">Подробнее</router-link></button>
      </div>
      <div class="col-md-3 text-center">
        <img src="../../../Img/speakers.png" class="img-fluid mb-3" alt="Широкий ассортимент продукции">
        <p>Широкий ассортимент продукции</p>
        <button href="#" class="btn btn-outline-secondary mt"><router-link to="/catalog" class="text-reset">Подробнее</router-link></button>
      </div>
      <div class="col-md-3 text-center">
        <img src="../../../Img/hand_shake.png" class="img-fluid mb-3" alt="Официальные дилеры">
        <p>Официальные дилеры</p>
        <button href="#" class="btn btn-outline-secondary mt"><router-link to="" class="text-reset">Подробнее</router-link></button>
      </div>
      <div class="col-md-3 text-center">
        <img src="../../../Img/certification_prod.png" class="img-fluid mb-3" alt="Сертифицированная продукция">
        <p>Сертифицированная продукция</p>
        <button href="#" class="btn btn-outline-secondary mt"><router-link to="" class="text-reset">Подробнее</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutStore',
};
</script>

<style scoped>
img {
  min-width: 200px;
  min-height: 200px;
  max-width: 200px;
  max-height: 200px;
}

.text-center {
  text-align: center;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

.mt-5 {
  margin-top: 3rem;
}

.btn-outline-secondary {
  margin-top: 10px;
}

.text-reset {
  text-decoration: none;
  color: #6e757c;
}

.mt {
  margin-top: 34px;
}
</style>