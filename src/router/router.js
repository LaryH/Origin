import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location) {
  return originalPush.call(this, location).catch((err) => err);
};
VueRouter.prototype.replace = (location) => {
  return originalReplace.call(this, location).catch((err) => err);
};

const router = new VueRouter({
  mode: "hash",
  routes: routes,
});

export default router;
