import staticData from '@/demoData/orders.json';
import mutations from './mutations';

const state = () => ({
  data: staticData,
  loading: false,
  error: null,
});

const actions = {
  async orderFilter({ commit }, { column, value }) {
    try {
      commit('filterOrderBegin');
      const data = staticData.filter((item) => {
        if (value !== '') {
          return item[column] === value;
        }
        return item;
      });
      commit('filterOrderSuccess', data);
    } catch (err) {
      commit('filterOrderErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
