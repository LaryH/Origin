import { reqAddOrUpdateCart, reqShopCartList, reqUpdateIsCheck } from "@/api";

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

  async updateIsCheck(context, { skuId, isChecked }) {
    const result = await reqUpdateIsCheck(skuId, isChecked);
    return result.data;
  },

  async updateAllIsCheck({ state, dispatch }, isChecked) {
    let promises = [];
    state.shopCartList.forEach((item) => {
      if (item.isChecked === isChecked) {
        return;
      }
      promises.push(
        dispatch("updateIsCheck", {
          skuId: item.skuId,
          isChecked,
        })
      );
    });
    return Promise.all(promises);
  },
};

export default { actions, state, mutations };
