<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.loudsound.ru/upload/mw4w6YsQolD7BYBVBagv/upload/iblock/952/61yia6hemojb9kzpv6zv4p9cpiqid0z6/AurA-Venom_D1.800-Ultra-1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="...">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-6">
        <h1>AurA Venom-D1.800 Ultra</h1>
        <p class="price text-success">11 690 ₽</p>
        <p class="text-muted">Цена указана за: 1 шт</p>
        <div class="mb-3">
          <div v-for="(item, index) in items" :key="index">
            <button class="btn btn-outline-success btn-sm" @click="decrementQuantity(item.quantity)">-</button>
            1
            <button class="btn btn-outline-success btn-sm" @click="incrementQuantity(item.quantity)">+</button>
          </div>
        </div>
        <button class="btn btn-success btn-lg w-100 mb-2" @click="addToCart(item)" id="liveToastBtn">В КОРЗИНУ</button>
        <div class="toast-container position-fixed bottom-0 end-0 p-3">
          <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <strong class="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
              <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
              Hello, world! This is a toast message.
            </div>
          </div>
        </div>

        <p class="text-success">В наличии</p>
        <p>Производитель: AurA (Аура)</p>
      </div>
    </div>
    <div class="mt-5">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active clear-text" id="description-tab" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab" aria-controls="description" aria-selected="true">Описание</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link clear-text" id="specs-tab" data-bs-toggle="tab" data-bs-target="#specs" type="button" role="tab" aria-controls="specs" aria-selected="false">Характеристики</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link clear-text" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" type="button" role="tab" aria-controls="reviews" aria-selected="false">Комментарии</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link clear-text" id="support-tab" data-bs-toggle="tab" data-bs-target="#support" type="button" role="tab" aria-controls="support" aria-selected="false">Поддержка</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
          <span class="mt-2 mx-1">AurA Venom-D1.800 Ultra - 1-канальный усилитель мощности. Ультра-компактный дизайн.</span>
        </div>
        <div class="tab-pane fade" id="specs" role="tabpanel" aria-labelledby="specs-tab">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Основные характеристики</th>
              <th scope="col"></th>
              <th scope="col"></th>

            </tr>
            </thead>
            <tbody>
            <tr>
              <th>Производитель</th>
              <td colspan="2">Aura</td>
            </tr>
            <tr>
              <th scope="row">Модель</th>
              <td colspan="2">Venom-D1.800 Ultra</td>

            </tr>
            </tbody>
          </table>
        </div>
        <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
          <!-- Comments content -->
        </div>
        <div class="tab-pane fade" id="support" role="tabpanel" aria-labelledby="support-tab">
          <!-- Support content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap';
export default {
  name: 'ProductPage',
  data() {
    return {
      items: [
        {
          quantity: 1,
        }
      ],
      cart: []
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
    addToCart(item) {
      const itemInCart = this.cart.find(cartItem => cartItem === item);
      const toastTrigger = document.getElementById('liveToastBtn');
      const toastLiveExample = document.getElementById('liveToast');

      if (!itemInCart) {
        this.cart.push({ ...item });
      } else {
        itemInCart.quantity += item.quantity;
      }
      if (toastTrigger) {
        const toastBootstrap = new bootstrap.Toast(toastLiveExample);
        toastTrigger.addEventListener('click', () => {
          toastBootstrap.show();
        });
      }
    }
  }
};
</script>

<style scoped>
.price {
  font-size: 2rem;
  font-weight: bold;
}
.carousel-inner img {
  height: 400px;
  object-fit: contain;
}

.clear-text {
  text-decoration: none;
  color: #000
}
</style>