import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const mutiClick = VueRouter.prototype.push;

VueRouter.prototype.push = function(location) {
  return mutiClick.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "hash",
  routes: routes,
});

export default router;
