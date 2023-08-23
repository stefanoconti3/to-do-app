export const state = {
  tasks: []
};

export const mutations = {
  CREATE_TASK(state, payload) {
    state.tasks.push(payload);
  },
  COMPLETE_TASK(state) {
  },
  DELETE_TASK(state) {
  },
};

export const actions = {
  createTask({ commit }, payload) {
    commit("CREATE_TASK", payload);
  },
  completeTask({ commit }) {
    commit("COMPLETE_TASK");
  },
  deleteTask({ commit }) {
    commit("DELETE_TASK");
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
