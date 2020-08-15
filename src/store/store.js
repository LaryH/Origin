import Vue from "vue";
import Vuex from "vuex";

import home from "./home";
import user from "./user";

Vue.use(Vuex);
const state = {};
const mutations = {};
const getters = {};
const actions = {};

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    home,
    user,
  },
});

export default store;
