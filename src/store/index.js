import Vue from "vue";
import Vuex from "vuex";
import task from "./modules/task";

Vue.use(Vuex);

const state = {};

const mutations = {};

export const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    task
  },
});
