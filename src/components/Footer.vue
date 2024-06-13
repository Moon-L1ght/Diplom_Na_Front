<template>
  <footer class="backcol py-4 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h5>Название сайта</h5>
        </div>
        <div class="col-md-3">
          <h5>Ссылки</h5>
          <ul class="nav flex-column">
            <li class="nav-item"><router-link to="/catalog" class="nav-link text-black nav-text fw-semibold p-0">Каталог</router-link></li>
            <li class="nav-item"><router-link to="/services" class="nav-link text-black nav-text fw-semibold p-0">Услуги</router-link></li>
            <li class="nav-item"><router-link to="/about" class="nav-link text-black nav-text fw-semibold p-0">О нас</router-link></li>
          </ul>
        </div>
        <div class="col-md-3">

        </div>
      </div>
      <div class="row mt-4">
        <div class="col text-center">
          <p>© 2024 Название сайта. Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>

</script>

<style scoped>
.backcol {
  background: #aaaaaa;
}
</style>