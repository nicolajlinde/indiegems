import getters from "@/store/games/getters";
import mutations from "@/store/games/mutations";
import actions from "@/store/games/actions";

export const gamesModule = {
  state: {
    games: [
      {
        title: 'Overwatch',
        platforms: ['PC', 'PS4'],
        publishers: ['Blizzard Entertainment'],
        developers: ['Blizzard Entertainment'],
        genre: ['Shit', 'Game'],
        release_dates: ['1/1/2010'],
        score: 33 
      }
    ]
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
