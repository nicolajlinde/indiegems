import { createStore } from "vuex";
import getters from "@/store/development/getters";
import mutations from "@/store/development/mutations";
import actions from "@/store/development/actions";

export default createStore({
  modules: {},
  state: {},
  getters: getters,
  mutations: mutations,
  actions: actions,
});
