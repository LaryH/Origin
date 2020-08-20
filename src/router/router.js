import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function(location, onResovled, onRejected) {
  if (onResovled === undefined && onRejected === undefined) {
    return originalPush.call(this, location).catch((err) => err);
  } else {
    return originalPush.call(this, location, onResovled, onRejected);
  }
};
VueRouter.prototype.replace = function(location, onResovled, onRejected) {
  if (onResovled === undefined && onRejected === undefined) {
    return originalReplace.call(this, location).catch((err) => err);
  } else {
    return originalReplace.call(this, location, onResovled, onRejected);
  }
};

const router = new VueRouter({
  mode: "hash",
  routes: routes,
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
