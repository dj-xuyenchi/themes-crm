import staticData from '@/demoData/projectData.json';
import mutations from './mutations';

const state = () => ({
  data: staticData,
  singData: staticData,
  loading: false,
  error: null,
});

const actions = {
  async filterSinglePage({ commit }, paramsId) {
    try {
      commit('singleProjectBegin');
      const data = staticData.filter((project) => {
        return project.id === parseInt(paramsId, 10);
      });
      commit('singleProjectSuccess', data);
    } catch (err) {
      commit('singleProjectErr', err);
    }
  },
  async filterProjectByStatus({ commit }, status) {
    try {
      commit('filterProjectBegin');
      const data = staticData.filter((project) => {
        if (status !== 'all') {
          return project.status === status;
        }
        return staticData;
      });
      commit('filterProjectSuccess', data);
    } catch (err) {
      commit('filterProjectErr', err.toString());
    }
  },

  async sortingProjectByCategory({ commit }, sortBy) {
    try {
      commit('sortingProjectBegin');
      const data = staticData.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
      setTimeout(() => {
        commit('sortingProjectSuccess', data);
      }, 500);
    } catch (err) {
      commit('sortingProjectErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
