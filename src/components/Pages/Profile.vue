<template>
  <div class="container mt-5">
    <h1 class="mb-4">Данные профиля</h1>
    <form>
      <div class="mb-3">
        <label for="nickname" class="form-label">Никнейм</label>
        <input type="text" class="form-control" id="nickname" v-model="profile.nickname">
      </div>
      <div class="mb-3">
        <label for="firstName" class="form-label">Имя</label>
        <input type="text" class="form-control" id="firstName" v-model="profile.firstName">
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Фамилия</label>
        <input type="text" class="form-control" id="lastName" v-model="profile.lastName">
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Телефон</label>
        <input type="text" class="form-control" id="phone" v-model="profile.phone">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Электронная почта</label>
        <input type="email" class="form-control" id="email" v-model="profile.email">
      </div>
      <div class="mb-3">
        <label for="birthDate" class="form-label">Дата рождения</label>
        <input type="date" class="form-control" id="birthDate" v-model="profile.birthDate">
      </div>
      <button type="submit" class="btn btn-outline-dark">Сохранить</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile: {
        nickname: 'Notinmytime',
        firstName: 'Иван',
        lastName: 'Гриценко',
        phone: '+7 978 829-16-70',
        email: 'gritsenko020123@gmail.com',
        birthDate: '2003-01-02'
      }
    };
  }
};
</script>

<style>

</style>