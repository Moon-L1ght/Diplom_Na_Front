//import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from "axios";
import { securedAxiosInstance, plainAxiosInstance } from "@/axios/index.js";


const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js";