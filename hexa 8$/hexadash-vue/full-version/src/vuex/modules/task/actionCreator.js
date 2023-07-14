import initialState from '@/demoData/task.json';
import mutations from './mutations';

const state = () => ({
  data: initialState,
  loading: false,
  error: null,
});

const actions = {
  async taskAddData({ commit }, data) {
    try {
      commit('taskReadBegin');
      commit('taskReadSuccess', data);
    } catch (err) {
      commit('taskReadErr', err);
    }
  },

  async onTaskStarUpdate({ commit }, {data, id }) {

    try {
      commit('starUpdateBegin');

      data.map((item) => {
        if (item.id === id) {
          const fav = item;
          if (fav.favourite) {
            item.favourite = false;
          } else {
            fav.favourite = true;
          }
        }
      });

      return commit('starUpdateSuccess', data);
    } catch (err) {
      commit('starUpdateErr', err);
    }
  },

  async onCompleteUpdate({ commit }, {data, id }) {
    try{
      commit('completeUpdateBegin');
      data.map((item) => {
        if (item.id === id) {
          const complete = item;
          if (complete.completed) {
            item.completed = false;
          } else {
            complete.completed = true;
          }
        }
      });
      return commit('completeUpdateSuccess', data);
    } catch (err) {
      commit('completeUpdateErr', err);
    }
  },

  async ontaskDelete({ commit }, data) {
    try {
      commit('taskReadBegin');
      commit('taskReadSuccess', data);
    } catch (err) {
      commit('taskReadErr', err);
    }
  },

  async ontaskEdit({ commit }, data) {
    try {
      commit('taskReadBegin');
      commit('taskReadSuccess', data);
    } catch (err) {
      commit('taskReadErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
