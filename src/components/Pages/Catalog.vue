<script>
export default {
  data() {
    return {
      categories: [
        {
          title: 'Сабвуферы и аксессуары',
          count: 984,
          price: '11.28',
          image: 'https://via.placeholder.com/150' // Замените на настоящий URL изображения
        },
        {
          title: 'Эстрадная акустика',
          count: 1352,
          price: '4',
          image: 'https://via.placeholder.com/150' // Замените на настоящий URL изображения
        },
        {
          title: 'Автомобильная акустика',
          count: 1210,
          price: '230',
          image: 'https://via.placeholder.com/150' // Замените на настоящий URL изображения
        },
        {
          title: 'Портативная акустика',
          count: 36,
          price: '1250',
          image: 'https://via.placeholder.com/150' // Замените на настоящий URL изображения
        },
        {
          title: 'Готовые решения',
          count: 1,
          price: '8290',
          image: 'https://via.placeholder.com/150' // Замените на настоящий URL изображения
        }
      ]
    }
  }
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center">Динамики</h1>
    <div class="row">
      <div v-for="category in categories" :key="category.title" class="col-md-3 mb-4">
        <div class="card h-100">
          <img :src="category.image" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">{{ category.title }}</h5>
            <p class="card-text">
              <span class="text-danger">({{ category.count }})</span><br>
              от {{ category.price }} ₽
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>