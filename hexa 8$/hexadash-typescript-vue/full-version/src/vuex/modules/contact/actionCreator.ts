import initialState from '@/demoData/contact.json';
import mutations from './mutations';

const state = () => ({
  data: initialState,
  loading: false,
  error: null,
});

const actions = {
  async contactGetData({ commit }: { commit: any }) {
    try {
      commit('readBegin');
      commit('readSuccess', initialState);
    } catch (err) {
      commit('readErr', err);
    }
  },
  async contactAddData({ commit }: { commit: any }, data: any) {
    try {
      commit('readBegin');
      commit('readSuccess', data);
    } catch (err) {
      commit('readErr', err);
    }
  },
  async contactDeleteData({ commit }: { commit: any }, data: any) {
    try {
      commit('readBegin');
      commit('readSuccess', data);
    } catch (err) {
      commit('readErr', err);
    }
  },
  async contactSearchData({ commit }: { commit: any }, value: any) {
    try {
      commit('readBegin');
      const data = initialState.filter((item: any) => item.name.toUpperCase().startsWith(value.toUpperCase()));
      commit('readSuccess', data);
    } catch (err) {
      commit('readErr', err);
    }
  },

  async onContactStarUpdate({ commit }: { commit: any }, { data, id }: any) {

    try {
      commit('starUpdateBegin');
      data.map((item: any) => {
        if (item.id === id) {
          const fav = item;
          if (item.stared) {
            fav.stared = false;
          } else {
            fav.stared = true;
          }
        }
        return commit('starUpdateSuccess', data);
      });
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
