import initialState from '../../../demoData/emailData.json';
import mutations from './mutations';

const state = () => ({
  data: initialState.allMessage,
  allMessage: initialState.allMessage,
  sLoading: false,
  loading: false,
  error: null,
});

const actions = {
  async filterSinglePage({ commit }: { commit: any }, paramsId: any) {
    try {
      commit('singleEmailBegin');
      const data = initialState.allMessage.filter((email) => {
        return email.id === paramsId;
      });
      commit('singleEmailSuccess', data);
    } catch (err) {
      commit('singleEmailErr', err);
    }
  },
  async onStarUpdate({ commit }: { commit: any }, id: any) {
    try {
      commit('starUpdateBegin');
      initialState.allMessage.map((email) => {
        if (email.id === id) {
          return email.stared ? (email.stared = false) : (email.stared = true);
        }
        return commit('starUpdateSuccess', initialState.allMessage);
      });
    } catch (err) {
      commit('starUpdateErr', err);
    }
  },
  async onSortingAscending({ commit }: { commit: any }) {
    try {
      commit('starUpdateBegin');
      const data = initialState.allMessage.sort((a: any, b: any) => {
        return parseInt(b.id, 10) - parseInt(a.id, 10);
      });
      commit('starUpdateSuccess', data);
    } catch (err) {
      commit('starUpdateErr', err);
    }
  },
  async onSortingDescending({ commit }: { commit: any }) {
    try {
      commit('starUpdateBegin');
      const data = initialState.allMessage.sort((a: any, b: any) => {
        return parseInt(a.id, 10) - parseInt(b.id, 10);
      });
      commit('starUpdateSuccess', data);
    } catch (err) {
      commit('starUpdateErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
