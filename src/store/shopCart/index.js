import { reqAddOrUpdateCart, reqShopCartList } from "@/api";

const state = {
  shopCartList: [],
};
const mutations = {
  RECEIVESHOPCARTLIST(state, shopCartList) {
    state.shopCartList = shopCartList;
  },
};
const actions = {
  // dispatch如果传的是一个参数,可以直接使用,如果是多个参数,传的是对象
  async addOrUpdateCart(context, { skuId, skuNum }) {
    const result = await reqAddOrUpdateCart(skuId, skuNum);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("failed"));
    }
  },

  async getShopCartList({ commit }) {
    const result = await reqShopCartList();
    commit("RECEIVESHOPCARTLIST", result.data);
  },
};

export default { actions, state, mutations };
