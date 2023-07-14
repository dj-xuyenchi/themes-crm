import mutations from './mutations';
import initialState from '@/demoData/jobs.json';

const state = () => ({
  jobs: [],
  job: [],
  loading: false,
  error: null,
});

const actions = {
  async jobsReadData({ commit }: { commit: any }) {
    try {
      commit('jobsReadBegin');
      commit('jobsReadSuccess', initialState);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async jobsUpdateData({ commit }: { commit: any }, data: any) {
    try {
      commit('jobsReadBegin');
      commit('jobsReadSuccess', data);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async jobsUpdateSearch({ commit }: { commit: any }, { value, key }: any) {
    try {
      commit('jobsReadBegin');
      const data = initialState.filter((item: any) => item[key].startsWith(value));
      commit('jobsReadSuccess', data);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async sorting({ commit }: { commit: any }, { sortBy, oldState }: any) {
    try {
      commit('jobsReadBegin');
      setTimeout(() => {
        const data = oldState.sort((a: any, b: any) => {
          return sortBy === 'Old' ? b.id - a.id : a.id - b.id;
        });
        commit('jobsReadSuccess', data);
      }, 100);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async filterWithTitleLocation({ commit }: { commit: any }, { title, location }: any) {
    try {
      commit('jobsReadBegin');
      setTimeout(() => {
        const data = initialState.filter((item: any) => {
          return (
            item.title.toLowerCase().indexOf(title.toLowerCase()) >= 0 &&
            item.location.toLowerCase().indexOf(location.toLowerCase()) >= 0
          );
        });

        commit('jobsReadSuccess', data);
      }, 100);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async singleJobPageReade({ commit }: { commit: any }, id: any) {
    try {
      commit('filterSingleJobPageReadBegin');
      const data = initialState.filter((item: any) => parseInt(item.id) === parseInt(id));

      commit('filterSingleJobPageReadSuccess', data);
    } catch (err) {
      commit('filterSingleJobPageReadErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
