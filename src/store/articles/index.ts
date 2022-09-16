import getters from "@/store/articles/getters";
import mutations from "@/store/articles/mutations";
import actions from "@/store/articles/actions";

export const articlesModule = {
  state: {
    reviews: [
      {
        id: 1,
        title: 'Unity for Indie Games',
        subtitle: 'Is Unity a good tool for developing indie games.',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        author: 'Nicolaj Linde',
        date: '16-09-2022',
        cover_image: 'img.jpg',
        tags: ['Unity', 'Game Development'],
        // score: 33
      }
    ]
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
};
