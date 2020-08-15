import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import TypeNav from "./components/TypeNav";
import "@/mock/mockService";
Vue.config.productionTip = false;

Vue.component("TypeNav", TypeNav);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
