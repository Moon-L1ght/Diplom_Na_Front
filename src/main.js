//import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import 'bootstrap';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import axios from "./axios/index.js";

let localAuthToken = localStorage.auth_token;
let cookieExists = localAuthToken !== "undefined" && localAuthToken !== null;
if (cookieExists) {
    const auth_token = localStorage.getItem("auth_token");
    const authTokenExists = auth_token !== "undefined" && auth_token !== null;
    if (authTokenExists) {
        store.dispatch("loginUserWithToken", { auth_token });
    }
}

const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios;
app.use(store)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";