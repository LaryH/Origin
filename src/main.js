import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import "@/mock/mockService";
import "swiper/css/swiper.css";
import * as API from "@/api";
import "default-passive-events";

import TypeNav from "./components/TypeNav";
import SliderLoop from "./components/SliderLoop";
import Pagination from "./components/Pagination";

import { MessageBox, Message } from "element-ui";

Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

Vue.config.productionTip = false;

Vue.component("TypeNav", TypeNav);
Vue.component("SliderLoop", SliderLoop);
Vue.component("Pagination", Pagination);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this; //配置全局事件总线
    //目的并不是以它作为事件总线，因为它没法使用$on和$emit,我们只是为了让所有的组件能用API
    Vue.prototype.$API = API;
  },
  el: "#app",
  render: (h) => h(App),
  router,
  store,
});
