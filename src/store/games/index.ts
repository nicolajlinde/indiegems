import { createStore } from "vuex";
import getters from "@/store/games/getters";
import mutations from "@/store/games/mutations";
import actions from "@/store/games/actions";

export default createStore({
  modules: {},
  state: {},
  getters: getters,
  mutations: mutations,
  actions: actions,
});
