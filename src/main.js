import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "@/mock/mockService";
import "swiper/css/swiper.css";

import TypeNav from "./components/TypeNav";
import SliderLoop from "./components/SliderLoop";
import Pagination from "./components/Pagination";

Vue.config.productionTip = false;

Vue.component("TypeNav", TypeNav);
Vue.component("SliderLoop", SliderLoop);
Vue.component("Pagination", Pagination);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this; //配置全局事件总线
  },
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
