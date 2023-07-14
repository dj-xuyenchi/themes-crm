import staticData from '@/config/config';
import mutations from './mutations';

const state = () => ({
  data: staticData.darkMode,
  rtlData: staticData.rtl,
  topMenu: staticData.topMenu,
  main: staticData.mainTemplate,
  loading: false,
  rtlLoading: false,
  menuLoading: false,
  error: null,
});

const actions = {
  async changeLayoutMode({ commit }: { commit: any }, value: any) {
    try {
      commit('changeLayoutBegin');
      setTimeout(() => commit('changeLayoutSuccess', value), 10);
    } catch (err) {
      commit('changeLayoutErr', err);
    }
  },

  async changeRtlMode({ commit }: { commit: any }, value: any) {
    try {
      commit('changeRtlBegin');
      setTimeout(() => commit('changeRtlSuccess', value), 10);
    } catch (err) {
      commit('changeRtlErr', err);
    }
  },

  async changeMenuMode({ commit }: { commit: any }, value: any) {
    try {
      commit('changeMenuBegin');
      setTimeout(() => commit('changeMenuSuccess', value), 10);
    } catch (err) {
      commit('changeMenuErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
