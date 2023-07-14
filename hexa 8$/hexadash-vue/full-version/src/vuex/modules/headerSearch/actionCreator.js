import initialState from '../../../demoData/header-search.json';
import mutations from './mutations';

const state = () => {
  return {
    data: initialState
  }
};

const actions = {
  async headerSearchAction({ commit }, searchData) {
    try {
      commit('searchHeaderBegin');
      const data = initialState.filter((item) => {
        return item.title.startsWith(searchData);
      });
      commit('searchHeaderSuccess', data);
    } catch (err) {
      commit('searchHeaderErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
