import {
  reqAddOrUpdateCart,
  reqShopCartList,
  reqUpdateIsCheck,
  reqDeleteCart,
} from "@/api";

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

  // 获取购物车列表
  async getShopCartList({ commit }) {
    const result = await reqShopCartList();
    commit("RECEIVESHOPCARTLIST", result.data);
  },

  //更新选中
  async updateIsCheck(context, { skuId, isChecked }) {
    const result = await reqUpdateIsCheck(skuId, isChecked);
    return result.data;
  },

  //更新全选
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

  //删除单个商品
  async deleteCart(context, skuId) {
    const result = await reqDeleteCart(skuId);
    if (result.code === 200) {
      return "delete success";
    } else {
      return Promise.reject(new Error("delete failed"));
    }
  },

  //删除选中商品
  async deleteCarts({ state, dispatch }) {
    let promises = [];
    state.shopCartList.forEach((item) => {
      if (!item.isChecked) {
        return;
      }
      promises.push(dispatch("deleteCart", item.skuId));
    });
    return Promise.all(promises);
  },
};

export default { actions, state, mutations };
