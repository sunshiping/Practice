import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import book from './modules/book';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    book
  },
  actions,
  getters
});
