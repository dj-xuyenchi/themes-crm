import initialState from '@/demoData/contact.json';
import mutations from './mutations';

const state = () => ({
  data: initialState,
  loading: false,
  error: null,
});

const actions = {
  async contactGetData({ commit }) {
    try {
      commit('readBegin');
      commit('readSuccess', initialState);
    } catch (err) {
      commit('readErr', err);
    }
  },
  async contactAddData({ commit }, data) {
    try {
      commit('readBegin');
      commit('readSuccess', data);
    } catch (err) {
      commit('readErr', err);
    }
  },
  async contactDeleteData({ commit }, data) {
    try {
      commit('readBegin');
      commit('readSuccess', data);
    } catch (err) {
      commit('readErr', err);
    }
  },
  async contactSearchData({ commit }, value) {
    try {
      commit('readBegin');
      const data = initialState.filter((item) => item.name.toUpperCase().startsWith(value.toUpperCase()));
      commit('readSuccess', data);
    } catch (err) {
      commit('readErr', err);
    }
  },

  async onContactStarUpdate({ commit }, { data, id }) {
    
    try {
      commit('starUpdateBegin');
      data.map((item) => {
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
