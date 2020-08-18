import { reqCategoryList, reqBannerList, reqFloorList } from "@/api/";

const state = {
  categorys: [],
  banners: [],
  floors: [],
};

const getters = {
  categoryList(state) {
    return state.categorys;
  },
  bannerList(state) {
    return state.banners;
  },
  floorList(state) {
    return state.floors;
  },
};

const mutations = {
  RECEIVESETCATEGORYS(state, payload) {
    state.categorys = payload;
  },
  RECEIVEBANNERLIST(state, banners) {
    state.banners = banners;
  },
  RECEIVEFLOORLIST(state, floors) {
    state.floors = floors;
  },
};

const actions = {
  category({ commit }) {
    reqCategoryList().then((response) => {
      if (response.code === 200) {
        commit("RECEIVESETCATEGORYS", response.data);
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
