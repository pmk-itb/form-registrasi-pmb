/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { MAX_PAGE_NUMBER } from '../../../constants/index';

const state = () => ({
  currentActivePageNumber: 1,
  pages: [
    {
      pageNum: 1,
      active: true,
    },
    {
      pageNum: 2,
      active: false,
    },
    {
      pageNum: 3,
      active: false,
    },
  ],
});

const getters = {
  getCurrentActivePageNumber(state) {
    return state.currentActivePageNumber;
  },
};

const mutations = {
  nextPage(state) {
    if (state.currentActivePageNumber < 3) {
      state.pages[state.currentActivePageNumber - 1].active = false;
      state.currentActivePageNumber++;
      state.pages[state.currentActivePageNumber - 1].active = true;
    }
  },
  prevPage(state) {
    if (state.currentActivePageNumber > 1) {
      state.pages[state.currentActivePageNumber - 1].active = false;
      state.currentActivePageNumber--;
      state.pages[state.currentActivePageNumber - 1].active = true;
    }
  },
  changePage(state, payload) {
    if (payload >= 1 && payload <= MAX_PAGE_NUMBER && payload !== state.currentActivePageNumber) {
      state.pages[state.currentActivePageNumber - 1].active = false;
      state.currentActivePageNumber = payload;
      state.pages[state.currentActivePageNumber - 1].active = true;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
};
