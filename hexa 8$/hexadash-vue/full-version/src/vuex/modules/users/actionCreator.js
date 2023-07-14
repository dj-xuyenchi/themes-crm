import staticData from '@/demoData/teamData.json';
import mutations from './mutations';

const state = () => ({
  data: staticData,
  loading: false,
  error: null,
});

const actions = {
  async teamGetData({ commit }) {
    try {
      commit('teamDataBegin');
      commit('teamDataSuccess', staticData);
    } catch (err) {
      commit('teamDataErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
