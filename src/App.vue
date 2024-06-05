<template>
  <div id="app">
<!--    <Header_auth />-->
    <Header />
    <router-view />
<!--    <Catalog />-->
    <Footer />
  </div>

</template>

<script>
import Header from './components/Header.vue'
import Header_auth from './components/Header_auth.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
import Catalog from './components/Pages/Catalog.vue'

export default {
  components: {
    Header,
    Header_auth,
    Content,
    Footer,
    Catalog,
  }
}
</script>

<style>
#app {
  background: #dddddd;
}
</style>