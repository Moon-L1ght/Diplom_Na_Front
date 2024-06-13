<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">О магазине</h1>
    <h2 class="my-3">Магазин автозвука Автомастерская (Магнитолы, сабвуферы, усилители, динамики)</h2>
    <p class="mt-4">
      Мы рады приветствовать Вас на сайте нашей компании. Компания Автомастерская занимается не просто продажей
      автозвука, но и качественным подбором компонентов, установкой, настройкой систем любой сложности. Мы имеем богатый
      опыт в инсталляциях как повседневных, так и для автозвукового спорта. В другие города России и Мира есть возможность
      доставки по средствам транспортных компаний (подробности в разделе "Доставка").
    </p>
    <p>
      В нашем магазине Вы можете выбрать аудио компоненты ведущих мировых и российских производителей. Собрать систему от
      начального до профессионального уровня. У нас вы получите качественную консультацию по подбору и установке, а так
      же сможете прослушать аудио компоненты. Также, при заказе комплектующих, у покупателя есть возможность
      записаться на установку заказанных комплектующих.
    </p>
    <div class="row mt-5">
      <h3>Почему мы?</h3>
      <div class="col-md-3 text-center">
        <img src="..." class="img-fluid" alt="Доставка по России">
        <p>Доставка по России в кратчайшие сроки</p>
        <a href="#" class="btn btn-outline-secondary">Подробнее</a>
      </div>
      <div class="col-md-3 text-center">
        <img src="..." class="img-fluid" alt="Широкий ассортимент продукции">
        <p>Широкий ассортимент продукции</p>
        <a href="#" class="btn btn-outline-secondary">Подробнее</a>
      </div>
      <div class="col-md-3 text-center">
        <img src="..." class="img-fluid" alt="Официальные дилеры">
        <p>Официальные дилеры</p>
        <a href="#" class="btn btn-outline-secondary">Подробнее</a>
      </div>
      <div class="col-md-3 text-center">
        <img src="..." class="img-fluid" alt="YouTube канал">
        <p>Собственный канал об автозвуке на YouTube</p>
        <a href="#" class="btn btn-outline-secondary">Подробнее</a>
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
</style>