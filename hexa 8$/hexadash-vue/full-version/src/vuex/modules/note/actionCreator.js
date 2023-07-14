import initialState from '@/demoData/note.json';
import mutations from './mutations';

const state = () => ({
  data: initialState,
  loading: false,
  error: null,
});

const actions = {
  async noteDragData({ commit }, data) {
    try {
      commit('labelUpdateBegin');
      commit('labelUpdateSuccess', data);
    } catch (err) {
      commit('labelUpdateErr', err);
    }
  },

  async noteGetData({ commit }) {
    try {
      commit('noteReadBegin');
      commit('noteReadSuccess', initialState);
    } catch (err) {
      commit('noteReadErr', err);
    }
  },

  async noteAddData({ commit }, data) {
    try {
      commit('noteReadBegin');
      commit('noteReadSuccess', data);
    } catch (err) {
      commit('noteReadErr', err);
    }
  },

  async noteDraggable({ commit }, data) {
    try {
      commit('noteReadBegin');
      commit('noteReadSuccess', data);
    } catch (err) {
      commit('noteReadErr', err);
    }
  },

  async noteDeleteData({ commit }, data) {
    try {
      commit('noteReadBegin');
      commit('noteReadSuccess', data);
    } catch (err) {
      commit('noteReadErr', err);
    }
  },

  async onStarUpdate({ commit }, { data, id }) {
    try {
      commit('starUpdateBegin');
      data.map((item) => {
        if (item.key === id) {
          const fav = item;
          if (item.stared) {
            fav.stared = true;
          } else {
            fav.stared = false;
          }
        }
      });
      return commit('starUpdateSuccess', data);
    } catch (err) {
      commit('starUpdateErr', err);
    }
  },

  async onLabelUpdate({ commit }, { data, id, value }) {
    try {
      commit('labelUpdateBegin');
      data.map((item) => {
        if (item.key === id) {
          const fav = item;
          fav.label = value;
        }
        return commit('labelUpdateSuccess', data);
      });
    } catch (err) {
      commit('labelUpdateErr', err);
    }
  },

  async onLabelFilter({ commit }, label) {
    try {
      commit('labelUpdateBegin');
      const data = initialState.filter((item) => {
        return label === 'all' ? initialState : label === 'favorite' ? item.stared : item.label === label;
      });

      commit('labelUpdateSuccess', data);
    } catch (err) {
      commit('labelUpdateErr', err);
    }
  },
};

export default {
  namespaced: false,
  state,
  actions,
  mutations,
};
