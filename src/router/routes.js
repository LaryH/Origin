import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";

export default [
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
