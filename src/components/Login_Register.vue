<script>

</script>

<template>
  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 mt-3 text-center  " id="exampleModalToggleLabel">Войти</h1>
<!--          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>-->
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Логин</label>
            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <label for="inputPassword5" class="form-label">Пароль</label>
            <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
            <div id="passwordHelpBlock" class="form-text">
              Ваш пароль должен содержать от 8-20 символов, содержать буквы и цифры, и не содержать пробелов, специальных знаков, или эмодзи.
            </div>
          </div>
          <div class="mb-3">
            <label for="inputPassword5" class="form-label">Подтвердите пароль</label>
            <input type="password" id="inputPassword5" class="form-control">
          </div>
          <div class="mb-3">
            <label for="phoneNumber" class="form-label">Номер телефона</label>
            <input type="tel" class="form-control" id="phoneNumber" v-model="PhoneInput" placeholder="+7 (___) ___-____">
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Open second modal</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Hide this modal and show the first with the button below.
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Back to first</button>
        </div>
      </div>
    </div>
  </div>
  <button class="btn btn-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Войти</button>
</template>

<style scoped>

</style>