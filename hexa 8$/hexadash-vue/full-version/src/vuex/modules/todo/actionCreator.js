import initialState from '@/demoData/todo.json';
import mutations from './mutations';

const state = () => ({
  data: initialState,
  loading: false,
  error: null,
});

const actions = {
  async ToDoGetData({ commit }) {
    try {
      commit('todoReadBegin');
      commit('todoReadSuccess', initialState);
    } catch (err) {
      commit('todoReadErr', err);
    }
  },

  async ToDoAddData({ commit }, data) {
    try {
      commit('todoReadBegin');
      commit('todoReadSuccess', data);
    } catch (err) {
      commit('todoReadErr', err);
    }
  },

  async ToDoDeleteData({ commit }, data) {
    try {
      commit('todoReadBegin');
      commit('todoReadSuccess', data);
    } catch (err) {
      commit('todoReadErr', err);
    }
  },

  async onTodoStarUpdate({ commit }, { data, id }) {
    try {
      commit('todoStarUpdateBegin');
      data.map((item) => {
        if (item.key === id) {
          const fav = item;
          if (item.favorite) {
            fav.favorite = false;
          } else {
            fav.favorite = true;
          }
        }
        return commit('todoStarUpdateSuccess', data);
      });
    } catch (err) {
      commit('todoStarUpdateErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
