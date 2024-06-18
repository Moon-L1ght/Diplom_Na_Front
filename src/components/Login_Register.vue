<script>
import axios from "axios";
import "@/vuex/index.js"
import {mapActions, mapGetters} from "vuex";

export default {
  emits: ['close'],
  data() {
    return {
      inputLogin: '',
      inputPassword: '',
      name: '',
      inputLoginRegistration: '',
      inputPasswordRegistration: '',
      inputPasswordConfirm: '',
      phoneNumber: '',
    }
  },
  mounted() {
    this.$axios.get('login')
      .then((response) => {
        this.inputLogin = "test@test.ru";
        this.inputPassword = "testtest";
      })
        .catch(error => {
          console.error(error);
        });
  },
  computed: {
    ...mapGetters(["getAuthToken", "getUserEmail", "getUserID", "isLoggedIn"]),
  },
  methods: {
    ...mapActions(["registerUser", "loginUser", "logoutUser"]),
    signUp(event) {
      event.preventDefault();
      let data = {
        user: {
          name: this.name,
          email: this.signUpEmail,
          password: this.signUpPassword,
        },
      };
      this.registerUser(data);
      this.resetData();
    },
    signIn(event) {
      event.preventDefault();
      let data = {
        user: {
          email: this.inputLogin,
          password: this.inputPassword
        },
      };
      this.loginUser(data);
      this.resetData();
    },
    resetData() {
      this.signUpEmail = "";
      this.signUpPassword = "";
      this.inputLogin = "";
      this.inputPassword = "";
    },

  }
}
</script>

<template>

  <form @submit="signIn">
    <div v-bind="$attrs" class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Войти</h1>
  <!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
          </div>
          <div class="modal-body">
            <div class="mb-3">
  <!--            <label for="exampleFormControlInput1" class="form-label">Логин</label>-->
              <input type="email" class="form-control input-color" v-model="inputLogin" placeholder="mail@example.com" required />
<!--              <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">-->
<!--                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>-->
<!--              </div>-->
            </div>
            <div class="mb-3">
  <!--            <label for="inputPassword5" class="form-label">Пароль</label>-->
              <input type="password" v-model="inputPassword" class="form-control input-color" aria-describedby="passwordHelpBlock" placeholder="Пароль..." required />
            </div>
            <div class="text-center">
              Еще не зарегистрированы?
              <a data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" class="link-style">Зарегистрироваться</a>
            </div>
          </div>
          <div class="modal-footer">
            <div id="liveAlertPlaceholder"></div>
            <button class="btn btn-dark w-100" type="submit" value="submit" id="liveAlertBtn" data-bs-dismiss="modal">Войти</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  <form @submit.prevent="signUp">
    <div v-bind="$attrs" class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Регистрация</h1>
            <!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="name" class="form-label">Имя</label>
              <input class="form-control input-color" id="name" v-model="name" placeholder="Имя">
            </div>
            <div class="mb-3">
              <label for="inputLoginRegistration" class="form-label">Логин</label>
              <input type="email" class="form-control input-color" id="inputLoginRegistration" v-model="inputLoginRegistration" placeholder="name@example.com">
            </div>
            <div class="mb-3">
              <label for="inputPasswordRegistration" class="form-label">Пароль</label>
              <input type="password" class="form-control input-color" id="inputPasswordRegistration" v-model="inputPasswordRegistration" aria-describedby="passwordHelpBlock">
              <div id="passwordHelpBlock" class="form-text">
                Ваш пароль должен содержать от 8-20 символов, содержать буквы и цифры, и не содержать пробелов, специальных знаков, или эмодзи.
              </div>
            </div>
            <div class="mb-3">
              <label for="inputPasswordConfirm" class="form-label">Подтвердите пароль</label>
              <input type="password" class="form-control input-color" id="inputPasswordConfirm" v-model="inputPasswordConfirm" autocomplete="new-password" spellcheck="false">
            </div>
            <div class="mb-3">
              <label for="phoneNumber" class="form-label">Номер телефона</label>
              <input type="tel" class="form-control input-color" id="phoneNumber" v-model="phoneNumber" placeholder="+7 (___) ___-____">
            </div>
            <div class="text-center">
              Уже зарегистрированы?
              <a data-bs-target="#exampleModalToggle" data-bs-toggle="modal" class="link-style">Войти</a>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-dark w-100" type="submit" value="submit">Зарегистрироваться</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  <button class="btn btn-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Войти</button>
</template>

<style scoped>
.link-style {
  cursor: pointer;
  text-decoration: none;
  color: #005a3c;
}

.link-style:hover {
  color: #00865a;
}

.input-color:focus {
  border-color: #898989;
  box-shadow: 0 0 0 0.25rem rgba(43, 43, 44, 0.25);
}
</style>