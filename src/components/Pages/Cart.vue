<script>
export default {
  data() {
    return {
      items: [
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },
        {
          name: 'Acv ADX-211 BM DSP',
          price: 7777,
          quantity: 1,
          image: 'path/to/image1.jpg'
        },  
      ],
      // bonuses: 156
    }
  },
  computed: {
    totalPrice() {
      return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  },
  methods: {
    incrementQuantity(item) {
      item.quantity++;
    },
    decrementQuantity(item) {
      if (item.quantity > 1) {
        item.quantity--;
      }
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
    clearCart() {
      this.items = [];
    }
  },
  }
</script>

<template>
  <div class="container min-vw-75">
    <h1 class="mt-5 mb-4 text-center">Корзина</h1>
<!--    <button class="btn btn-link" @click="clearCart">Очистить корзину</button>-->
    <table class="table table-light table-hover mt-3">
      <thead>
      <tr>
        <th scope="col">Наименование</th>
        <th scope="col">Скидка</th>
        <th scope="col">Цена</th>
        <th scope="col">Количество</th>
        <th scope="col">Сумма</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item, index) in items" :key="index">
        <td>
          <img :src="item.image" class="img-thumbnail" alt="Item image" width="50" height="50">
          <span>{{ item.name }}</span>
          <span v-if="item.isGift" class="text-danger">ПОДАРОК</span>
        </td>
        <td></td>
        <td>{{ item.price }} ₽</td>
        <td>
          <button class="btn btn-outline-success btn-sm" @click="decrementQuantity(item)">-</button>
          {{ item.quantity }}
          <button class="btn btn-outline-success btn-sm" @click="incrementQuantity(item)">+</button>
        </td>
        <td>{{ item.price * item.quantity }} ₽</td>
        <td>
          <button class="btn btn-success btn-sm" @click="removeItem(index)">Удалить</button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="float-end">
<!--      <p>Бонусы на счёт: {{ bonuses }}</p>-->
      <p><strong>ИТОГО: {{ totalPrice }} ₽</strong></p>
      <button class="btn btn-success">ОФОРМИТЬ ЗАКАЗ</button>
    </div>
  </div>
</template>

<style scoped>
.min-vw-75 {
  min-height: 55vh;
}
</style>