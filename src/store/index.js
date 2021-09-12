import { createStore } from 'vuex';
import pages from './modules/pages';

const store = createStore({
  modules: {
    pages: pages,
  },
});

export default store;
