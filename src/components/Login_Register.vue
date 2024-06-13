<script>
import axios from "axios";

export default {
  // name: [
  //   'SignUp',
  //   'SignIn'
  // ],
  emits: ['close'],
  data() {
    return {
      inputLogin: '',
      inputPassword: '',
      inputLoginRegistration: '',
      inputPasswordRegistration: '',
      inputPasswordConfirm: '',
      phoneNumber: '',
      error: '',
    }
  },
  // created() {
  //   this.checkSignedIn()
  // },
  // updated() {
  //   this.checkSignedIn()
  // },
  // methods: {
  //   signIn () {
  //     this.$http.plain.post('/signin', { email: this.inputLogin, password: this.inputPassword })
  //         .then(response => this.signInSuccesful(response))
  //         .catch(error => this.signInFailed(error))
  //   },
  //   signInSuccesful (response) {
  //     if (!response.data.csrf) {
  //       this.signInFailed(response)
  //       return
  //     }
  //     localStorage.csrf = response.data.csrf
  //     localStorage.signedIn = true
  //     this.error = ''
  //     this.$router.push('/')
  //   },
  //   signInFailed (error) {
  //     this.error = (error.response && error.response.data && error.response.data.error) || ''
  //     delete localStorage.csrf
  //     delete localStorage.signedIn
  //   },
  //   checkSignedIn () {
  //     if (localStorage.signedIn) {
  //       axios.get('/login')
  //           .then((response) => {
  //             this.inputLogin = response.data.email
  //             this.inputPassword = response.data.password
  //           })
  //           .catch(error => {
  //             console.error('error', error);
  //           })
  //     }
  //   },
  //   signUp () {
  //     this.$http.plain.post('/signup', { email: this.inputLoginRegistration, password: this.inputPasswordRegistration, phoneNumber: this.phoneNumber })
  //         .then(response => this.signUpSuccesful(response))
  //         .catch(error => this.signUpFailed(error))
  //   },
  //   signUpSuccesful (response) {
  //     if (!response.data.csrf) {
  //       this.signUpFailed(response)
  //       return
  //     }
  //     localStorage.csrf = response.data.csrf
  //     localStorage.signedUp = true
  //     this.error = ''
  //     this.$router.push('/')
  //   },
  //   signUpFailed (error) {
  //     this.error = (error.response && error.response.data && error.response.data.error) || ''
  //     delete localStorage.csrf
  //     delete localStorage.signedUp
  //   },
  //   // checkSignedIn () {
  //   //   if (localStorage.signedin) {
  //   //     this.$router.push('/')
  //   //   }
  //   // }



    // onSubmitLogin() {
    //   console.log(this.inputLogin);
    //   console.log(this.inputPassword);
    // },
    // onSubmitRegister() {
    //   console.log(this.inputLoginRegistration);
    //   console.log(this.inputPasswordRegistration);
    //   console.log(this.inputPasswordConfirm);
    //   console.log(this.phoneNumber);
    // },
    // checkForm: function() {
    //   this.errors = {}; // Сброс ошибок
    //
    //   if (this.inputLogin === '') {
    //     this.errors.inputLogin = 'Name is required.';
    //   }
    //   if (this.inputPassword === '') {
    //     this.errors.inputPassword = 'Email is required.';
    //   }
    //
    //   if (!this.errors.inputLogin && !this.errors.inputPassword) {
    //     // Если нет ошибок, выполните действие отправки формы
    //     alert('Form submitted successfully!');
    //   }
    // },
    // clearError: function(field) {
    //   this.errors[field] = '';
    // }
  // },

}
</script>

<template>

  <form @submit.prevent="">
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
              <input type="email" class="form-control input-color" id="inputLogin" v-model="inputLogin" placeholder="mail@example.com">
<!--              <div class="alert alert-danger alert-dismissible fade show mt-2" role="alert">-->
<!--                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>-->
<!--              </div>-->
            </div>
            <div class="mb-3">
  <!--            <label for="inputPassword5" class="form-label">Пароль</label>-->
              <input type="password" id="inputPassword" v-model="inputPassword" class="form-control input-color" aria-describedby="passwordHelpBlock" placeholder="Пароль...">
            </div>
            <div class="text-center">
              Еще не зарегистрированы?
              <a data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" class="link-style">Зарегистрироваться</a>
            </div>
          </div>
          <div class="modal-footer">
            <div id="liveAlertPlaceholder"></div>
            <button class="btn btn-dark w-100" type="submit" value="submit" id="liveAlertBtn">Войти</button>
          </div>
        </div>
      </div>
    </div>
  </form>
  <form @submit.prevent="">
    <div v-bind="$attrs" class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Регистрация</h1>
            <!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
          </div>
          <div class="modal-body">
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