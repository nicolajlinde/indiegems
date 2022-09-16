import { createStore } from "vuex";
import getters from "@/store/getters";
import mutations from "@/store/mutations";
import actions from "@/store/actions";
import { articlesModule } from "./articles";
import { gamesModule } from "./games";

export default createStore({
  modules: {
    articlesModule,
    gamesModule,
  },
  state: {},
  getters: getters,
  mutations: mutations,
  actions: actions,
});
