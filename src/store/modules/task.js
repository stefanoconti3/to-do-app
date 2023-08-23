export const state = {
  tasks: []
};

export const mutations = {
  CREATE_TASK(state, payload) {
    state.tasks.push(payload);
  },
  COMPLETE_TASK(state, payload) {
    state.tasks = state.tasks.map(task => {
      if (task.id === payload.id) {
        task.mark = true;
      }
      return task;
    });
  },
  DELETE_TASK(state, payload) {
    state.tasks = state.tasks.filter(task => task.id !== payload.id);
  },
};

export const actions = {
  createTask({ commit }, payload) {
    commit("CREATE_TASK", payload);
  },
  completeTask({ commit }, payload) {
    commit("COMPLETE_TASK", payload);
  },
  deleteTask({ commit }, payload) {
    commit("DELETE_TASK", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
