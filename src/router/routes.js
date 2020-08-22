import AddCartSuccess from "@/pages/AddCartSuccess";
import Detail from "@/pages/Detail";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import Paysuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";

export default [
  {
    path: "/center",
    component: Center,
  },
  {
    path: "/paysuccess",
    component: Paysuccess,
  },
  {
    path: "/pay",
    component: Pay,
  },
  {
    path: "/trade",
    component: Trade,
  },
  {
    path: "/shopcart",
    component: ShopCart,
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
  },
  {
    path: "/detail/:skuId",
    component: Detail,
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Login",
    path: "/login",
    component: Login,
    meta: {
      isHide: true,
    },
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    meta: {
      isHide: true,
    },
  },
  {
    name: "Search",
    path: "/search/:keyword?",
    component: Search,
    // props: true,
    // props(route) {
    //   return {
    //     keyword: route.params.keyword,
    //     password: route.query.keyword,
    //   };
    // },
  },
  //重定向
  {
    path: "/",
    redirect: "/home",
  },
];
