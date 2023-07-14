import initialState from '@/demoData/support.json';
import mutations from './mutations';

const state = () => ({
  data: [],
  ticket: [],
  loading: false,
  error: null,
});

const actions = {
  async ticketReadData({ commit }) {
    try {
      commit('ticketReadBegin');
      commit('ticketReadSuccess', initialState);
    } catch (err) {
      commit('ticketReadErr', err);
    }
  },
  async ticketUpdateData({ commit }, data) {
    try {
      commit('ticketReadBegin');
      commit('ticketReadSuccess', data);
    } catch (err) {
      commit('ticketReadErr', err);
    }
  },

  async ticketUpdateSearch ({commit}, {value, key}) {    
   
      try {
        commit('ticketReadBegin');
        const data = initialState.filter(item => item[key].startsWith(value));
        commit('ticketReadSuccess', data);
      } catch (err) {
        commit('ticketReadErr', err);
      }    
  },
  
  async singlePageReade ({commit}, id) {    
    try {
      commit('filterSinglePageReadBegin');
      const data = initialState.filter(item => parseInt(item.id) === parseInt(id));        
      commit('filterSinglePageReadSuccess', data);
    } catch (err) {
      commit('filterSinglePageReadErr', err);
    }    
  }
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
