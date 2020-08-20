import getUserTempId from "@/utils/userabout";
import { reqRegister, reqLogin, reqLogout } from "@/api";
const state = {
  //用uuid创建,每次请求都携带上
  //用户临时身份标识userTempId 我们在state当中存一份
  //为了以后获取的时候,效率更高一些
  //还要在本地存一份(localstorage)

  //先去从localstorage内部取,有就用,没有就创建
  userTempId: getUserTempId(),
  userInfo: JSON.parse(localStorage.getItem("USERINFO_KEY")) || {},
};
const mutations = {
  RECEIVEUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  RESETUSERINFO(state) {
    state.userInfo = {};
  },
};

const getters = {};
const actions = {
  async register(context, { mobile, password, code }) {
    const result = await reqRegister(mobile, password, code);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  async login(context, userInfo) {
    const result = await reqLogin(userInfo);
    if (result.code === 200) {
      context.commit("RECEIVEUSERINFO", result.data);
      //自动登录需要把登录后的信息存储卡里,不然刷新后vuex中就没有了
      //需要把保存在localstorage中
      localStorage.setItem("USERINFO_KEY", JSON.stringify(result.data));
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  async logout({ commit }) {
    const result = await reqLogout();
    if (result.code === 200) {
      localStorage.removeItem("USERINFO_KEY");
      commit("RESETUSERINFO");
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },
};

const user = {
  state,
  mutations,
  getters,
  actions,
};

export default user;
