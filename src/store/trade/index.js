import { reqTradeOrder, reqSubmitOrder } from "@/api";

const state = {
  tradeInfo: {},
};
const mutations = {
  RECEIVETRADEINFO(state, tradeInfo) {
    state.tradeInfo = tradeInfo;
  },
};
const getters = {};
const actions = {
  async getTradeInfo({ commit }) {
    const result = await reqTradeOrder();
    if (result.code === 200) {
      commit("RECEIVETRADEINFO", result.data);
    }
  },

  async getSubmitOrder(context, { tradeNo, tradeInfo }) {
    try {
      const result = await reqSubmitOrder(tradeNo, tradeInfo);
      console.log(result.data);
      if (result.code === 200) {
        return result.data;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
};

const trade = {
  state,
  mutations,
  getters,
  actions,
};
export default trade;
