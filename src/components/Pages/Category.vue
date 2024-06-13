<template>
  <div class="container">
    <div class="row mt-3">
      <!-- Filters Section -->
      <div class="col-md-3 margin-top mb-3">
        <div class="accordion" id="filterAccordion">
          <div class="accordion-item" >
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button shadow-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Цена
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#filterAccordion">
              <div class="accordion-body">
<!--                <input type="range" class="form-range" id="priceRange" min="0" :max="maxPrice">-->
<!--                <div class="d-flex justify-content-between">-->
<!--                  <span>0</span>-->
<!--                  <span>{{ maxPrice }}</span>-->
<!--                </div>-->
                <Slider_price
                    :max="700"
                    v-model:min-value="sliderMin"
                    v-model:max-value="sliderMax"
                />
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed shadow-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Наличие в магазине
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#filterAccordion">
              <div class="accordion-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="inStock">
                  <label class="form-check-label" for="inStock">
                    В наличии
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="preOrder">
                  <label class="form-check-label" for="preOrder">
                    Под заказ
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="outOfStock">
                  <label class="form-check-label" for="outOfStock">
                    Нет в наличии
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button class="accordion-button collapsed shadow-color" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Производитель
              </button>
            </h2>
            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#filterAccordion">
              <div class="accordion-body">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="manufacturer1">
                  <label class="form-check-label" for="manufacturer1">
                    Производитель 1
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="manufacturer2">
                  <label class="form-check-label" for="manufacturer2">
                    Производитель 2
                  </label>
                </div>
              </div>
            </div>
          </div>
          <!-- Add more filters as needed -->
        </div>
      </div>

      <!-- Product List Section -->
      <div class="col-md-9">
        <div class="d-flex justify-content-end mb-3">
          <select class="form-select w-auto shadow-color" v-model="sortOrder">
            <option value="ascending">По возрастанию цены</option>
            <option value="descending">По убыванию цены</option>
          </select>
        </div>
        <div class="list-group">
          <div v-for="product in sortedProducts" :key="product.id" class="list-group-item d-flex justify-content-between align-items-center">
            <div class="d-flex align-items-center">
              <img :src="product.image" alt="Картинка" class="img-thumbnail me-3" style="width: 100px; height: 100px;">
              <div>
                <h5 class="mb-1">{{ product.name }}</h5>
                <p class="mb-1">{{ product.description }}</p>
                <small :class="{'text-success': product.status === 'inStock', 'text-danger': product.status === 'outOfStock', 'text-warning': product.status === 'preOrder'}">
                  {{ product.statusText }}
                </small>
              </div>
            </div>
            <div class="text-end">
              <h5 class="fw-semibold">{{ product.price }} ₽</h5>
              <button class="btn btn-dark" :disabled="product.status === 'outOfStock'">В корзину</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Category Information Section -->
    <div class="mt-4 fw-light font-size">
<!--      написать текст в каждую категорию и получать с бека  -->
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu imperdiet
          sem. Nam accumsan leo at iaculis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis justo
          ante, viverra vitae lectus sit amet, luctus posuere eros. Aliquam nulla sem, eleifend ut ultricies molestie,
          blandit sed nulla. Sed a laoreet tortor, quis condimentum felis. Ut nibh est, blandit eget augue ac, rhoncus
          tincidunt turpis. Duis feugiat turpis nec mauris vehicula sodales. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae; Vivamus egestas, sapien ac fringilla semper, justo sem lacinia neque,
          quis tincidunt quam ipsum vel elit. Nunc sodales nisl vel scelerisque porttitor. Nullam convallis neque tellus,
          nec pellentesque metus rhoncus sed.
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Slider_price from "@/components/Slider_price.vue";

const sliderMin = ref(50);
const sliderMax = ref(80);

export default {
  components: {Slider_price},
  data() {
    return {
      components: Slider_price,
      sortOrder: 'ascending',
      products: [
        {
          id: 1,
          image: 'https://via.placeholder.com/150',
          name: 'Название товара',
          description: 'небольшое описание',
          price: 123,
          status: 'inStock',
          statusText: 'В наличии'
        },
        {
          id: 2,
          image: 'https://via.placeholder.com/150',
          name: 'Название товара',
          description: 'небольшое описание',
          price: 1234,
          status: 'outOfStock',
          statusText: 'Нет в наличии'
        },
        {
          id: 3,
          image: 'https://via.placeholder.com/150',
          name: 'Название товара',
          description: 'небольшое описание',
          price: 1234567,
          status: 'preOrder',
          statusText: 'Под заказ'
        },
        {
          id: 4,
          image: 'https://via.placeholder.com/150',
          name: 'Название товара',
          description: 'небольшое описание',
          price: 1245,
          status: 'inStock',
          statusText: 'В наличии'
        }
      ]
    };
  },
  computed: {
    sortedProducts() {
      return this.products.sort((a, b) => {
        if (this.sortOrder === 'ascending') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },
    maxPrice() {
      return Math.max(...this.products.map(product => product.price));
    }
  },
};
</script>

<style scoped>
.accordion-button:not(.collapsed) {
  color: #000;
  background-color: #f8f9fa;
}

.font-size {
  font-family: Arial;
  color: #969696;
  font-size: small;
}

.shadow-color:focus {
  border-color: #898989;
  box-shadow: 0 0 0 0.25rem rgba(43, 43, 44, 0.25);
}

.margin-top {
  margin-top: 54px;
}
</style>
