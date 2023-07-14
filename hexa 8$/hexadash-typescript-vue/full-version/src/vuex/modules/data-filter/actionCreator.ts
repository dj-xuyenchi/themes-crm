import initialState from '@/demoData/data-table.json';
import mutations from './mutations';

const state = () => ({
  tableData: [],
  loading: false,
  error: null,
});

const actions = {
  async tableReadData({ commit }: { commit: any }) {
    try {
      commit('dataTableReadBegin');
      commit('dataTableReadSuccess', initialState);
    } catch (err) {
      commit('dataTableReadErr', err);
    }
  },

  async filterWithSubmit({ commit }: { commit: any }, { id, status }: any) {
    try {
      commit('filterWithSubmitBegin');
      setTimeout(() => {
        const data = initialState.filter((item: any) => {
          return item.id.indexOf(id) >= 0 && item.status.toLowerCase().indexOf(status.toLowerCase()) >= 0;
        });

        commit('filterWithSubmitSuccess', data);
      }, 100);
    } catch (err) {
      commit('filterWithSubmitErr', err);
    }
  },
  async dataLiveFilter({ commit }: { commit: any }, { value, key }: any) {
    try {
      commit('dataLiveFilterBegin');
      const data = initialState.filter((item: any) => item[key].toLowerCase().startsWith(value.toLowerCase()));
      commit('dataLiveFilterSuccess', data);
    } catch (err) {
      commit('dataLiveFilterErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
