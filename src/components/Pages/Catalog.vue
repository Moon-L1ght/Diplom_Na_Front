<script>
export default {
  data() {
    return {
      categories: [
        {
          title: 'Динамики',
          count: 984,
          image: 'Img/speakers2.webp' // Замените на настоящий URL изображения
        },
        {
          title: 'Мультимедиа',
          count: 1352,
          image: 'Img/magnitoli.webp' // Замените на настоящий URL изображения
        },
        {
          title: 'Вибро-шумоизоляция',
          count: 1210,
          image: 'Img/vibro-noiseisolation.webp' // Замените на настоящий URL изображения
        },
        {
          title: 'Приборы и датчики',
          count: 36,
          image: 'Img/devices.webp' // Замените на настоящий URL изображения
        },
        {
          title: 'Кабель и комплектующие',
          count: 1,
          image: 'Img/cabels.webp' // Замените на настоящий URL изображения
        },
        {
          title: 'Усилители и процессоры',
          count: 1,
          image: 'Img/processor.webp' // Замените на настоящий URL изображения
        },
        {
          title: 'Короба и подиумы',
          count: 1,
          image: 'Img/box.webp' // Замените на настоящий URL изображения
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center mb-5">Каталог</h1>
    <div class="row">
      <div v-for="category in categories" :key="category.title" class="col-md-3 mb-4">
        <router-link to="/category" class="text-style">
          <div class="card h-100">
            <img :src="category.image" class="card-img-top img" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ category.title }}</h5>
              <p class="card-text">
                <span class="text-success">({{ category.count }})</span>
              </p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-style {
  text-decoration: none;
}

.img {

 height: 100%;
}
</style>