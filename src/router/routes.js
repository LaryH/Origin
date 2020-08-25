// import函数把对应路径的组件打包成单个文件
// 在调用的

// import AddCartSuccess from "@/pages/AddCartSuccess";
const AddCartSuccess = () => import("@/pages/AddCartSuccess");
// import Detail from "@/pages/Detail";
const Detail = () => import("@/pages/Detail");
// import Home from "@/pages/Home";
const Home = () => import("@/pages/Home");
// import Login from "@/pages/Login";
const Login = () => import("@/pages/Login");
// import Register from "@/pages/Register";
const Register = () => import("@/pages/Register");
// import Search from "@/pages/Search";
const Search = () => import("@/pages/Search");
// import ShopCart from "@/pages/ShopCart";
const ShopCart = () => import("@/pages/ShopCart");
// import Trade from "@/pages/Trade";
const Trade = () => import("@/pages/Trade");
// import Pay from "@/pages/Pay";
const Pay = () => import("@/pages/Pay");
// import Paysuccess from "@/pages/PaySuccess";S
const Paysuccess = () => import("@/pages/PaySuccess");
// import Center from "@/pages/Center";
const Center = () => import("@/pages/Center");
// import MyOrder from "@/pages/Center/MyOrder";
const MyOrder = () => import("@/pages/Center/MyOrder");
// import GroupOrder from "@/pages/Center/GroupOrder";
const GroupOrder = () => import("@/pages/Center/GroupOrder");

export default [
  {
    path: "/center",
    component: Center,
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "grouporder",
        component: GroupOrder,
      },
      {
        path: "",
        redirect: "myorder",
      },
    ],
  },
  {
    path: "/paysuccess",
    component: Paysuccess,
    beforeEnter: (to, from, next) => {
      if (from.path === "/pay") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/pay",
    component: Pay,
    beforeEnter: (to, from, next) => {
      if (from.path === "/trade") {
        next();
      } else {
        next(false);
      }
    },
  },
  {
    path: "/trade",
    component: Trade,
    beforeEnter: (to, from, next) => {
      if (from.path === "/shopcart") {
        next();
      } else {
        next(false);
      }
    },
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
