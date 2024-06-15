<template>
  <div id="app">
<!--    <Header_auth :user="user" />-->
    <Header />
    <router-view />
    <Footer />
  </div>

</template>

<script>
import Header from './components/Header.vue'
// import Header_auth from './components/Header_auth.vue'
import Footer from './components/Footer.vue'
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {
    // Header_auth,
    Header,
    Footer,
  },
  data () {
    return {
      user: null
    }
  },
  // async created() {
  //   const response = await axios.get('http://localhost:3001/login', {
  //     headers: {
  //       'Authorization': `Bearer ${localStorage.getItem('token')}`,
  //     }
  //   });
  //   this.$store.dispatch('user', response.data);
  // }
}
</script>

<style>
#app {
  background: #dddddd;
}
</style>