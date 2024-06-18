<template>
<!--  <div class="fixed-top">-->
    <header class="first-header">
      <div class="container">
        <div class="row">
          <div class="col-2">
          </div>
          <div class="col-2 text-center fw-semibold pb-1">
            Работаем с 10:00 до 20:00
          </div>
          <div class="col-1">
          </div>
          <div class="col-2 text-center fw-semibold pb-1">
            +7 (978) 123-45-67
          </div>
          <div class="col-1">
          </div>
          <div class="col-2 text-center fw-semibold pb-1">
            +7 (123) 456-78-90
          </div>
        </div>
      </div>
    </header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary ">
    <div class="container">
      <a class="navbar-brand col-2" href="/"><img src="../../Img/Logo.png" alt="Logo" class="logo"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex me-auto w-auto w-min" role="search">
          <input class="form-control me-2 search-color" type="search" placeholder="Поиск..." aria-label="Search">
          <button class="btn btn-outline-dark" type="submit">Поиск</button>
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item "><router-link to="/catalog" class="nav-link text-black nav-text fw-semibold">Каталог</router-link></li>
          <li class="nav-item "><router-link to="/services" class="nav-link text-black nav-text fw-semibold">Услуги</router-link></li>
          <li class="nav-item "><router-link to="/about" class="nav-link text-black nav-text fw-semibold">О нас</router-link></li>
        </ul>
        <div class="nav justify-content-end">
          <button class="btn btn-dark me-2"><router-link to="/cart" class="text-reset">Корзина</router-link></button>
          <div class="nav justify-content-end" >
            <li class="navbar-nav nav-item dropdown" v-if="isLoggedIn">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../../Img/user.svg" alt="Logo" class="dropdown-item-icon" />
              </a>
              <ul class="dropdown-menu">
                <li><router-link to="/profile" class="dropdown-item" >Личный кабинет</router-link></li>
                <li><a class="dropdown-item" href="#">Создание товара</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" @click="logoutUser">Выход</a></li>
              </ul>
            </li>
            <Login_form v-else/>
          </div>
        </div>
      </div>
    </div>
    </nav>
<!--  </div>-->
</template>

<script>
import Login_form from "@/components/Login_Register.vue";
// import axios from "axios";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Header_auth',
  components: {
    Login_form,
  },
  computed: {
    ...mapGetters(["isLoggedIn"]),

  },
  methods: {
    ...mapActions(["logoutUser"]),
  }
  // async created() {
  //   const response = await axios.get('user', {
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //     }
  //   });
  //   this.$store.dispatch('user', response.data);
  // },
  // computed: {
  //   ...mapGetters(['user'])
  // }
}
</script>

<style scoped>
.logo {
  height: 50px;
}

.first-header {
  background: #c2c2c2;
}

.w-min {
  min-width: 25vw;
}

.search-color:focus {
  border-color: #898989;
  box-shadow: 0 0 0 0.25rem rgba(43, 43, 44, 0.25);
}

.text-reset {
  text-decoration: none;
  color: #ffffff;
}


</style>