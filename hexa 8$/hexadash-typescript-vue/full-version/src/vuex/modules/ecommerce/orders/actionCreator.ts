import staticData from '@/demoData/orders.json';
import mutations from './mutations';

const state = () => ({
  data: staticData,
  loading: false,
  error: null,
});

const actions = {
  async orderFilter({ commit }: { commit: any }, { column, value }: any) {
    try {
      commit('filterOrderBegin');
      const data = staticData.filter((item: any) => {
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
