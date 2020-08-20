import getUserTempId from "@/utils/userabout";
const state = {
  //用uuid创建,每次请求都携带上
  //用户临时身份标识userTempId 我们在state当中存一份
  //为了以后获取的时候,效率更高一些
  //还要在本地存一份(localstorage)

  //先去从localstorage内部取,有就用,没有就创建
  userTempId: getUserTempId(),
};
const mutations = {};
const getters = {};
const actions = {};

const user = {
  state,
  mutations,
  getters,
  actions,
};

export default user;
