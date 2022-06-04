import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from '@/store/modules'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
const dataState = createPersistedState({
    paths: [
        'auth'
    ]
})

const store = new Vuex.Store({
    modules,
    plugins: [dataState]
})
export default store;