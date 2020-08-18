import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "@/mock/mockService";
import "swiper/css/swiper.css";

import TypeNav from "./components/TypeNav";
import SliderLoop from "./components/SliderLoop";

Vue.config.productionTip = false;

Vue.component("TypeNav", TypeNav);
Vue.component("SliderLoop", SliderLoop);

new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
