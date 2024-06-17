<script>
export default {
  data() {
    return {
      currentService: 1,
      services: [
        {
          id: 1,
          name: 'Шумоизоляция автомобиля',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu imperdiet\n' +
              '      sem. Nam accumsan leo at iaculis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis justo\n' +
              '      ante, viverra vitae lectus sit amet, luctus posuere eros. Aliquam nulla sem, eleifend ut ultricies molestie,\n' +
              '      blandit sed nulla. Sed a laoreet tortor, quis condimentum felis. Ut nibh est, blandit eget augue ac, rhoncus\n' +
              '      tincidunt turpis. Duis feugiat turpis nec mauris vehicula sodales. Vestibulum ante ipsum primis in faucibus orci\n' +
              '      luctus et ultrices posuere cubilia curae; Vivamus egestas, sapien ac fringilla semper, justo sem lacinia neque,\n' +
              '      quis tincidunt quam ipsum vel elit. Nunc sodales nisl vel scelerisque porttitor. Nullam convallis neque tellus,\n' +
              '      nec pellentesque metus rhoncus sed.'
        },
        {
          id: 2,
          name: 'Установка автозвука',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu imperdiet\n' +
              '      sem. Nam accumsan leo at iaculis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis justo\n' +
              '      ante, viverra vitae lectus sit amet, luctus posuere eros. Aliquam nulla sem, eleifend ut ultricies molestie,\n' +
              '      blandit sed nulla. Sed a laoreet tortor, quis condimentum felis. Ut nibh est, blandit eget augue ac, rhoncus\n' +
              '      tincidunt turpis. Duis feugiat turpis nec mauris vehicula sodales. Vestibulum ante ipsum primis in faucibus orci\n' +
              '      luctus et ultrices posuere cubilia curae; Vivamus egestas, sapien ac fringilla semper, justo sem lacinia neque,\n' +
              '      quis tincidunt quam ipsum vel elit. Nunc sodales nisl vel scelerisque porttitor. Nullam convallis neque tellus,\n' +
              '      nec pellentesque metus rhoncus sed.'
        },
        {
          id: 3,
          name: 'Установка автосигнализации',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu imperdiet\n' +
              '      sem. Nam accumsan leo at iaculis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis justo\n' +
              '      ante, viverra vitae lectus sit amet, luctus posuere eros. Aliquam nulla sem, eleifend ut ultricies molestie,\n' +
              '      blandit sed nulla. Sed a laoreet tortor, quis condimentum felis. Ut nibh est, blandit eget augue ac, rhoncus\n' +
              '      tincidunt turpis. Duis feugiat turpis nec mauris vehicula sodales. Vestibulum ante ipsum primis in faucibus orci\n' +
              '      luctus et ultrices posuere cubilia curae; Vivamus egestas, sapien ac fringilla semper, justo sem lacinia neque,\n' +
              '      quis tincidunt quam ipsum vel elit. Nunc sodales nisl vel scelerisque porttitor. Nullam convallis neque tellus,\n' +
              '      nec pellentesque metus rhoncus sed.'
        },
        {
          id: 4,
          name: 'Изготовление подиумов',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu imperdiet\n' +
              '      sem. Nam accumsan leo at iaculis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis justo\n' +
              '      ante, viverra vitae lectus sit amet, luctus posuere eros. Aliquam nulla sem, eleifend ut ultricies molestie,\n' +
              '      blandit sed nulla. Sed a laoreet tortor, quis condimentum felis. Ut nibh est, blandit eget augue ac, rhoncus\n' +
              '      tincidunt turpis. Duis feugiat turpis nec mauris vehicula sodales. Vestibulum ante ipsum primis in faucibus orci\n' +
              '      luctus et ultrices posuere cubilia curae; Vivamus egestas, sapien ac fringilla semper, justo sem lacinia neque,\n' +
              '      quis tincidunt quam ipsum vel elit. Nunc sodales nisl vel scelerisque porttitor. Nullam convallis neque tellus,\n' +
              '      nec pellentesque metus rhoncus sed.'
        },
        {
          id: 5,
          name: 'Изготовление дверных карт',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu imperdiet\n' +
              '      sem. Nam accumsan leo at iaculis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis justo\n' +
              '      ante, viverra vitae lectus sit amet, luctus posuere eros. Aliquam nulla sem, eleifend ut ultricies molestie,\n' +
              '      blandit sed nulla. Sed a laoreet tortor, quis condimentum felis. Ut nibh est, blandit eget augue ac, rhoncus\n' +
              '      tincidunt turpis. Duis feugiat turpis nec mauris vehicula sodales. Vestibulum ante ipsum primis in faucibus orci\n' +
              '      luctus et ultrices posuere cubilia curae; Vivamus egestas, sapien ac fringilla semper, justo sem lacinia neque,\n' +
              '      quis tincidunt quam ipsum vel elit. Nunc sodales nisl vel scelerisque porttitor. Nullam convallis neque tellus,\n' +
              '      nec pellentesque metus rhoncus sed.'
        },
        {
          id: 6,
          name: 'Изготовление коробов стелс',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu imperdiet\n' +
              '      sem. Nam accumsan leo at iaculis blandit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis justo\n' +
              '      ante, viverra vitae lectus sit amet, luctus posuere eros. Aliquam nulla sem, eleifend ut ultricies molestie,\n' +
              '      blandit sed nulla. Sed a laoreet tortor, quis condimentum felis. Ut nibh est, blandit eget augue ac, rhoncus\n' +
              '      tincidunt turpis. Duis feugiat turpis nec mauris vehicula sodales. Vestibulum ante ipsum primis in faucibus orci\n' +
              '      luctus et ultrices posuere cubilia curae; Vivamus egestas, sapien ac fringilla semper, justo sem lacinia neque,\n' +
              '      quis tincidunt quam ipsum vel elit. Nunc sodales nisl vel scelerisque porttitor. Nullam convallis neque tellus,\n' +
              '      nec pellentesque metus rhoncus sed.'
        }
      ]
    }
  },
  methods: {
    selectService(service) {
      this.currentService = service;
    }
  },
  mounted() {
    this.currentService = this.services[0];
  }
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-5">Наши услуги</h1>
    <div class="d-flex align-items-start">
      <div class="col-md-3 nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
<!--        <button class="nav-link btn btn-dark active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</button>-->
<!--        <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</button>-->
<!--        <button class="nav-link" id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" disabled>Disabled</button>-->
<!--        <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</button>-->
<!--        <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</button>-->
        <button
            v-for="service in services"
            :key="service.id"
            type="button"
            class="btn btn-dark"
            data-bs-toggle="pill"
            :class="{ 'active' : currentService && currentService.id === service.id }"
            @click="selectService(service)"
        >
          {{ service.name }}
        </button>
      </div>
      <div class="col-md-9 tab-content" id="v-pills-tabContent">
        <div class="tab-pane fade show active" id="{{ services.id }}" role="tabpanel" aria-labelledby="{{ services.id }}" tabindex="0">
          <img :src="currentService.image" alt="Картинка" class="img-thumbnail me-3" style="width: 100px; height: 100px;">
          <div>
            <h5 class="mb-1">{{ currentService.name }}</h5>
            <p class="mb-1">{{ currentService.description }}</p>
          </div>
        </div>
<!--        <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabindex="0">...</div>-->
<!--        <div class="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabindex="0">...</div>-->
<!--        <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabindex="0">...</div>-->
<!--        <div class="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabindex="0">...</div>-->
      </div>
    </div>

    <!--    <div class="row">-->
<!--      <div class="col-md-3">-->
<!--        <div class="list-group">-->
<!--&lt;!&ndash;          <button type="button" class="list-group-item list-group-item-action list-group-item-dark active" aria-current="true">&ndash;&gt;-->
<!--&lt;!&ndash;            The current button&ndash;&gt;-->
<!--&lt;!&ndash;          </button>&ndash;&gt;-->
<!--&lt;!&ndash;          <button type="button" class="list-group-item list-group-item-action" data-bs-target="# {{ services.id }}" aria-expanded="false" aria-controls=" {{ services.id }}">A second button item</button>&ndash;&gt;-->
<!--&lt;!&ndash;          <button type="button" class="list-group-item list-group-item-action" data-bs-target="# {{ services.id }}" aria-expanded="false" aria-controls=" {{ services.id }}">A third button item</button>&ndash;&gt;-->
<!--&lt;!&ndash;          <button type="button" class="list-group-item list-group-item-action">A fourth button item</button>&ndash;&gt;-->
<!--&lt;!&ndash;          <button type="button" class="list-group-item list-group-item-action">A disabled button item</button>&ndash;&gt;-->
<!--          <button-->
<!--              v-for="service in services"-->
<!--              :key="service.id"-->
<!--              type="button"-->
<!--              class="list-group-item list-group-item-action"-->
<!--              :class="{ 'list-group-item-dark active' : currentService && currentService.id === service.id }"-->
<!--              @click="selectService(service)"-->
<!--          >-->
<!--            {{ service.name }}-->
<!--          </button>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="col-md-9">-->
<!--        <div class="d-flex align-items-center fade show">-->
<!--          <img :src="currentService.image" alt="Картинка" class="img-thumbnail me-3" style="width: 100px; height: 100px;">-->
<!--          <div>-->
<!--            <h5 class="mb-1">{{ currentService.name }}</h5>-->
<!--            <p class="mb-1">{{ currentService.description }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped>
.container {
  min-height: 55vh;
}
</style>