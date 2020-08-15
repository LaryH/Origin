import { reqCategoryList, reqBannerList, reqFloorList } from "@/api/";

const state = {
  categorys: [],
  banerList: [],
  floorList: [],
};

const getters = {
  categoryList(state) {
    return state.categorys;
  },
};

const mutations = {
  SETCATEGORYS(state, payload) {
    state.categorys = payload;
  },
  RECEIVEBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  RECEIVEFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};

const actions = {
  category({ commit }) {
    reqCategoryList().then((response) => {
      if (response.code === 200) {
        commit("SETCATEGORYS", response.data);
      }
    });
  },
  async getBannerList({ commit }) {
    const result = await reqBannerList();
    if (result.code === 200) {
      commit("RECEIVEBANNERLIST", result.data);
    }
  },
  async getFloorList({ commit }) {
    const result = await reqFloorList();
    if (result.code === 200) {
      commit("RECEIVEFLOORLIST", result.data);
    }
  },
};

const home = {
  state,
  mutations,
  getters,
  actions,
};

export default home;
