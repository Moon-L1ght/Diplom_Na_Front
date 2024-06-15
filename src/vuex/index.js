import { createStore } from 'vuex'
import sessionManager from "@/vuex/modules/session_manager.js";
// const state = {
//     user: null,
// }

export default createStore({
    state: {},
    getters: {},
    actions: {},
    mutations: {},
    modules: {
        sessionManager,
    }
});