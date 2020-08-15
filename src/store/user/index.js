const state = {
  user: {
    mobile: "",
    password: "",
  },
  code: "",
};
const mutations = {
  REGISTER(state, payload) {
    state.user = payload;
  },
};
const getters = {};
const actions = {
  
};

const user = {
  state,
  mutations,
  getters,
  actions,
};

export default user;
