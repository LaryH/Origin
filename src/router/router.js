import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import store from "@/store/store";

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
  routes,
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, form, next) => {
  // to 代表目标(准备去的组件) 路由对象
  // from 代表起始(从哪个组件) 路由对象
  // next : Function
  // next() 放行 next(false) 停在当前位置
  let targetPath = to.path;
  //判断是否是trade pay paysuccess center center/myoder center/grouporder
  if (
    targetPath.startsWith("/trade") ||
    targetPath.startsWith("/pay") ||
    targetPath.startsWith("/center")
  ) {
    if (store.state.user.userInfo.name) {
      next();
    } else {
      next({ path: "/login?redirect=" + targetPath });
    }
  } else {
    next();
  }
});
export default router;
