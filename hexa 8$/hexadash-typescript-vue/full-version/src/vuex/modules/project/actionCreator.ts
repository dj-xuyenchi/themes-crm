import staticData from '@/demoData/projectData.json';
import mutations from './mutations';

const state = () => ({
  data: staticData,
  singData: staticData,
  loading: false,
  error: null,
});

const actions = {
  async filterSinglePage({ commit }: { commit: any }, paramsId: any) {
    try {
      commit('singleProjectBegin');
      const data = staticData.filter((project: any) => {
        return project.id === parseInt(paramsId, 10);
      });
      commit('singleProjectSuccess', data);
    } catch (err) {
      commit('singleProjectErr', err);
    }
  },
  async filterProjectByStatus({ commit }: { commit: any }, status: any) {
    try {
      commit('filterProjectBegin');
      const data = staticData.filter((project: any) => {
        if (status !== 'all') {
          return project.status === status;
        }
        return staticData;
      });
      commit('filterProjectSuccess', data);
    } catch (err: any) {
      commit('filterProjectErr', err.toString());
    }
  },

  async sortingProjectByCategory({ commit }: { commit: any }, sortBy: any) {
    try {
      commit('sortingProjectBegin');
      const data = staticData.sort((a: any, b: any) => {
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
