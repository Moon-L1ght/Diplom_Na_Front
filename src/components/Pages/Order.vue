<!-- src/components/CheckoutPage.vue -->
<template>
  <div class="container mt-5">
    <h1 class="mb-4">Оформление заказа</h1>

    <!-- Customer Information Section -->
    <div class="mb-4">
      <h2>1. Данные покупателя</h2>
      <div class="mb-3">
        <label for="location" class="form-label">Местоположение доставки</label>
        <input type="text" id="location" class="form-control" placeholder="Севастополь">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Электронная почта</label>
        <input type="email" id="email" class="form-control" placeholder="example@mail.ru">
      </div>
      <div class="mb-3">
        <label for="phone" class="form-label">Введите телефон</label>
        <div class="input-group">
          <span class="input-group-text">+7</span>
          <input type="text" id="phone" class="form-control" placeholder="(XXX) XXX-XX-XX">
        </div>
      </div>
      <button class="btn btn-success mb-3">ПОЛУЧИТЬ ЗВОНОК</button>
    </div>

    <!-- Delivery Method Section -->
    <div class="mb-4">
      <h2>2. Выберите способ получения в г. Севастополь</h2>
      <div class="btn-group mb-3" role="group">
        <input type="radio" class="btn-check" name="deliveryMethod" id="courier" autocomplete="off" checked>
        <label class="btn btn-outline-dark" for="courier">Самовывоз</label>

        <input type="radio" class="btn-check" name="deliveryMethod" id="pickup" autocomplete="off">
        <label class="btn btn-outline-dark" for="pickup">Пункт выдачи<br>от 264 ₽<br>11-13 дней</label>
      </div>
      <p>Пожалуйста, выберите способ доставки. Вы сможете выбрать транспортную компанию и точку для доставки.</p>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
          <tr>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td><input type="text" class="form-control" placeholder="Фамилия"></td>
            <td><input type="text" class="form-control" placeholder="Имя"></td>
            <td><input type="text" class="form-control" placeholder="Отчество"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Payment Method Section -->
    <div class="mb-4">
      <h2>3. Выберите способ оплаты</h2>
      <div class="btn-group mb-3" role="group">
        <input type="radio" class="btn-check" name="paymentMethod" id="online" autocomplete="off" checked>
        <label class="btn btn-outline-primary" for="online">Онлайн</label>

        <input type="radio" class="btn-check" name="paymentMethod" id="partial" autocomplete="off">
        <label class="btn btn-outline-primary" for="partial">Частями</label>

        <input type="radio" class="btn-check" name="paymentMethod" id="credit" autocomplete="off">
        <label class="btn btn-outline-primary" for="credit">В кредит</label>
      </div>
      <div class="alert alert-secondary">
        <ul>
          <li>СБП (Система быстрых платежей) по QR</li>
          <li>Онлайн банковскими картами (в т.ч. и кредитными)</li>
          <li>Счет на организацию</li>
        </ul>
      </div>
    </div>

    <!-- Order Summary Section -->
    <div class="bg-light p-3">
      <h2>3 товара в заказе</h2>
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between">
          <div>
            <h6 class="my-0">Aspect Audio WLS-131TW 40м</h6>
            <small class="text-muted">1 шт.</small>
          </div>
          <span class="text-muted">729 ₽</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <div>
            <h6 class="my-0">LOUD SOUND LS Басик (книжка колода) ароматизатор</h6>
            <small class="text-muted">1 шт.</small>
          </div>
          <span class="text-muted">101 ₽</span>
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <div>
            <h6 class="my-0">LOUD SOUND 25см обечайка наклейка</h6>
            <small class="text-muted">1 шт.</small>
          </div>
          <span class="text-muted">186 ₽</span>
        </li>
      </ul>
      <div class="d-flex justify-content-between mb-3">
        <span>Скидка:</span>
        <strong>102 ₽</strong>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span>Бонусы на счёт:</span>
        <strong>15</strong>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <span>Доставка:</span>
        <strong>264 ₽</strong>
      </div>
      <div class="d-flex justify-content-between">
        <span>ИТОГО К ОПЛАТЕ:</span>
        <strong>1 016 ₽</strong>
      </div>
      <button class="btn btn-danger w-100 mt-3">ОТПРАВИТЬ ЗАКАЗ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckoutPage',
};
</script>

<style scoped>
h1, h2 {
  color: black;
}
.form-label, .form-control, .btn, .btn-check, .alert, .table, .list-group-item, .text-muted, .text-light, .bg-light {
  color: black;
}
.btn-outline-primary, .btn-outline-primary:checked + .btn-outline-primary {
  border-color: #ccc;
  color: black;
}
.btn-outline-primary:hover {
  background-color: #444444; /* Adjust this color based on the desired theme */
}
</style>