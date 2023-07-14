import mutations from './mutations';
import Cookies from 'js-cookie';

const state = () => ({
  login: Cookies.get('logedIn'),
  loading: false,
  error: null,
});

const actions = {
  async login({ commit }: { commit: any }) {
    try {
      commit('loginBegin');
      Cookies.set('logedIn', 'true');
      return commit('loginSuccess', true);
    } catch (err) {
      commit('loginErr', err);
    }
  },
  async logOut({ commit }: { commit: any }) {
    try {
      commit('logoutBegin');
      Cookies.remove('logedIn');
      commit('logoutSuccess', null);
    } catch (err) {
      commit('logoutErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
