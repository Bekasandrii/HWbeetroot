import Vue from 'vue'
import Vuex from 'vuex'
import commonActions from "./actions/actions.js"
import apiRequests from "./actions/api-requests.js"
import mutations from "./mutations/mutations.js"
import getters from "./getters/getters.js"

const actions = {...commonActions, ...apiRequests}

// asking Vue to use Vuex
Vue.use(Vuex);

let store = new Vuex.Store({
    // storage for arrays, objects, data ets...
    state: {
        products: [],
        cart: [],
    },
    // in mutation we will change state / Capital letter
    mutations,
    // executed asynchronously / Capital letter
    actions,
    // short way to info in state / Capital letter
    getters,
});

export default store;