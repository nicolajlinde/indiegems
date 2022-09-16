import { createStore } from "vuex";
import getters from "@/store/reviews/getters";
import mutations from "@/store/reviews/mutations";
import actions from "@/store/reviews/actions";

export default createStore({
  modules: {},
  state: {},
  getters: getters,
  mutations: mutations,
  actions: actions,
});
