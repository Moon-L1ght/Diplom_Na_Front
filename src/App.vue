<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<!--POST /login - Вход пользователя-->
<!--DELETE /logout - Выход пользователяPOST-->
<!--POST /signup - Регистрация пользователя-->
<!--GET /products - Получить список всех продуктов-->
<!--GET /products/by_category - Получить список продуктов по категории(/products/products?category=Динамики)-->
<!--POST /products - Создать новый продукт-->
<!--GET /products/:id - Получить информацию о конкретном продукте-->
<!--GET /users/:user_id/cart - Получить текущую корзину пользователя-->
<!--POST /users/:user_id/cart/add_item - Добавить товар в корзину пользователя-->
<!--DELETE /users/:user_id/cart/remove_item/:product_id - Удалить товар из корзины пользователя-->
<!--DELETE /users/:user_id/cart/clear - Очистить корзину пользователя-->

<style>
#app {
  background: #dddddd;
}
</style>