import mutations from './mutations';
import initialState from '@/demoData/jobs.json';

const state = () => ({
  jobs: [],
  job: [],
  loading: false,
  error: null,
});

const actions = {
  async jobsReadData({ commit }) {
    try {
      commit('jobsReadBegin');
      commit('jobsReadSuccess', initialState);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async jobsUpdateData({ commit }, data) {
    try {
      commit('jobsReadBegin');
      commit('jobsReadSuccess', data);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async jobsUpdateSearch({ commit }, {value, key}) {
    try {
      commit('jobsReadBegin');
      const data = initialState.filter(item => item[key].startsWith(value));
      commit('jobsReadSuccess', data);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async sorting({ commit }, {sortBy, oldState}) {
    try {
      commit('jobsReadBegin');
      setTimeout(() => {
        const data = oldState.sort((a, b) => {          
          return sortBy === 'Old' ? b.id - a.id : a.id - b.id;
        });        
        commit('jobsReadSuccess', data);
      }, 100);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async filterWithTitleLocation({ commit }, {title, location}) {
    try {
      commit('jobsReadBegin');
      setTimeout(() => {
        const data = initialState.filter((item) => {          
          return item.title.toLowerCase().indexOf(title.toLowerCase()) >= 0 && item.location.toLowerCase().indexOf(location.toLowerCase()) >= 0;
        });        
        
        commit('jobsReadSuccess', data);
      }, 100);
    } catch (err) {
      commit('jobsReadErr', err);
    }
  },

  async singleJobPageReade({ commit }, id) {
    try {
      commit('filterSingleJobPageReadBegin');
      const data = initialState.filter(item => parseInt(item.id) === parseInt(id));       
        
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
